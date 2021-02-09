import React from "react";
import classes from "./Select.module.css";
const select = (props) => {
  const options = props.values.map((value) => (
    <option value={value.abr}>{value.value}</option>
  ));
  return <select disabled={props.disabled} className={classes.Select}>{options}</select>;
};
export default select;
