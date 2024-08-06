import { NavLink } from "react-router-dom";
import icon from "../../assets/icon/icon.png";
import { useDispatch } from "react-redux";
import { carts } from "../../reduxs/slice/CartsShowSlice";
const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <div className="border-b border-gray-300 h-fit fixed w-full backdrop-blur-lg z-50">
            <div className="max-w-[1200px] mx-auto h-[15vh] relative flex items-center justify-between">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"/products"}>Products</NavLink></li>
                                <li><NavLink to={"/manegement"}>Manegement</NavLink></li>
                                <li onClick={() => dispatch(carts(true))}><NavLink to={'#'}>Carts</NavLink></li>
                            </ul>
                        </div>

                        <img src={icon} className="h-[12vh]" />
                    </div>

                    <div className="navbar-end  hidden lg:flex">

                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/products"}>Products</NavLink></li>
                            <li><NavLink to={"/manegement"}>Manegement</NavLink></li>
                            <li onClick={() => dispatch(carts(true))}><NavLink to={'#'}>Carts</NavLink></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;