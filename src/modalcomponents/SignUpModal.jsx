import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUpModal = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);

  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal);
    console.log(signUpModal);
  };

  return (
    <>
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
    </>
  );
};

export default SignUpModal;
