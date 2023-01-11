import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUpModal = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);

  const { input, handleInputs, onSignUp, togglePassword, passwordType } = props;

  return (
    <>
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
                  className="sign-up-email-input"
                  name="signUpName"
                  placeholder="Your Name"
                />
                <label>Email:</label>
                <input
                  onChange={handleInputs}
                  value={input.signUpEmail}
                  type="text"
                  className="sign-up-email-input"
                  name="signUpEmail"
                  placeholder="Your Email"
                />
                <label>Password:</label>
                <input
                  onChange={handleInputs}
                  value={input.signUpPassword}
                  className="sign-up-password-input"
                  type={passwordType}
                  name="signUpPassword"
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
                <button onClick={onSignUp} className="login-button">
                  Register
                </button>
              </div>
              {/* <div>
                    <p>
                      Already have an Account?
                      <span
                        onClick={toggleSignUpLink}
                        className="sign-up-link-text"
                      >
                        Login
                      </span>
                    </p>
                  </div> */}
            </form>
            <button onClick={toggleSignUpModal} className="close-modal">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
