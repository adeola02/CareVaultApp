import "../AuthCss/ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaXmark } from "react-icons/fa6";
import logo from "../assets/CareVault.png";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({  
   password: "", 
   confirmPassword: ""  
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const {resetCode}=useParams();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { password, confirmPassword } = formData; 

    if (!password) {  
      toast.error("Password is required.");  
      return false;  
    } else if (password.length < 8) {  
      toast.error("Password must be at least 8 characters long.");  
      return false;  
    } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {  
      toast.error("Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character.");  
      return false;  
    } else if (password !== confirmPassword) {  
      toast.error("Passwords do not match.");  
      return false;  
    }

    return true;
  };

  // const handleResetPassword = async (event) => {
  //   event.preventDefault();
  //   if (validate()) {
  //     setLoading(true);
  //     try {
  //       const token = window.location.pathname.split('/')[2];
  //       console.log(token)
  //       const url = `https://medical-record-project.onrender.com/api/v1/resetPassword/resetCode`;
  //       const response = await axios.put(url, {
  //         "new password": formData.password,
  //         "confirm new password": formData.confirmPassword})

  //       if (response.status === 200) {
  //         toast.success("Password reset successfully.");
  //         nav("/log-in");
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //     } catch (error) {
  //       toast.error("Error resetting password.");
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (validate()) {
      setLoading(true);

      try {
        // Extract the reset code from the URL (assuming it's the third part of the URL)
        // const resetCode = window.location.pathname.split('/')[2];
        // console.log(resetCode);

        // Use the resetCode dynamically in the URL
        const url =` https://medical-record-project.onrender.com/api/v1/resetPassword/${resetCode}`;

        // Send the request with new password and confirm new password
        const response = await axios.put(url, {
          "new password": formData.password,
          "confirm new password": formData.confirmPassword
        });

        // Handle success response
        if (response.status === 200) {
          toast.success("Password reset successfully.");
          nav("/log-in");
        } else {
          toast.error(response.data.message);
        }

      } catch (error) {
        // Handle errors from the request
        toast.error(error.response?.data?.message || "Error resetting password.");
        console.error(error);
      } finally {
        // Stop the loading spinner
        setLoading(false);
}
}
};

  return (
    <section className="reset-password-page">
      <div className="reset-password-wrapper">
        <div className="reset-password-header">
          <img src={logo} alt="CareVault Logo" />
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form className="reset-password-form" onSubmit={handleResetPassword}>
          <div className="formText">
            <h2>Reset Password?</h2>
            <p>Create a new secured password</p>
          </div>
          <label htmlFor="password" className="password-input">
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                value={formData.password}
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
          <label htmlFor="confirmPassword" className="password-input">
            <div className="password-input-wrapper">
              <input
                id="confirmPassword"
                type={showPassword ? "password" : "text"}
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
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
          <button className="btn1 reset" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;