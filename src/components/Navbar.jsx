import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = <>
      <NavLink className="font-bold mr-3">About</NavLink>
      <NavLink className="font-bold mr-3">FAQ</NavLink>
      <NavLink className="font-bold">Documentation</NavLink>
  </>
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
          <h1 className="text-xl font-bold">
            NOCT<span className="text-[#9c27b0]">ARA</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
