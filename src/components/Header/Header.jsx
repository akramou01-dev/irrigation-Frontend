import React from 'react';
import Image from "../../assets/logonavbargreen.png";
import "./Header.css";

const Header = () => {
 return(
<div>
 <nav class="nav1">


    <img class="img-logo" src={Image} alt="Grean-IT LOGO"/>
    <div class="nav2">


      <a className="text-green " href="#">Home</a>
      <a className="text-green " href="#">About</a>
      <a className="text-green " href="#">Offers</a>
      <a className="text-green " href="#"> Log in</a>
      <select class="select1" name="Languages">
        <option value="English">English</option>
        <option value="Fraçais">Français</option>
      </select>

    </div>
  </nav>
</div>
 );
};



export default Header;