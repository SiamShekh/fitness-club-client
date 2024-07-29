import { Outlet } from "react-router-dom";
import Navbar from "../Ui/Navbar";
import Footer from "../Ui/Footer";
import React from "react";

interface MainLayoutProps {
    isFooter: boolean
}
const MainLayout: React.FC<MainLayoutProps> = ({ isFooter }) => {
    return (
        <div>
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