import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <div> 
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="navbar-items" style={{color: "black"}}>
          <li>
            <a style={{color: "black"}} href="#">About</a>
          </li>
          <li>
            <a style={{color: "black"}} href="#">Pricing</a>
          </li>
          <li>
            <a style={{color: "black"}} href="#">Review</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
