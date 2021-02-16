import React, { Component } from "react";
import classes from "./About.module.css";
import Aux from "../../Hoc/Auxilary/Auxilary";
import Appstore from "../../assets/appstore.png";
import Playstore from "../../assets/googleplay.png";
import Phonelogo from "../../assets/phonelogo.png";

import ScrollableContainer from "react-full-page-scroll";

const PageComponent = (props) => {
  return props.children;
};

class About extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Container}>
          <ScrollableContainer animationTime={500}>
            <PageComponent>
              <div className={classes.topDiv}>
                <div className={classes.topDivLeft}>
                  <div className={classes.first}>GET OUR APPLICATION NOW !</div>
                  <div className={classes.description}>
                    Our application is available now on google play and app
                    store. get the app, monitor your farm remotly
                  </div>
                </div>
                <div className={classes.topDivCenter}>
                  <img
                    className={classes.img2}
                    src={Phonelogo}
                    alt="phonelogo-image"
                  />
                </div>
                <div className={classes.topDivRight}>
                  <a href="#">
                    <img
                      id="img3"
                      className={classes.img3}
                      src={Playstore}
                      alt="googleplay-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      id="img4"
                      className={classes.img4}
                      src={Appstore}
                      alt="appstore-image"
                    />
                  </a>
                </div>
              </div>

              <div className={classes.socialDiv}>
                <a className={classes.link} href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a className={classes.link} href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a className={classes.link} href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a className={classes.link} href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <p className={classes.more}>
                  Read more about <span className="text-green">GREANIT</span>
                </p>
              </div>
            </PageComponent>
            <PageComponent page={2}>
              <div className={classes.titre}>
                WHAT IS <span className="text-green">BPX</span>
              </div>

              <div className={classes.bpx}>
                <div className={classes.element}>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <div className={classes.element}>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <div className={classes.element}>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </div>
              </div>
            </PageComponent>
          </ScrollableContainer>
        </div>
      </Aux>
    );
  }
}

export default About;
