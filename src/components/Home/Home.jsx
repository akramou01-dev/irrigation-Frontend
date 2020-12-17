import React from 'react'
import Image2 from "../../assets/smartfarm.png";
import Header from "../Header/Header.jsx";
import "./Home.css";

const Home = () => {
 return(
  <>
  <Header/>
 <div>
  <div className="d-flex">
  <div class="Text1">
    <h1 className="titre" >Contrôle your farm <br/> from everywhere <br/> in everytime</h1>
    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
       minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
<button  id="but1" type="button" name="Button">Preorder</button>
  </div>



  <img id="img2" src={Image2} alt="smartfarm-image"/>
</div>
 </div>
 </>
 );
}  


export default Home;