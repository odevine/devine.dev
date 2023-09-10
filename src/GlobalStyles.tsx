import { createGlobalStyle, styled } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html * {
        font-family: Consolas, 'Courier New', monospace;
    }

    * {
        padding: 0;
        margin: 0;
    }

    .dark{
        background-color: #333;
        color: #eee;
    }

    .light{
        background-color: #eee;
        color: #333;
    }
`;

export const AppWrapper = styled.div`
    min-height: 100vh;
`;