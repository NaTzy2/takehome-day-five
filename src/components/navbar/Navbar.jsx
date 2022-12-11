import React from "react";

import { NavLink } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";

const Navbar = () => {
  const styleActive = {
    textDecoration: "none",
    color: "yellow",
    fontSize: "14px",
  };

  const styleInActive = {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
  };
  return (
    <nav
      style={{
        borderBottomLeftRadius: 25,
        borderBottomRightRadius:25,
        backgroundColor: "darkslateblue",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <NavLink
        disabled
        style={{
          marginLeft: "20px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        <BookOutlined />
        Reading Store
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? styleActive : styleInActive)}
      >
        Home
      </NavLink>

      <NavLink
        to="/master-data"
        style={({ isActive }) => (isActive ? styleActive : styleInActive)}
      >
        Master Data
      </NavLink>
    </nav>
  );
};

export default Navbar;
