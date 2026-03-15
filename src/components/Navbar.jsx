import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("User trying to Log out");
    logOut()
      .then(() => {
        alert("Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink to="/" className="font-bold text-lg mr-3 hover:text-purple-800">
        Home |
      </NavLink>
      <NavLink
        to="/all-games"
        className="font-bold text-lg mr-3 hover:text-purple-800"
      >
        Game Vault |
      </NavLink>
      <NavLink
        to="/about"
        className="font-bold text-lg mr-3 hover:text-purple-800"
      >
        About |
      </NavLink>
      <NavLink
        to="/faq"
        className="font-bold text-lg mr-3 hover:text-purple-800"
      >
        FAQ |
      </NavLink>
      <NavLink
        to="/documentation"
        className="font-bold text-lg hover:text-purple-800"
      >
        Documentation
      </NavLink>
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
            {user ? (
              <button
                onClick={handleLogout}
                className="btn  md:mr-4 bg-white relative md:inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
              >
                Log out
              </button>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn mr-1 md:mr-4 bg-white relative inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn bg-white relative inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
                >
                  Registration
                </Link>
              </div>
            )}
          </ul>
        </div>
        <Link to="/">
          <h1 className="text-lg md:text-2xl md:tracking-wide font-extrabold bg-white p-1 border-2 border-purple-400 rounded-tr-2xl rounded-bl-2xl">
            <span className="border-2 rounded-full p-1 font-bold text-blue-500 bg-black mr-2">
              N
            </span>
            <span className="text-[#3A506B] ">NOCT</span>
            <span className="text-[#9c27b0]">ARA</span>
          </h1>
        </Link>
      </div>

      <div className="navbar-center">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-purple-300 font-bold px-1">
            {links}
          </ul>
        </div>
        <div className="ml-5">
          {user ? (
            <div className="flex items-center gap-2">
              {/* <img
                className="w-9 h-9 rounded-full"
                src={userIcon}
                alt="user"
              /> */}
              <img
                className="w-10 h-10 rounded-full border"
                src={user?.photoURL}
                alt="user"
              />
              <button
                onClick={handleLogout}
                className="btn mr-1 hidden md:mr-4 bg-white relative md:inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex flex-col-reverse md:flex-row ml-5">
              <Link
                to="/login"
                className="btn mr-1 hidden md:mr-4 bg-white relative md:inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-white hidden relative md:inline-block px-3 md:px-6 py-2 border border-purple-400 text-purple-400 font-bold rounded transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
