import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";


export default function Footer(){
    return(
        <div className="foot">
        <div className="items">
            <Link to="https://www.facebook.com"><FaFacebook className="facebook"/></Link>
            <Link to="https://www.instagram.com/"><FaInstagram className="instagram"/></Link>
            <Link to="https://www.twitter.com"><FaTwitter className="twitter"/></Link>
            </div>    
        </div>
    )
}