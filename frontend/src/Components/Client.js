// import logo from '../Images/logo.png';
import '../App.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Landing from './Landing';

import first from '../Images/logo1.png'
import second from '../Images/logo2.png'
import third from '../Images/logo3.png'
import fourth from '../Images/logo4.png'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function Client(props) {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="App" style={{marginBottom:"100px",marginTop:'100px'}} ref={props.pass}>

        <section >
        <h1 class="h-primary center" style={{textShadow:'2px 2px 2px #ffb3b3'}}>Our Happy Service</h1>
        {/* <div id="clients">
       
            <div class="client-item">
                <img src={first} alt="Our Client" className="client-image"/>
            </div>
            <div class="client-item">
                <img src={second} alt="Our Client" className="client-image"/>
            </div>
          
            <div class="client-item">
                <img src={third} alt="Our Client" className="client-image"/>
            </div>
            <div class="client-item">
                <img src={fourth} alt="Our Client" className="client-image"/>
            </div>
           
        </div> */}

<div class="scrollable-container mt-5">
    <div class="flex-container">
      <div class="flex-item" className="image-container shadow-box" > <img src={first} alt="Our Client" className="responsive-image"/>
      </div>
      <div class="flex-item" className="image-container shadow-box ">  <img src={second} alt="Our Client"  className="responsive-image"/></div>
      <div class="flex-item" className="image-container shadow-box"> <img src={third} alt="Our Client"  className="responsive-image"/></div>
      <div class="flex-item" className="image-container shadow-box"> <img src={first} alt="Our Client"  className="responsive-image"/></div>
    </div>
  </div>
    </section>
    </div>
  );
}

export default Client;
