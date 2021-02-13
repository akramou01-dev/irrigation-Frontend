import React from "react";
import classes from "./Offre.module.css";
const offre = (props) => {
  return (
    <article className={classes.Article}>
      <img src={props.image} alt="Offre_Image" />
      <h1> {props.titre} </h1>
      <p> {props.description} </p>
    </article>
  );
};  

export default offre;
