import React, { Component } from "react";

import Aux from "../../Hoc/Auxilary/Auxilary";
import classes from "./Services.module.css";
import Image from "../../assets/Home_Photo.png";
import Offres from "../../Components/Offres/Offres";
import Carousel from "../../Components/UI/Carousel/Carousel";
class Services extends Component {
  state = {
    offres: [
      { id : 1,
        titre: "offre 1",
        description: "c'est le premier offre pour les services",
        image: Image,
      },
      { id : 2,

        titre: "offre 2",
        description: "c'est le dexieme offre pour les services",
        image: Image,
      },
      { id : 3,
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      { id : 4,
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      { id : 5,
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
      { id : 6,
        titre: "offre 3",
        description: "c'est le 3eme offre pour les services",
        image: Image,
      },
    ],
    carousel_images: [{id : 1, image: Image }, {id : 2, image: Image }, {id : 3, image: Image }],
  };
  render() {
    const service = "Service irrigation";
    return (
      <Aux>
        <div className={classes.Container}>
          <h1>Service irrigation</h1>
          <div className={classes.Top_Div}>
            <div className={classes.Top_Left_Div}>
              <Carousel images ={this.state.carousel_images} />
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
