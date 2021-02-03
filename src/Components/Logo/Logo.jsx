import React from "react";
import classes from "./Logo.module.css";
import Logo_ from "../../assets/logonavbargreen.png";


const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={Logo_} alt="GREANIT Logo" />
  </div>
);
export default Logo;