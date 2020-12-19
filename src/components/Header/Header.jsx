import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import Image from "../../assets/logonavbargreen.png";
import "./Header.css";

const Header = () => {
 return(
<>
 <nav class="nav1">
   
    <img class="img-logo" src={Image} alt="Grean-IT LOGO"/>
    <div className="nav2">

      <Link className="text-green navlink" to="/home">Home</Link>
      <Link className="text-green navlink" to="/about">About</Link>
      <Link className="text-green navlink" to="/service">Services</Link>
      <a className="text-green navlink" href="#"> Log in</a>
      <select className="select1 navlink" name="Languages">
        <option value="English">English</option>
        <option value="Fraçais">Français</option>
      </select>

    </div>
  </nav>
</>
 );
};



export default Header;