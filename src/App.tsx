import { useRoutes } from "raviger";

import { Home } from "components";

const routes = {
    "/": () => <Home />,
}

export const App = () => {
    const route = useRoutes(routes)
    return (
        <>
            {/* <div>
                <Link href="/">Home</Link>
                <Link href="/not">Not Home</Link>
            </div> */}
            {route}
        </>
    );
};
