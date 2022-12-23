import LoginModal from "./LoginModal";
import LogoutModal from "./LogoutModal";
import ModifyModal from "./ModifyModal";
import SignUpModal from "./SignUpModal";

const Modal = (props) => {
  return (
    <>
      <LoginModal
        toggleLoginModal={props.toggleLoginModal}
        toggleSignUpLink={props.toggleSignUpLink}
      />
      <LogoutModal toggleLogoutModal={props.toggleLogoutModal} />
      <ModifyModal toggleModfifyModal={props.toggleModifyModal} />
      <SignUpModal toggleSignUpModal={props.toggleSignUpModal} />
    </>
  );
};

export default Modal;
