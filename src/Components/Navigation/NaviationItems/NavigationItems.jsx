import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./Navigation Item/NavigationItem";
import Aux from "../../../Hoc/Auxilary/Auxilary";
import Select from "../../UI/Select/Select";
const navigationItem = (props) => (
  <Aux>
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/home">Home</NavigationItem>
      <NavigationItem link="/about">About</NavigationItem>
      <NavigationItem exact link="/services">
        Services
      </NavigationItem>
      <NavigationItem exact link="/login">
        Log in
      </NavigationItem>
      <Select
        values={[
          { abr: "ANG", value: "Anglais" },
          { abr: "FR", value: "Francais" },
          { abr: "AR", value: "Arabe" },
        ]}
      />
    </ul>
  </Aux>
);
export default navigationItem;
