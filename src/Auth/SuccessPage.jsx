import React from 'react'
import '../AuthCss/SuccessPage.css'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/Logo.svg'

const SuccessPage = () => {

    const nav = useNavigate()
  return (
    <div className='SuccessPage'>
        <div className="SuccessPage-form">
      <div className="logo">
      <img src={logo} alt="" />
     

      </div>
      <div className="text-and-btn">
        <h2>Congratulations</h2>
        <p>You have successfully changed your password</p>
        <button onClick={()=>nav('/login')}>Back to Login</button>
      </div>
        </div>

    </div>
  )
}

export default SuccessPage