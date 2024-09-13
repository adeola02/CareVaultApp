import "../AuthCss/Login.css";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const nav = useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [email,setEmail]=useState("");
  const [passWord,setPassWord]=useState("");
  

  const handleEmail=(event)=>{
     const data=event.target.value;
    setEmail(data);

    if(data.trim()=== ""){
      toast.error("email is required")
    }
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)){
    //   toast.error("invalid email format")
    // }
  }
  const handlePassWord=(event)=>{
    const data=event.target.value;
    setPassWord(data);

    if(data.trim()===""){
      toast.error("password is required")
    }
  }

  
console.log(passWord)
  const handleLogin = (event) => {
    event.preventDefault();
    if(!email || !passWord){
      toast.error("input all datas")
    }else {
      setIsLoading(true);
      const data={email,passWord};
      const url= "https://medical-record-project.onrender.com/api/v1/patient/login";
      axios
      .post(url,data)
      .then((res)=>{
        setIsLoading(false);
        console.log(res);
        nav("/otp")
      })
      .catch((err)=>{
        setIsLoading(false)
        console.log(err)
      })
    }
  };

  return (
    <div className="Login">
      <ToastContainer/>
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
          <input type="email" placeholder="Email" required onChange={handleEmail} value={email} />
          <input type="password" placeholder="Password" required  onChange={handlePassWord} value={passWord}/>
          <span
            style={{ alignSelf: "flex-end" }}
            onClick={() => nav("/forgotpassword")}
          >
            Forgot Password?
          </span>
          <button onClick={handleLogin}>{isLoading ? "Loading...":"Login"}</button>
          <p>
            Dont have an account <span onClick={() => nav("/")}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
