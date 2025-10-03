import React from "react";
import { Outlet } from "react-router";

const home = () => {
  return (
    <>
      <header>
        <h2>Esto es un header</h2>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h4>Esto es un footer</h4>
      </footer>
    </>
  );
};

export default home;
