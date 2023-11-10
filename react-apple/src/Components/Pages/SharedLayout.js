import React from "react";
import Footer from "../../Footer/Footer";
import Nav from "../../Header/Nav";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
