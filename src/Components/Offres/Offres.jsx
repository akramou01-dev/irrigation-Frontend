import React from "react";
import Offre from "./Offre/Offre";
import classes from "./Offres.module.css"
const offres = (props) => {
  const offres = props.offres.map((offre) => (
    <Offre
      key = {offre.id}
      titre={offre.titre}
      description={offre.description}
      image={offre.image}
    />
  ));
  return (
      <div className={classes.Offres}>
          {offres}
      </div>
  );
};
export default offres;
