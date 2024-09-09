import React, { useState } from 'react'
import '../AuthCss/Otp.css'
import OtpInput from 'react-otp-input';
import imgVector from '../assets/vector.svg'
import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';


export const Otp = () => {
    const [otp, setOtp]=useState('');
    const nav=useNavigate();
  return (
    <div className='otp'>
        <div className='otp-form'>
            <div className="logo">
            <img src={logo} alt="" />
            <img src={imgVector} alt="" className='cancel' />
            </div>
            <div className="otpHeaderText">
                <h2>Please check your email</h2>
                <p>Enter the code sent to your email for verification</p>
            </div>
            <div className="otp-container">  
      <OtpInput  
        className="input"  
        value={otp}  
        onChange={setOtp}  
        numInputs={6}  
        renderInput={(props) => (  
          <input  
            {...props}  
            className="otp-input" 
            style={{ width: '3rem' }} 
          />  
        )}  
      />  
    </div> 
          <div className='btn'>
          <button style={{height:"36px", display:"flex", alignItems:"center", justifyContent:'center'}} onClick={()=>nav("/dashBoard")}>Verify</button>
          <p>Send code again in 00.59</p>
          </div>

        </div>
        
    </div>
  )
}
