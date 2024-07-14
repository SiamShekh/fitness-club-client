import { Outlet } from "react-router-dom";
import Navbar from "../Ui/Navbar";
import Footer from "../Ui/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[15vh] bg-white text-white overflow-hidden">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;