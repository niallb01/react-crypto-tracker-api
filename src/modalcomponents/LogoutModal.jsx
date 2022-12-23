import { useState } from "react";
import "../Modal.css";

const LogoutModal = (props) => {
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModal(!logoutModal);
    console.log(logoutModal);
  };

  return (
    <>
      <li>
        <li onClick={toggleLogoutModal} className="modal-link">
          Logout
        </li>
        {logoutModal && (
          <div className="modal">
            <div onClick={props.toggleLogoutModal} className="overlay"></div>
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
    </>
  );
};

export default LogoutModal;
