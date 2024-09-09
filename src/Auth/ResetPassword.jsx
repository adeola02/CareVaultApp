import React from 'react'
import '../AuthCss/ResetPassword.css'
import { useNavigate } from 'react-router-dom'
import imgVector from '../assets/Vector.svg'
import logo from '../assets/Logo.svg'

const ResetPassword = () => {

    const nav = useNavigate()
  return (
    <div className='ResetPassword'>
        <form action="" className='resetPassword-form'>
        <div className='logo'>
        <img src={logo} alt="" />
        <img src={imgVector} alt='' className='cancel'/>
            </div>
            <div className='form-Text'>
                <h2>Reset Password?</h2>
                <p>Create a new secured password</p>
            </div>
            <div className="resetPassword-input-div">
                <input type="paasword"  placeholder='NewPassword'/>
                <input type="paasword"  placeholder='Confirm NewPassword'/>
                <button onClick={()=>nav('/successpage')}>Reset Password</button>
            </div>
        </form>

    </div>
  )
}

export default ResetPassword