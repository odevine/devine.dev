import { useEffect, createContext, useState, ReactNode } from "react";

const getTheme = () => {
    // Check if user has a previously stored preference
    let theme = localStorage.getItem("theme");
    if (theme === null) {
        // If not, default to user system preference
        const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkPref.matches) {
            theme = "dark";
            localStorage.setItem("theme", theme);
        } else {
            theme = "light";
            localStorage.setItem("theme", theme);
        }
    }
    return theme as "dark" | "light";
}

const ThemeContext = createContext({
    theme: getTheme(),
    setTheme: (v: "light" | "dark") => { v },
    toggleTheme: () => {},
});

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState(getTheme);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    return <ThemeContext.Provider
        value={{
            theme,
            setTheme,
            toggleTheme,
        }}
    >
        {children}
    </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider };