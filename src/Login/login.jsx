import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../image/loginPage.png";
import "./login.css";


export default function Login() {
    const navigate = useNavigate();


  return (
    <div className='boys'>
        <div className="container">
            <div className="login-left">
                <div className="login-header">
                    <h1>Welcome to Our Application</h1>
                    <p>Please login to use the platform</p>
                </div>
                <form action="" className='login-form'>
                    <div className="login-form-content">
                        <div className="form-item">
                            <label htmlFor="email" >Enter Email</label>
                            <input className='fajlamo' type="text"id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Enter Password </label>
                            <input className='valoHoiyaJao' type="password"id="password"/>
                        </div>
                        <div className="form-item">
                            <div className="checkbox">
                                <input type="checkbox" name="" id="rememberMeCheckbox" checked />
                                <label htmlFor="rememberMeCheckbox"id='checkboxLabel' className='checkboxLabel'> Remember me </label>
                            </div>
                        </div>
                        <button className='submit' type='submit' onClick={()=>navigate('/')}>Sing In</button>
                    </div>
                    <div className="login-form-footer">
                        <a href="#">
                            <img width={30} src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                        </a>
                        <a href="#">
                            <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="" />Google Login
                        </a>
                    </div>
                </form>
            </div>
            <div className="login-right">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}
