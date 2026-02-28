import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  // console.log(data);
  return (
    <div className="relative w-full h-screen">
      <header>
        <Navbar></Navbar>
        
        
      </header>
      <main>
        <div className="pt-15">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default HomeLayout;
