import { FaXmark } from "react-icons/fa6";
import logo from "../assets/CareVault.png";
import "../AuthCss/Verification.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Verification = () => {
  const nav = useNavigate();
  // const userInfo=useSelector((state)=>state.app?.userSignUp)
  // console.log(userInfo)
  return (
    <section className="verification-page">
      <div className="verification-wrapper">
        <div className="verification-header">
          <img src={logo} alt="CareVault Logo" />
          <FaXmark
            size={30}
            onClick={() => nav("/log-in")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="verification-main">
          <h3></h3>
          <p>Welcome to CareVault!</p>
          <p>
            Your CareVault account has been successfully created. Please check
            the email you've provided to verify your account.
          </p>
          {/* <button className="btn1" onClick={() => nav("/log-in")}>
            Verify
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Verification;
