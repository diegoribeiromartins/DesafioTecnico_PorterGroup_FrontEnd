import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
