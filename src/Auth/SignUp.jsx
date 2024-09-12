import React, { useState } from "react";
import "../AuthCss/Sign.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading,setIsLoading]=useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
  });
  const validate = () => {
    const { email, password, fullName, dateOfBirth, gender, phoneNumber } =
      formData;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    // Validate password
    if (!password) {
      toast.error("Password is required.");
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return false;
    } else if (
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)
    ) {
      toast.error(
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character."
      );
      return false;
    }

    // Validate full name
    if (!fullName) {
      toast.error("Full name is required.");
      return false;
    }

    // Validate date of birth
    const dob = new Date(dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18 || age > 60) {
      toast.error("You must be between 18 and 60 years old.");
      return false;
    }

    // Validate gender
    if(!gender) {
      toast.error("Gender is required.");
      return false;
    }

    // Validate phone number
    if (!phoneNumber) {
      toast.error("Phone number is required.");
      return false;
    } else if (!/^\d{11}$/.test(phoneNumber)) {
      alert("Phone number must be exactly 11 digits.");
      return false;
    }

    return true; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // nav("/dashBoard")
      setIsLoading(true)
      const url = " https://medical-record-project.onrender.com /api/v1/patient/signup";
      axios
      .post(url,formData)
      .then((res)=>{
        setIsLoading(false)
       console.log(res)
      })
      .catch((err)=>{
        setIsLoading(false);
        console.log(err)
      })
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data
  };

  return (
    <div className="SignUp">
      <div className="Signup-FormHolder">
        <div className="company-logo-holder">
          <div className="company-logo">
            <img src={logo} alt="" />
            <MdCancel  size={30} cursor="pointer" onClick={()=>nav("/")}/>
          </div>
        </div>
        <div className="formText">
          <h2>Sign Up</h2>
          <p>
            Join CareVault, experience the benefit of a personalized medical
            record platform
          </p>
        </div>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="custom-input"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="custom-input"
          />
            
          <input
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="custom-input"
          />

          {/* {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>} */}

          <div className="date-and-gender-div">
            <input
              type="date"
              placeholder="Date of birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              id=""
              value={formData.gender}
              onChange={handleChange}
              required
              style={{color:"black"}}
            >
              <option value="">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="passwordDiv">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="custom-input"
            />
            {showPassword ? (
              <FaRegEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaRegEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <div className="termsdiv">
          <input type="checkbox" required style={{ width: "20px" }} />
          <h6>I agree to the terms & conditions set out by this site</h6>
        </div>
        <div className="buttonDiv">
          <button onClick={handleSubmit}>{isLoading ? "Loading...":"Sign Up"}</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => nav("/log-in")}>Log in</span>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );

  // return (
  //   <div className='SignUp'>
  //     <form action="" className='signup-form'>
  //  <div className='logo'>
  //   <img src={logo} alt="" />
  //   <img src={img} alt='' className='cancel'/>

  //  </div>
  //  <div className='signup-text'>
  //   <h2>Sign Up</h2>
  //   <p>Join CareVault, experience the benefit of a personalized medical record platform</p>
  //  </div>
  //  {/* <div style={{width:"50%", background:"blue"}}>sdfgh</div> */}
  //  <div className='inputDiv'>
  //   <input type="text"  placeholder='Full name'/>
  //   <input type="email"  placeholder='Email'/>
  //   <input type="text" placeholder='Phone Number'/>
  //   <div className='dateDiv'>
  //   <input style={{width:"50%"}} type="date" placeholder='Date of birth'/>
  //   <select name="" id="">
  //   <option value=''>--Gender--</option>
  //                 <option value="Vendor">Male</option>
  //                 <option value="Buyer">Female</option>
  //     </select>
  //   </div>

  //   <div className='passwordDiv'>
  //   <input type={showPassword ? "password" : "text"} placeholder='Password'/>
  //     {
  //       showPassword? <FaRegEye onClick={()=>setShowPassword(false)}/>: <FaRegEyeSlash  onClick={()=>setShowPassword(true)}/>
  //     }

  //   </div>
  //  </div>
  // <div className="termsbox">
  //   <input type="checkbox" style={{display:"flex", alignSelf:"center"}}/>
  //   <p>I agree to the terms & conditions set out by this site</p>

  // </div>
  //  <div className="signup-btn">
  //  <button onClick={()=>nav('verification')}>Sign Up</button>
  //  <p>Already have an account? <span onClick={()=>nav('login')}>Login</span></p>
  //  </div>
  //   </form>

  //   </div>
  // )
};

export default SignUp;
