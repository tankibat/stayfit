import React from 'react';
import {
 
  NavLink,
  
  
} from './NavbarElements';
import './bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';

import  Navbar from 'react-bootstrap/Navbar';

import logo from '../../sitelogo.png';

import imgx  from './fetureimgexy.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaFontAwesomeAlt, FaFonticonsFi } from 'react-icons/fa';

const Navbarx = () => {
  return (  
    
<>
<img src={imgx}  className="img-fluid" alt="Responsive "/>


<Container> 


<Row>
<Col sm={4} lg={12} md={12}>
   

    
    
    <Navbar expand="lg">
  <Navbar.Brand href="#home"><a className="navbar-brand" href="#"sitelogo><img src={logo} alt="Tan Ki Bat "/></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto  "  style={{paddingBottom:'20px'  }}  >
      
   
      
     
     
     
     
     
    <NavLink to='/home' activeStyle ={{ color:'#3426fb' }}     >
            Home
          </NavLink>
          <NavLink to='/about' activeStyle ={{ color:'#3426fb' }} >
            About
          </NavLink>
    
       <NavLink to='/events' activeStyle  ={{ color:'#3426fb' }}>
            Events
          </NavLink>
          <NavLink to='/healthyfood' activeStyle ={{ color:'#3426fb' }} >
            Healthy Foods
          </NavLink>
          
          <NavLink to='/youtube' activeStyle ={{ color:'#3426fb' }}  >
            Recent Videos
          </NavLink>
           
          <NavLink to='/team' activeStyle ={{ color:'#3426fb' }}  >
            Team
          </NavLink>
         
          
         
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Col>
</Row>
</Container>
</>
  );
};
  
export default Navbarx;