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
    fullName: "",
    phoneNumber: "",
    email: "",
    passWord: "",
    dateOfBirth: "",
    gender: "",
  });

  const validate = () => {
    const {fullName , passWord, email, dateOfBirth, gender, phoneNumber } =
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
          toast.success("Sign up successful! Redirecting...");
          nav("/verification");
        })
        .catch((err) => {
          setIsLoading(false);
         toast.error(err.response.data);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <section className="signup-page">
      <div className="signup-wrapper">
        <div className="signup-header">
          <img src={logo} alt="CareVault Logo" />
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <section className="signup-form">
          <div className="formText">
            <h2>Sign Up</h2>
            <p>
              Join CareVault, experience the benefit of a personalized medical
              record platform
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>
            <label htmlFor="tel">
              <input
                id="tel"
                placeholder="Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>

            <label htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>
            <div className="date-gender">
              <label htmlFor="dob">
                <input
                  id="dob"
                  type="date"
                  placeholder="Date of birth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="gender">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <label htmlFor="password" className="password-input">
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "passWord" : "text"}
                  placeholder="Password"
                  name="passWord"
                  value={formData.passWord}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(false)}
                    className="password-icon"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowPassword(true)}
                    className="password-icon"
                  />
                )}
              </div>
            </label>
            <div className="terms-wrapper">
              <input type="checkbox" required />
              <span>
                I agree to the terms & conditions set out by this site
              </span>
            </div>

            <button className="btn1" onClick={handleSubmit}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p>
              Already have an account?
              <span
                onClick={() => nav("/log-in")}
                style={{ cursor: "pointer", color:"#5f9eeb", fontWeight:"600" }}
              >
                Log in
              </span>
            </p>
          </form>
          <ToastContainer />
        </section>
      </div>
    </section>
  );
};

export default SignUp;
