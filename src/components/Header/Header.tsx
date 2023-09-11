import { ThemeToggleIcon } from "Components"
import { HeaderContainer } from "./HeaderStyled"

export const Header = () => {
    return (<HeaderContainer>
        Header Bar
        <ThemeToggleIcon/>
    </HeaderContainer>);
}