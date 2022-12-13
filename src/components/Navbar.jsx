import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
// import LoginModal from "../modalcomponents/LoginModal";

const Navbar = (props) => {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
    console.log(loginModal);
  };

  return (
    <>
      <h1 className="header">
        <Link to="/home">
          <FaCoins className="header-icon" />
          Live Coin Tracker
        </Link>
      </h1>
      <ul className="nav-links">
        <li onClick={toggleLoginModal} className="modal-link">
          Login
        </li>
        {/* {loginModal && (
          <div className="modal">
            <div onClick={toggleLoginModal} className="overlay"></div>
            <div className="modal-content">
              <h4 className="modal-header">Login</h4>
              <form className="login-form">
                <div className="login-container">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="login-email-input"
                    name="email"
                    placeholder="Your Email"
                  />
                  <label>Password:</label>
                  <input
                    className="login-password-input"
                    name="password"
                    placeholder="Your Password"
                  />
                  <button className="password-icon-button">
                    <FaRegEye size="18" />
                  </button>
                  <br />
                  <button className="login-button">Login</button>
                </div>
              </form>

              <button onClick={toggleLoginModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        )} */}
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
