// import logo from '../Images/logo.png';
import '../App.css';
import '../Info.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Landing from './Landing';
import ScrollAnimation from 'react-animate-on-scroll';


import { NavLink } from 'react-router-dom';

import first from '../Images/logo1.png'
import second from '../Images/logo2.png'
import third from '../Images/logo3.png'
import fourth from '../Images/logo4.png'
import { CSSTransition } from 'react-transition-group';

function Info(props) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="App mt-4" ref={props.pass} >
            <h1 style={{fontFamily:'cursive', color:'orange',textShadow:'4px 5px 7px rgb(0,0,0,0.7)'}}> Services </h1>
            <div class="parents mt-4">
                <div class="child">

               
      


                    <div style={{width:'30%',}} className="ic">

                    </div>
                    <div className='content' style={{width:'70%'}}>
                    <p style={{fontWeight:'bolder',fontSize:'2rem',textShadow:'2px 2px 4px rgb(255, 102, 217,0.5)'}}><b>PLUMBING SERVICE</b></p>
                        <p ><b style={{textShadow:'2px 2px 4px rgb(0,0,0,0.6)'}}>gives you high quality service </b></p>
                        <p style={{fontSize:'0.9rem'}}>In this example, the .container div is the flex container that holds the .centered-item div, which is the item you want to center. By using justify-content: center, the item will be centered horizontally within the container. And with align-items: center, the item will be centered vertically within the container.

                            The height and border properties in the container are optional and can be adjusted according to your layout requirements.

                            You can modify the styles of the .centered-item class as needed to customize the appearance of the centered content.
                        </p>
                    </div>
                  
                  
                </div>



                <div class="child">

               
      


                    
                    <div className='content' style={{width:'70%'}}>
                    <p style={{fontWeight:'bolder',fontSize:'2rem',textShadow:'2px 2px 4px rgb(255, 102, 217,0.5)'}}><b>PLUMBING SERVICE</b></p>
                        <p ><b style={{textShadow:'2px 2px 4px rgb(0,0,0,0.6)'}}>gives you high quality service </b></p>
                        <p style={{fontSize:'0.9rem'}}>In this example, the .container div is the flex container that holds the .centered-item div, which is the item you want to center. By using justify-content: center, the item will be centered horizontally within the container. And with align-items: center, the item will be centered vertically within the container.

                            The height and border properties in the container are optional and can be adjusted according to your layout requirements.

                            You can modify the styles of the .centered-item class as needed to customize the appearance of the centered content.
                        </p>
                    </div>
                    <div style={{width:'30%',}} className="ic2">

                    </div>
                  
                  
                </div>
                
            </div>

        </div>
    );
}

export default Info;
