import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../Auxilary/Auxilary";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
class Layout extends Component {
  render(props) {
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}> {this.props.children} </main>
        {/* <footer>Footer</footer> */}
      </Aux>
    );
  }
}

export default Layout;
