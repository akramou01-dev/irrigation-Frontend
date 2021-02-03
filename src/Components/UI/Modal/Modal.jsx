import React, { Component } from "react";
import Aux from "../../../Hoc/Auxilary/Auxilary";
import Backdrop from "../Backdrop/Backdrop";
import classes from './Modal.module.css'

class Modal extends Component {
  shouldComponentUpdate(next_props, next_state) {
    return (
      next_props.show !== this.props.show ||
      next_props.children !== this.props.children
    );
  }
  render(props) {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.close_modal} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        > {this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
