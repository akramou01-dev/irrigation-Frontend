import React, { Component } from "react";

import Aux from "../../Hoc/Auxilary/Auxilary";
import classes from "./Services.module.css";
import Caroussel from "../../assets/Capture.PNG";
class Services extends Component {
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

          <div className={classes.Bottom_Div}>
            bottom part
            <div>
              <h1>Choisir une offre</h1>
              offers part
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Services;
