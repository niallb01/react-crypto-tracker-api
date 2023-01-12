import { useState } from "react";
import "../Modal.css";

const LogoutModal = (props) => {
  // const [logoutModal, setLogoutModal] = useState(false);

  const { onLogout } = props;

  return (
    <>
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
    </>
  );
};

export default LogoutModal;
