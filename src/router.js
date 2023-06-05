import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Detail from "./Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/detail",
        element: <Detail />
    }

]);

export default router