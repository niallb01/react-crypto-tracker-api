import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <>
      <h1 className="header">
        <FaCoins />
        Crypto Tracker Api
      </h1>
    </>
  );
};

export default Navbar;
