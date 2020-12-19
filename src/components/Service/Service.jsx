import React from 'react';
import Header from "../Header/Header.jsx";
import Image from "../../assets/farm.jfif";
import Image2 from "../../assets/téléchargement.jfif";
import Image3 from "../../assets/téléchargement (2).jfif";
import "./Service.css";
import Offers from "./Offers.jsx";

const Service = () =>{

 const Cards = ((() => {
  /*
   * @description dom loaded event listener
   */
  window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards
   */
  function init(e)
  {
    if(document.querySelector(".cardd"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .cardd")[1].click();
    }
  }

  /*
   * @method clicked
   * @parameter e {event}
   * @description this is the callback from the assigned event listener binding
   */
  function clicked(e)
  {
    let cardd = e.target;
    if(cardd.getAttribute("data-cardd")){rearrange(cardd.getAttribute("data-cardd"));}
  }

  /*
   * @method rearrange
   * @parameter card {object}
   * @description this is the callback from the assigned event listener binding
   */
  function rearrange(cardd)
  {
    let cards = document.querySelectorAll(".cards .cardd");
    for(let n = 0; n < cards.length; n++)
    {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
    }
    cards[cardd].classList.add("card--center");
    if(cardd == 0)
    {
      cards[2].classList.add("card--left");
      cards[1].classList.add("card--right");
    }
    if(cardd == 1)
    {
      cards[0].classList.add("card--left");
      cards[2].classList.add("card--right");
    }
    if(cardd == 2)
    {
      cards[1].classList.add("card--left");
      cards[0].classList.add("card--right");
    }
  }

  return {
    init
  }
})());


 return(
<>
<Header/>
<div className="header bold _titre">
 Service Irrigation
</div>
<div className="d-flex _content">
 <div class="cards">
  <div class="cardd fill-orange" data-card="0">
    <div class="card__icon" data-icon="1">
     <img class="photo" src={Image} alt="..."/>
    </div>
  </div>
  <div class="cardd fill-blue" data-card="1">
    <div class="card__icon" data-icon="2">
     <img class="photo" src={Image2} alt="..."/>
    </div>
  </div>
  <div class="cardd fill-green" data-card="2">
    <div class="card__icon" data-icon="3">
     <img class="photo" src={Image3} alt="..."/>
    </div>
  </div>
  
</div>
<div className="_description">
    <p ><strong>SERVICE IRRIGATION</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
       minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
</div>
</div>
<div className="mega_text bold _titre">
 Choose an offer
</div>
<Offers/>
</>
 );
}

export default Service;