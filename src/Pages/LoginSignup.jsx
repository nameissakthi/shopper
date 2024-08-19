import React, { useRef, useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [loginsign, setLoginsign] = useState("Sign up")
  const name = useRef()

  function LoginSign(){
    if(name.current.style.display === 'none'){
      name.current.style.display = 'block'
      setLoginsign('Sign up')
    }else{
      name.current.style.display = 'none'
      setLoginsign('Login')
    }
    console.log(loginsign)
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{loginsign}</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' ref={name} />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span><a href="#" onClick={LoginSign}>Login here</a></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
