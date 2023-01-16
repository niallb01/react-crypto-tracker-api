import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginModal = (props) => {
  const {
    input,
    handleInputs,
    onLogin,
    togglePassword,
    passwordType,
    toggleLoginModal,
  } = props;

  return (
    <>
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
                type={passwordType}
                className="login-password-input"
                name="loginPassword"
                placeholder="Your Password"
              />
              <button className="password-icon-button" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <FaRegEyeSlash size="18" />
                ) : (
                  <FaRegEye size="18" />
                )}
              </button>
              <br />
              <button onClick={onLogin} className="login-button">
                Login
              </button>
            </div>
            {/* <div>
              <p>
                Don't have an Account?
                <span onClick={toggleSignUpLink} className="sign-up-link-text">
                  Sign Up
                </span>
              </p>
            </div> */}
          </form>

          <button onClick={toggleLoginModal} className="close-modal">
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
