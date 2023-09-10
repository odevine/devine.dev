import { useContext } from "react";

import { ThemeContext } from "Components"

import { HeaderContainer } from "./HeaderStyled"

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (<HeaderContainer>
        Header Bar
        <button onClick={() => toggleTheme()}>{theme}</button>
    </HeaderContainer>);
}