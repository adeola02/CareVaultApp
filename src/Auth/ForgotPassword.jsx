import React from 'react'
import '../AuthCss/ForgetPassword.css'
import { useNavigate } from 'react-router-dom'
import imgVector from '../assets/vector.svg'
import logo from '../assets/Logo.svg'

const ForgotPassword = () => {

    const nav = useNavigate()
  return (
    <div className='forgotPassword'>
        <div className='formDiv'>
            <div className="logo">
                <img src={logo} alt="" />
                <img src={imgVector} alt="" className='cancel'/>
            </div>
            <div className="form-Text">
                <h2>Forgot Password?</h2>
                <p>Enter your email, an email will be sent for security purpses</p>
            </div>
            <div className="forgotPassword-inputDiv">
                <input type="email" placeholder='Email' />
                <button>Send Code</button>  
                <h5>Remember Password? <span onClick={()=>nav('/login')}>Login</span></h5>              
            </div>
        </div>
     

        
    </div>
  )
}

export default ForgotPassword

//    {/* <form action="" className='forgotPassword-form'>
//             <div className='logo'>
//             <img src={logo} alt="" />
//             <img src={img} alt='' className='cancel'/>
//             </div>
//             <div className='form-text'>
//                 <h2>Forgot Password?</h2>
//             </div>

//             <div className="forgotPassword-input-div">
//                 <input type="email"  placeholder='Email' required/>
//                 <button>Send Code</button>
//                 <p>Remember Password? <span onClick={()=>nav('/login')}>Login</span></p>
//             </div>
//         </form> */}