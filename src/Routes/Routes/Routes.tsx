import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About/About";
import Contact from "../../components/Pages/Contact/Contact/Contact";
import Home from "../../components/Pages/Home/Home/Home";
import Shop from "../../components/Pages/Shop/Shop/Shop";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
]) 