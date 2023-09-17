
import '../App.css';
import { Helmet } from 'react-helmet';
import Landing from './Landing';

import Client from './Client';
import Form from './Form';
import Footer from './Footer';
import Service from './Service';
import Home from './Home';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRef } from 'react';

function Index() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  
  return (
    <div className="App">
         <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Helmet>
    
       {/* <nav id="navbar">
        <div id="logo">
            <img src={logo} alt="MyOnlineMeal.com" />
        </div>
        <ul>
        <li className="item">
          <NavLink exact to="/"  class='NavLink' >
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/"  class='NavLink' >Services</NavLink>
        </li>
        <li className="item">
          <NavLink to="/" class='NavLink'>Our Clients</NavLink>
        </li>
        <li className="item">
          <NavLink to="/"   class='NavLink'>Contact Us</NavLink>
        </li>
        </ul>
    </nav> */}

<Navbar className='gradient' expand="lg" id="navbar"   >
      <Container>
        <Navbar.Brand href="/" style={{color:'white',fontWeight:'bolder'}}>HomeCure.in</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"  onClick={() => section1Ref.current.scrollIntoView({ behavior: 'smooth' })} className='item'>Home</Nav.Link>
            <Nav.Link href="#"  onClick={() => section2Ref.current.scrollIntoView({ behavior: 'smooth' })} className='item'>Package</Nav.Link>
            <Nav.Link href="#" onClick={() => section3Ref.current.scrollIntoView({ behavior: 'smooth' })} className='item'>Services</Nav.Link>
            <Nav.Link href="#" onClick={() => section4Ref.current.scrollIntoView({ behavior: 'smooth' })}  className='item'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Landing pass={section1Ref}/>
    <Info ></Info>
    <Home pass={section2Ref}/>
    <Client  pass={section3Ref}/>
    <Form pass={section4Ref}/>
    <Footer />
    </div>
  );
}

export default Index;
