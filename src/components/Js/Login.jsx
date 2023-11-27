import React from 'react';
import "../css/login.css";
import Loginlogo from "../Assets/loginicon.png";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <section className='Login'>
      <img src={Loginlogo} alt="none" width={"140px"}/>
      <div className="logincont">
        <h2>We are Electric</h2>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Password'/>
        <Link to="/home" className='Linkbtn'><button>Login</button></Link>
        <p>Forgot Password ?</p>
      </div>
    </section>
  )
}

export default Login