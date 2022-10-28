import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <>
      {/* <h1 className="header">
        <FaCoins className="header-icon" />
        <Link to="/home"></Link>Live Coin Tracker
      </h1> */}
      <h1 className="header">
        <Link to="/home">
          <FaCoins className="header-icon" />
          Live Coin Tracker
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/modify-account">Account</Link>
        </li>
        <li>
          <Link to="/sign-up">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
