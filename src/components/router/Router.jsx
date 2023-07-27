import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import AboutUs from "../../pages/AboutUs";
import Example from "../../pages/Example";
//import Home from "../../pages/Home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "home",
                    element: <Home />,
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "about",
                    element: <AboutUs />,
                    children: [
                        {
                            path: "example", element: <Example />
                        }
                    ]
                }
            ]
        },

    ]);

    return <RouterProvider router={router} />;
}

export default Router;