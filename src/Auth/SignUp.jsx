import "../AuthCss/Sign.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    passWord: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
  });

  const validate = () => {
    const { email, passWord, fullName, dateOfBirth, gender, phoneNumber } =
      formData;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    // Validate password
    if (!passWord) {
      toast.error("Password is required.");
      return false;
    } else if (passWord.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return false;
    } else if (
      !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(passWord)
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
    if (!gender) {
      toast.error("Gender is required.");
      return false;
    }

    // Validate phone number
    if (!phoneNumber) {
      toast.error("Phone number is required.");
      return false;
    } else if (!/^\d{11}$/.test(phoneNumber)) {
      toast.error("Phone number must be exactly 11 digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/signup";
      axios
        .post(url, formData)
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          toast.success("Sign up successful! Redirecting...");
          nav("/dashboard");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Sign up failed. Please try again.");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="SignUp">
      <div className="Signup-FormHolder">
        <div className="company-logo-holder">
          <div className="company-logo">
            <img src={logo} alt="CareVault Logo" />
            <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
          </div>
        </div>
        <div className="formText">
          <h2>Sign Up</h2>
          <p>
            Join CareVault, experience the benefit of a personalized medical
            record platform
          </p>
        </div>
        <form onSubmit={handleSubmit} className="inputDiv">
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
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ color: "black" }}
            >
              <option value="">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="passwordDiv">
            <input
              type={showPassword ? "passWord" : "text"}
              placeholder="Password"
              name="passWord"
              value={formData.passWord}
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
          <div className="termsdiv">
            <input type="checkbox" required style={{ width: "20px" }} />
            <h6>I agree to the terms & conditions set out by this site</h6>
          </div>
          <div className="buttonDiv">
            <button onClick={handleSubmit}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p>
              Already have an account?{" "}
              <span onClick={() => nav("/log-in")}>Log in</span>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
