import React, { Component } from "react";

import Aux from "../../Hoc/Auxilary/Auxilary";
import classes from "./Services.module.css";
import Caroussel from "../../assets/Capture.PNG";
import Image from "../../assets/Home_Photo.png";
import Offres from "../../Components/Offres/Offres";
class Services extends Component {
  state = {
    offres: [
      {
        titre: "offre 1",
        description: "c'est le premier offre pour les services",
        image: Image,
      },
      {
        titre: "offre 2",
        description: "c'est le dexieme offre pour les services",
        image: Image,
      },
      {
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      {
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      {
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      {
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
    ],
  };
  render() {
    const service = "Service irrigation";
    return (
      <Aux>
        <div className={classes.Container}>
          <h1>Service irrigation</h1>
          <div className={classes.Top_Div}>
            <div className={classes.Top_Left_Div}>
              <img src={Caroussel} alt="Caroussel" />
            </div>

            <div className={classes.Top_Right_Div}>
              <p>
                <strong> {service.toLocaleUpperCase()} </strong> c'est la
                description du systeme on va le faire kan on termine le design
                car c'est qlq chose de details w wahdine rahoum mreyhine c'est
                la description du systeme on va le faire kan on termine le
                design car c'est qlq chose de details w wahdine rahoum mreyhine
              </p>
            </div>
          </div>

          <h1>Choisir une offre</h1>
          <div className={classes.Bottom_Div}>
            <Offres offres={this.state.offres} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Services;
