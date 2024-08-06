import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Product_Details from "../pages/Product_Details";
import Checkouts from "../pages/Checkouts";
import ProductMangement from "../pages/ProductMangement";
import DraftProduct_Details from "../pages/DraftProduct_Details";
import About from "../pages/About";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout isFooter={true} />,
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
            },
            {
                path: 'about',
                element: <About />
            },
        ],
    },
    {
        path: '/manegement',
        element: <MainLayout isFooter={false} />,
        children: [
            {
                index: true,
                element: <ProductMangement />
            },
            {
                path: 'draft',
                element: <DraftProduct_Details />
            }
        ]
    }
]);

export default MainRoutes;