import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "Components";
import { GlobalStyles } from "./GlobalStyles";
import { App } from "./App";

const root = createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <GlobalStyles />
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);
