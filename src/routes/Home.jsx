import React from "react";
import ListaTareas from "../pages/ListaTareas";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <ListaTareas />
      <Outlet />
    </>
  );
};

export default Home;
