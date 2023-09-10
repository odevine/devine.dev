// import { styled } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "Components";

export const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (<button onClick={toggleTheme}  >
        Toggle
        {/* <ThemeToggleIcon /> */}
    </button>);
};