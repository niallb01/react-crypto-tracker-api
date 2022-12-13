import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginModal = (props) => {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = (props) => {
    setLoginModal(!loginModal);
  };

  return (
    <>
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
    </>
  );
};

export default LoginModal;
