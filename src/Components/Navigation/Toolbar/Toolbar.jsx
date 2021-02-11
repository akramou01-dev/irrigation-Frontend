import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NaviationItems/NavigationItems";
import Icon from "../../../assets/icon.png";
import Aux from "../../../Hoc/Auxilary/Auxilary";
const Toolbar = (props) => {
  return (
    <Aux>
      <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      <div className={classes.Icon}>
        <img src={Icon} alt="Icon" />
      </div>
      </header>
    </Aux>
  );
};
export default Toolbar;
