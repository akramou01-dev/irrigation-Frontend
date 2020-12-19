import React from 'react';
import {Image, Card, Icon } from 'semantic-ui-react'; 
import './About.css';
import Header from "../Header/Header.jsx";
import Appstore from "../../assets/appstore.png";
import Playstore from "../../assets/googleplay.png"
import Phonelogo from "../../assets/phonelogo.png";

const About = () => {
 return(
<>
<Header/>
<div className="d-flex">
 <div className="text">
  <div className="bold mega_text">
   GET OUR APPLICATION NOW !
  </div>
  <div className="description extra-text">
   Our application is available now on google play and app store. get the app, monitor your farm remotly
  </div>
 </div>

 <div className="mob">
<img src={Phonelogo} alt="googleplay-image"/>
 </div>

 <div className="store">
  <a className="link_store" href="#"><img id="img3" src={Playstore} alt="googleplay-image"/></a>
  <a className="link_store" href="#"><img id="img4" src={Appstore} alt="appstore-image"/></a>
 </div>
</div>


<div className="d-flex social">
 <a className="link_social" href="#"><i class="fab fa-linkedin"></i></a>
 <a className="link_social" href="#"><i class="fab fa-instagram"></i></a>
 <a className="link_social" href="#"><i class="fab fa-youtube"></i></a>
 <a className="link_social" href="#"><i class="fab fa-facebook-square"></i></a>
 <p className="more bold">Read more about <span className="text-green">GREANIT</span></p>
</div> 
<div className="mega_text bold _titre">
 WHAT IS <span className="text-green">BPX</span>
</div>
<div className="d-flex bpx">
 <div className="large-title bpx_element">
  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
 </div>
 <div className="large-title bpx_element">
  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
 </div>
 <div className="large-title bpx_element">
  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
 </div>
</div>

<div className="mega_text bold _titre">
 Our team 
</div>

<div className="d-flex team">
<i class="fal fa-caret-left"></i>
  <Card className="our_team">
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>TALEB <br/>Douaa</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2020</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        CO-FUNDER
      </a>
    </Card.Content>
  </Card>

 <Card className="our_team">
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>BECHORFA Med El Amine</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2020</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        GRAPHIC DESIGNER
      </a>
    </Card.Content>
  </Card>

  <Card className="our_team">
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>OUARDAS Akram abdelilah</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2020</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        BACK-END DEVELOPPER
      </a>
    </Card.Content>
  </Card>

  <Card className="our_team">
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>EL MOGHERBI <br/> Fayçal</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2020</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        MOBILE DEVELOPPER
      </a>
    </Card.Content>
  </Card>

  <Card className="our_team">
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>BOUABDALLAH <br/> Said</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2020</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        FRONT-END DEVELOPPER
      </a>
    </Card.Content>
  </Card>
  <i class="fal fa-caret-right"></i>
</div>
</>
 );
}

export default About;