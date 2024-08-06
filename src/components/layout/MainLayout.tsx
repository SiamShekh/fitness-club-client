import { Outlet } from "react-router-dom";
import Navbar from "../Ui/Navbar";
import Footer from "../Ui/Footer";
import React from "react";
import { useSelector } from "react-redux";
import { AppRoot } from "../../reduxs/store/Store";
import CartsModal from "../Modal/CartsModal";

interface MainLayoutProps {
    isFooter: boolean
}
const MainLayout: React.FC<MainLayoutProps> = ({ isFooter }) => {
    const show_carts = useSelector((state: AppRoot) => state.Carts.show_carts);

    return (
        <div>
            {
                show_carts && <CartsModal />
            }
            <Navbar />
            <div className="pt-[15vh] bg-white text-white overflow-hidden">
                <Outlet />
            </div>
            {
                isFooter &&
                <Footer />
            }
        </div>
    );
};

export default MainLayout;