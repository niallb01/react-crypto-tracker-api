import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useForm from "../userFunctions";

const Navbar = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { input, setInput, handleInputs, onLogin, onLogout } = props;
  //custom hook
  // const [handleInputs, input] = useForm({});

  //state for user input
  // const [input, setInput] = useState({
  //   loginPassword: "",
  //   loginEmail: "",
  //   modifyName: "",
  //   modifyPassword: "",
  //   modifyEmail: "",
  // });

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

  // //gives back object with key(name) and value(user input)
  // const handleInputs = (e) => {
  //   const { name, value } = e.target;
  //   setInput({
  //     ...input,
  //     [name]: value,
  //   });
  //   console.log(input);
  // };

  // const onLogin = (e) => {
  //   e.prevent.default();
  // };

  // const onModifyDetails = (e) => {};

  // const onSignUp = (e) => {};

  // const onLogout = (e) => {
  // };

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
                    onChange={handleInputs}
                    value={input.loginEmail}
                    type="text"
                    className="login-email-input"
                    name="loginEmail"
                    placeholder="Your Email"
                  />
                  <label>Password:</label>
                  <input
                    onChange={handleInputs}
                    value={input.loginPassword}
                    type="password"
                    className="login-password-input"
                    name="loginPassword"
                    placeholder="Your Password"
                  />
                  <button className="password-icon-button">
                    <FaRegEye size="18" />
                  </button>
                  <br />
                  <button onClick={onLogin} className="login-button">
                    Login
                  </button>
                </div>
                <div>
                  <p>
                    Don't have an Account?
                    <span
                      onClick={toggleSignUpLink}
                      className="sign-up-link-text"
                    >
                      Sign Up
                    </span>
                  </p>
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
                      onChange={handleInputs}
                      value={input.modifyName}
                      type="text"
                      className="login-email-input"
                      name="modfify-name"
                      placeholder="Your Name"
                    />
                    <label>Email:</label>
                    <input
                      onChange={handleInputs}
                      value={input.modifyEmail}
                      type="email"
                      className="login-email-input"
                      name="email"
                      placeholder="Your Email"
                    />
                    <label>Password:</label>
                    <input
                      onChange={handleInputs}
                      value={input.modifyPassword}
                      className="login-password-input"
                      type="password"
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
          {signUpModal && (
            <div className="modal">
              <div onClick={toggleSignUpModal} className="overlay"></div>
              <div className="modal-content">
                <h4 className="modal-header">Create Account</h4>
                <form className="login-form">
                  <div className="login-container">
                    <label>Name:</label>
                    <input
                      onChange={handleInputs}
                      value={input.signUpName}
                      type="text"
                      className="login-email-input"
                      name="name"
                      placeholder="Your Name"
                    />
                    <label>Email:</label>
                    <input
                      onChange={handleInputs}
                      value={input.signUpEmail}
                      type="text"
                      className="login-email-input"
                      name="email"
                      placeholder="Your Email"
                    />
                    <label>Password:</label>
                    <input
                      onChange={handleInputs}
                      value={input.signUpPassword}
                      className="login-password-input"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                    <button className="password-icon-button">
                      <FaRegEye size="18" />
                    </button>
                    <br />
                    <button className="login-button">Register</button>
                  </div>
                </form>

                <button onClick={toggleSignUpModal} className="close-modal">
                  X
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
