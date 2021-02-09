import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {  
  return (
    <button
      disabled={props.disabled}
      className={[props.home_btn ? classes.Home_Button : ""].join(" ")}
    >
      {props.children}
    </button>
  );
};
export default Button;
