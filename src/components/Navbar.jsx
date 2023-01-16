import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { useState } from "react";
import SignUpModal from "../modalcomponents/SignUpModal";
import LoginModal from "../modalcomponents/LoginModal";
import ModifyModal from "../modalcomponents/ModifyModal";
import LogoutModal from "../modalcomponents/LogoutModal";

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
            passwordType={passwordType}
            toggleLoginModal={toggleLoginModal}
            toggleSignUpLink={toggleSignUpLink}
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
            <ModifyModal
              input={input}
              handleInputs={handleInputs}
              onModifyDetails={onModifyDetails}
              togglePassword={togglePassword}
              toggleModifyModal={toggleModifyModal}
              passwordType={passwordType}
            />
          )}
        </li>

        <li>
          <li onClick={toggleLogoutModal} className="modal-link">
            Logout
          </li>

          {logoutModal && <LogoutModal onLogout={onLogout} />}
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
            passwordType={passwordType}
            toggleSignUpModal={toggleSignUpModal}
            toggleSignUpLink={toggleSignUpLink}
          />
        )}
      </ul>
    </>
  );
};

export default Navbar;
