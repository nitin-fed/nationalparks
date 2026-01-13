/** @format */

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", gap: "16px" }}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/parks'>Parks</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
    </nav>
  );
};

export default Navigation;
