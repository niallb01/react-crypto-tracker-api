import { useState } from "react";
import "../Modal.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ModfifyModal = (props) => {
  const [modifyModal, setModifyModal] = useState(false);

  const toggleModifyModal = () => {
    setModifyModal(!modifyModal);
    console.log(modifyModal);
  };

  return (
    <>
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
    </>
  );
};

export default ModfifyModal;
