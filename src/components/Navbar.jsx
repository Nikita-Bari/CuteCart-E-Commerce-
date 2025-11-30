import React, { useState} from "react";
import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";    
import {FaSearch} from "react-icons/fa";
import logo from "../Images/logo.png";


export default function Navbar(){

  const[search, setSerach]=useState("")
  const navigate = useNavigate();

  const handleSearch=(e)=>{
    const text = search.toLowerCase();
if(text==="electronics" || text==="electronic"){
  navigate("/electronic")
}
if(text==="cosmetics" || text==="cosmetic"){
  navigate("/cosmetic")
}
if(text==="essential"|| text==="home essentials")
  {
    navigate("/essential")
  }
if(text==="fashions" || text==="fashion") {
  navigate("/fashion")
}
  }

    return(
        <div>
   <nav>
    <Link to="/"><img src={logo} alt="amz" className="amz-logo"/></Link>


  <div className="search-bar">
    <input type="search" placeholder="search here" name="search" className="search" spellCheck="false" value={search} onChange={(e)=>setSerach(e.target.value)} onKeyDown={handleSearch}/>
    <span><FaSearch className="search-icon"/></span>
  </div>
  


  <div className="signin-btn">
    <Link to="/signin" className="sign-link">SignIn</Link>
  </div>
</nav>
           
        </div>
    )
}