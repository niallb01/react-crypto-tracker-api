import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = (props) => {
  return (
    <>
      <form className="login-form">
        <div className="login-container">
          <h1>Login</h1>
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
    </>
  );
};

export default Login;
