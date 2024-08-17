import { Link } from "react-router-dom";
import logo from "../../assets/logo_scentra.png"

const Navbar = () => {

    const navOptions = <>
        <li><Link to="/" className="text-base">Home</Link ></li>
        <li><Link to="all-products" className="text-base">Products</Link ></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#FFFAF9]">
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
                        className="menu menu-sm dropdown-content bg-[#FFFAF9] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex items-center gap-2">
                        <img className="w-16 rounded-full" src={logo} alt="" />
                        <h2 className="font-bold text-[#6D412A] ">SCENTRA</h2>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;