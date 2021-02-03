import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./Navigation Item/NavigationItem";
const navigationItem = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">Home</NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem exact link="/services">Services</NavigationItem>
    <NavigationItem exact link="/login">Log in</NavigationItem>
  </ul>
);
export default navigationItem;
