import "../AuthCss/Login.css";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";

const Login = () => {
  const nav = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    nav("/otp");
  };

  return (
    <div className="Login">
      <form action="" className="login-form">
        <div className="company-logo-holder">
          <div className="company-logo">
            <img src={logo} alt="" />
            <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
          </div>
        </div>
        <div className="login-header-text">
          <h3>Welcome back</h3>
          <p>
            Log in to view, manage and access your secured medical information
            all the time
          </p>
        </div>
        <div className="login-input-div">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <span
            style={{ alignSelf: "flex-end" }}
            onClick={() => nav("/forgotpassword")}
          >
            Forgot Password?
          </span>
          <button onClick={handleLogin}>Login</button>
          <p>
            Dont have an account <span onClick={() => nav("/")}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
