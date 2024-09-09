import React from 'react'
import '../AuthCss/Verification.css'
import logo from '../assets/Logo.svg'


const Verification = () => {
  return (
    <div className='Verification'>
      <div className='Verification-form'>
        <div className="logo">
        <img src={logo} alt="" />
      

        </div>
        <div className="verification-text">
          <h3>Dear,</h3>
        </div>

      </div>

    </div>
  )
}

export default Verification