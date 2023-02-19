import React from 'react';
import logo from "../image/logo192.png";
import './home.css';
import { useNavigate } from "react-router-dom"; 

export default function Home() {
    const headerlogo ={
      height:150,
      margin:20
    }

    const navigate = useNavigate();
  return (
    <div >
    <div className="">
     <div className="top-menu">
      <div className="row">
      <div className="col-md-3">
      <ul>
        <a href="">
        <li>HOME</li>
        </a>
        <a href="">
        <li>GRE</li>
        </a>
        <a href="">
        <li>ALL PRODUCT</li>
        </a>
        
      </ul>
      </div>
      <div className="col-md-4"></div>
<div className="col-md-3">
  <ul>
    <a href="">
    <li>ENGLISH</li>
    </a>
    <a href="">
    <li>CONTRACT</li>

    </a>
  </ul>
</div>
<div className="col-md-2">
<button class="button-73" role="button" onClick={()=>navigate('/login')}>Login/Register</button>
</div>
     </div>
     </div>
     </div>
     <div className="secondnab">
     <nav class="navbar  justify-content-between" style={{backgroundColor:"#e6e9f0"}}>
      <a href="">
        <img style={{marginLeft:"85px"}} src={logo} alt="" width="50" height="50" />
      </a>
      <a href="">
        <li>TEST TAKERS</li>
        </a>
        <a href="">
        <li>EDUCATORS</li>
        </a>
        <a href="">
        <li>INSTITUTIONS</li>
        </a>
        <a href="">
        <li>BUSINESSES</li>
        </a>
        <a href="">
        <li>GOVERMENTS</li>
        </a>
        <a href="">
        <li>RESEARCH</li>
        </a>
    
      <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
     </nav>
     </div>

    </div>
    
  )
}
