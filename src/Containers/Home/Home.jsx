import React from "react";
import { Component } from "react";
import Aux from "../../Hoc/Auxilary/Auxilary";
import Button from "../../Components/UI/Button/Button";
import classes from "./Home.module.css";
import home_image from "../../assets/Home_Photo.png";
class Home extends Component {
  state = {
    description: "la description du home",
  };

  render() {
    return (
      <Aux>
        <div className={classes.Container}>
          <div className={classes.Right}>
            <h1>
              Controle your farm
              <br></br>
              from everywhere
              <br></br>
              in everytime
            </h1>
            <p>
              c'est la description du systeme on va le faire kan on termine le
              design car c'est qlq chose de details w wahdine rahoum mreyhine f
            </p>
            <Button home_btn>Preorder</Button>
          </div>
          <div className={classes.Left}>
            <img src={home_image} alt="home_image" />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Home;
