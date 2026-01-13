/** @format */

import React from "react";
import "./layout.css";
import { Link, Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <header className='layout-header'>
        <Link to='about'>About</Link>
        <Link to='/'>Home</Link>
      </header>

      <main className='layout-content'>
        <Outlet />
      </main>

      <footer className='layout-footer'>{"Copyright 2026"}</footer>
    </div>
  );
};

export default Layout;
