import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="font-bold text-lg mr-3 hover:text-purple-800">Home  |</NavLink>
      <NavLink to="/about" className="font-bold text-lg mr-3 hover:text-purple-800">About  |</NavLink>
      <NavLink to="/faq" className="font-bold text-lg mr-3 hover:text-purple-800">FAQ  |</NavLink>
      <NavLink to="/documentation" className="font-bold text-lg hover:text-purple-800">Documentation</NavLink>
    </>
  );
  return (
    <div className="navbar absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link>
          <h1 className="text-2xl tracking-wide font-extrabold bg-white p-1 border-2 border-purple-400 rounded-tr-2xl rounded-bl-2xl">
            <span className="border-2 rounded-full p-1 font-bold text-blue-500 bg-black mr-2">
              N
            </span>
            <span className="text-[#3A506B] ">NOCT</span>
            <span className="text-[#9c27b0]">ARA</span>
          </h1>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-purple-300 font-bold px-1">{links}</ul>
        </div>
        <Link to="/login" className="btn mr-4 bg-white relative inline-block px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg">Login</Link>
        <Link to="/register" className="btn bg-white relative inline-block px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg">Registration</Link>
      </div>
    </div>
  );
};

export default Navbar;
