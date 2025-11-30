import React from "react";
import "../style/Header.css";
import {Link} from "react-router-dom";
export default function Header(){
    return(
        <div>
 <header>

<div className="menu">
  <Link to="/" className="link"><div className="abc-menu">All</div></Link>
  <Link to="/electronic"  className="link"><div className="abc-menu">Electronics</div></Link>
  <Link to="/essential"  className="link"><div className="abc-menu">Essential</div></Link>
 <Link to="/cosmetic"  className="link"> <div className="abc-menu">Cosmetics</div></Link>
  <Link to="/fashion"  className="link"><div className="abc-menu">Fashion</div></Link>
 <Link to="/fashion"  className="link"> <div className="abc-menu">Sell</div></Link>
</div>
  
</header>


           
        </div>
    )
}