import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SignUpModal from "../modalcomponents/SignUpModal";
import LoginModal from "../modalcomponents/LoginModal";

const Navbar = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const {
    input,
    handleInputs,
    onLogin,
    onLogout,
    onSignUp,
    onModifyDetails,
    togglePassword,
    passwordType,
    // toggleSignUpModal,
  } = props;

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const toggleModifyModal = () => {
    setModifyModal(!modifyModal);
  };

  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal);
  };

  const toggleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  const toggleSignUpLink = () => {
    if (setSignUpModal(!signUpModal)) {
    } else toggleLoginModal(!loginModal);
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
          <LoginModal
            input={input}
            handleInputs={handleInputs}
            onSignUp={onLogin}
            togglePassword={togglePassword}
            toggleLoginModal={toggleLoginModal}
          />
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
                      onChange={handleInputs}
                      value={input.modifyName}
                      type="text"
                      className="modify-name-input"
                      name="modifyName"
                      placeholder="Your Name"
                    />
                    <label>Email:</label>
                    <input
                      onChange={handleInputs}
                      value={input.modifyEmail}
                      type="email"
                      className="modify-email-input"
                      name="modifyEmail"
                      placeholder="Your Email"
                    />
                    <label>Password:</label>
                    <input
                      onChange={handleInputs}
                      value={input.modifyPassword}
                      className="modify-password-input"
                      type={passwordType}
                      name="modifyPassword"
                      placeholder="Your Password"
                    />
                    <button
                      className="password-icon-button"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <FaRegEyeSlash size="18" />
                      ) : (
                        <FaRegEye size="18" />
                      )}
                    </button>
                    <br />
                    <button onClick={onModifyDetails} className="modify-button">
                      Modify
                    </button>
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
                <form className="logout-form">
                  <div className="logout-container">
                    <button onClick={onLogout} className="modify-button">
                      Logout
                    </button>
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
          <button onClick={toggleSignUpModal} className="sign-up-button">
            Sign Up
          </button>
        </li>
        {signUpModal && (
          <SignUpModal
            input={input}
            handleInputs={handleInputs}
            onSignUp={onSignUp}
            togglePassword={togglePassword}
            toggleSignUpModal={toggleSignUpModal}
          />
        )}
      </ul>
    </>
  );
};

export default Navbar;
