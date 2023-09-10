import { useContext } from "react";
import { useRoutes } from "raviger";

import { Home, Header, ThemeContext } from "Components";
import { AppWrapper } from "./GlobalStyles";

const routes = {
    "/": () => <Home />,
}

export const App = () => {
    const route = useRoutes(routes)
    const { theme } = useContext(ThemeContext);

    return (
        <AppWrapper className={theme}>
            <Header />
            {/* <div>
                <Link href="/">Home</Link>
                <Link href="/not">Not Home</Link>
            </div> */}
            {route}
        </AppWrapper>
    );
}