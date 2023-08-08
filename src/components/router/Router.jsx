import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import AboutUs from "../../pages/AboutUs";
import All from "../products-pages/All";
import Men from "../products-pages/Men";
import Women from "../products-pages/Women";
import Jewelery from "../products-pages/Jewelery";
import Electronics from "../products-pages/Electronics";
import ItemsPage from "../../pages/ItemsPage";
//import Home from "../../pages/Home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "products",
                    element: <Products />,
                    children: [
                        {
                            path: "all",
                            element: <All />
                        },
                        {
                            path: "mens_clothing",
                            element: <Men />
                        },
                        {
                            path: "womens_clothing",
                            element: <Women />
                        },
                        {
                            path: "jewelery",
                            element: <Jewelery />
                        },
                        {
                            path: "electronics",
                            element: <Electronics />
                        },
                        {
                            path: "item/:id",
                            element: <ItemsPage />
                        }
                    ]
                },
                {
                    path: "about",
                    element: <AboutUs />
                }
            ]
        },

    ]);

    return <RouterProvider router={router} />;
}

export default Router;