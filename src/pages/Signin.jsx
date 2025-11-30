import React, { useState } from "react";
import "../style/Signin.css";
import {useNavigate} from "react-router-dom";

export default function Signin () {
const [email, SetEmail]=useState("");
const [password, SetPassword]=useState("");

        const navigate = useNavigate();

        const handleSubmit=(e)=>{
                if(email.trim()==="" && password.trim()===""){
                        alert("please fill all the details");
        }
        else{
                navigate("/");
                alert("Signin Successful");
        }
}
       return(
        <div className="page">
<form>
    <h2>SignIn</h2>
    <input type="email" placeholder="email"  className="email" value={email} onChange={(e)=>SetEmail(e.target.value)}/><br/>
    <input type="password" placeholder="password" className="password" value={password} onChange={(e)=>SetPassword(e.target.value)}/><br/>
 <button onClick={handleSubmit} className="sign-button">SignIn</button>
</form>
        </div>
        )
}