import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['PLUMBING', 'ELECTRICIAN', 'HOMECURE', 'SERVICE'];
const colors = ["white", "yellow", "#FFF685", "orange"];

function Landing(props) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <div className="App" ref={props.pass}>
       <section id="home">
        <h1 class="h-primaryy mt-5" style={{color:'white'}} >Welcome to HOMECURE online service</h1>
        <p style={{color:'black' ,padding:'0px 5px', color:'white'}}class="h-primaryy"> <TextTransition style={{ color: colors[index % colors.length] }} springConfig={presets.slow}> We  serve you the {TEXTS[index % TEXTS.length]}</TextTransition> </p>
        <p className="mt-3" style={{color:'white'}}>Homecure.in  </p>
        <button class="custom-button" >Subsribe Now</button>
    </section>
    </div>
  );
}

export default Landing;
