import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  // console.log(data);
  return (
    <div className="">
      <header className="relative w-full h-screen">
        <Navbar></Navbar>
        <div className="pt-15">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </header>
      
    </div>
  );
};

export default HomeLayout;
