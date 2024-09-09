import React, { useState } from 'react'
import "../AuthCss/Sign.css";
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import logo from '../assets/Logo.svg'

const SignUp = () => {

  const nav = useNavigate()
  const [showPassword, setShowPassword] = useState(true)

  const [formData, setFormData] = useState({  
    email: "",  
    password: "",  
    fullName: "",  
    dateOfBirth: "",  
    gender: "",
    phoneNumber:"",  
}); 


const validate = () => {  
  const { email, password, fullName, dateOfBirth, gender, phoneNumber } = formData;  

  // Validate email  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  if (!emailPattern.test(email)) {  
      alert("Please enter a valid email address.");  
      return false;  
  }  

  // Validate password  
  if (!password) {  
      alert("Password is required.");  
      return false;  
  } else if (password.length < 8) {  
      alert("Password must be at least 8 characters long.");  
      return false;  
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {  
      alert("Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character.");  
      return false;  
  }  

  // Validate full name  
  if (!fullName) {  
      alert("Full name is required.");  
      return false;  
  }  

  // Validate date of birth  
  const dob = new Date(dateOfBirth);  
  const age = new Date().getFullYear() - dob.getFullYear();  
  if (age < 18 || age > 60) {  
      alert("You must be between 18 and 60 years old.");  
      return false;  
  }  

  // Validate gender  
  if (!gender) {  
      alert("Gender is required.");  
      return false;  
  }  

  // Validate phone number  
  if (!phoneNumber) {  
      alert("Phone number is required.");  
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
      alert("Form submitted successfully:", formData);  
      nav('/verification')
      // Handle form submission (e.g., API call)  
  }  
};  

const handleChange = (e) => {  
  const { name, value } = e.target;  
  setFormData({ ...formData, [name]: value }); // Update form data  
};  


  return(
    <div className='SignUp'>
      <div className='Signup-FormHolder'>
        <div className='logo'>
          <img src={logo} alt="" />
         
        </div>
        <div className='formText'>
          <h2>Sign Up</h2>
          <p>Join CareVault, experience the benefit of a personalized medical record platform</p>
        </div>
        <div className='inputDiv'>
          <input type="text"  placeholder='Full Name'
            name="fullName"  
            value={formData.fullName}  
            onChange={handleChange}
            required
          />

          <input type="email"  placeholder='Email' 
                  name="email"  
                  value={formData.email}  
                  onChange={handleChange} 
                  required
          />

          <input  placeholder='Phone Number'
           type="text"  
           name="phoneNumber"  
           value={formData.phoneNumber}  
           onChange={handleChange}   
           required 
          />

{/* {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>} */}

          <div className='date-and-gender-div'>
            <input type="date"  placeholder='Date of birth' 
              name="dateOfBirth"  
              value={formData.dateOfBirth}  
              onChange={handleChange}    
              required 
            />
      <select name="gender" id=""
         value={formData.gender}  
         onChange={handleChange}   
         required  
      >

      <option value=''>--Gender--</option>
              <option value="Vendor">Male</option>
           <option value="Buyer">Female</option> 
      </select>
          </div>

          <div className="passwordDiv">
            <input type={showPassword?"password" : "text"} placeholder='Password'   
                 name="password"  
                 value={formData.password}  
                 onChange={handleChange}  
                 required  
            />
       {
        showPassword?<FaRegEyeSlash onClick={()=>setShowPassword(false)}/>:<FaRegEye onClick={()=>setShowPassword(true)}/>
       }
          </div>
        </div>
        <div className="termsdiv">
          <input type="checkbox" required style={{width:"20px"}}/>
          <h6>I agree to the terms & conditions set out by this site</h6>
        </div>
        <div className="buttonDiv">
          <button onClick={handleSubmit}>Sign Up</button>
          <p>Already have an account? <span onClick={()=>nav('log-in')}>Log in</span></p>
        </div>

      </div>

    </div>
  )


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
}

export default SignUp;