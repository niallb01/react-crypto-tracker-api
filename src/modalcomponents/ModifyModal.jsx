import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ModifyModal = (props) => {
  // const [modifyModal, setModifyModal] = useState(false);

  const { input, handleInputs, onModifyDetails, togglePassword, passwordType } =
    props;

  return (
    <>
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
    </>
  );
};

export default ModifyModal;
