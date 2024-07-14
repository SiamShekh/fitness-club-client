import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Product_Details from "../pages/Product_Details";
import Checkouts from "../pages/Checkouts";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Product />
            },
            {
                path: "products/:id",
                element: <Product_Details />
            },
            {
                path: 'checkout',
                element: <Checkouts />
            }
        ]
    }
]);

export default MainRoutes;