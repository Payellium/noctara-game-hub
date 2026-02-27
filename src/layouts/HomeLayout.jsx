import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Outlet } from "react-router";

const HomeLayout = () => {
  // console.log(data);
  return (
    <div className="">
      <header className="relative w-full h-screen">
        <Navbar></Navbar>
        <div className="pt-15">
            <Outlet></Outlet>
        </div>
      </header>
    </div>
  );
};

export default HomeLayout;
