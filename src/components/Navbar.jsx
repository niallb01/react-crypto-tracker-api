import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Navbar = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
    console.log(loginModal);
  };

  const toggleModifyModal = () => {
    setModifyModal(!modifyModal);
    console.log(modifyModal);
  };

  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal);
    console.log(signUpModal);
  };

  const toggleLogoutModal = () => {
    setLogoutModal(!logoutModal);
    console.log(logoutModal);
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
        {loginModal && (
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
        )}

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <li onClick={toggleModifyModal} className="modal-link">
            Account
          </li>
          {modifyModal && (
            <div className="modal">
              <div onClick={toggleModifyModal} className="overlay"></div>
              <div className="modal-content">
                <h4 className="modal-header">Modify Account</h4>
                <form className="login-form">
                  <div className="login-container">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="login-email-input"
                      name="modfify-name"
                      placeholder="Your Name"
                    />
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
                    <button className="modify-button">Modify</button>
                  </div>
                </form>

                <button onClick={toggleModifyModal} className="close-modal">
                  X
                </button>
              </div>
            </div>
          )}
        </li>
        <li>
          <li onClick={toggleLogoutModal} className="modal-link">
            Logout
          </li>
          {logoutModal && (
            <div className="modal">
              <div onClick={toggleLogoutModal} className="overlay"></div>
              <div className="modal-content">
                <h4 className="modal-header">Logout</h4>
                <form className="login-form">
                  <div className="login-container">
                    <button className="modify-button">Logout</button>
                  </div>
                </form>

                <button onClick={toggleLogoutModal} className="close-modal">
                  X
                </button>
              </div>
            </div>
          )}
        </li>

        <li>
          {/* <Link to="/sign-up"> */}
          <button onClick={toggleSignUpModal} className="sign-up-button">
            Sign Up
          </button>
          {signUpModal && (
            <div className="modal">
              <div onClick={toggleSignUpModal} className="overlay"></div>
              <div className="modal-content">
                <h4 className="modal-header">Create Account</h4>
                <form className="login-form">
                  <div className="login-container">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="login-email-input"
                      name="name"
                      placeholder="Your Name"
                    />
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

                <button onClick={toggleSignUpModal} className="close-modal">
                  X
                </button>
              </div>
            </div>
          )}
          {/* </Link> */}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
