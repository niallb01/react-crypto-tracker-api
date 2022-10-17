import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <>
      <h1
        className="header"
        onClick={() => {
          <Link to="/">Home</Link>;
        }}
      >
        <FaCoins className="header-icon" />
        Live Coin Tracker
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/modify-account">Account</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
