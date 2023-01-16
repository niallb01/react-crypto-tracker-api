import "../Modal.css";

const LogoutModal = (props) => {
  const { onLogout, toggleLogoutModal } = props;

  return (
    <>
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
    </>
  );
};

export default LogoutModal;
