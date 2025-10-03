import React from "react";
import Lista_tareas from "../pages/Lista_tareas";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <Lista_tareas />
      <Outlet />
    </>
  );
};

export default Home;
