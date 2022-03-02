import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Anywhere Fitness</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/classes" activeStyle>
            Classes
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink to="/login" activeStyle>
            Login
          </NavBtnLink>
          <NavBtnLink to="/logout" activeStyle>
            Logout
          </NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;