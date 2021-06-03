import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import youicon from './youtubex.jpg';
import flogo from './sitelogof.png'
import Container from 'react-bootstrap/Container';


import {
  
  FacebookShareButton,
  
   
  LinkedinShareButton,
  
  TwitterShareButton,
 
  WhatsappShareButton,
 
} from "react-share";
import {
 
  FacebookIcon,

  
  
  LinkedinIcon,
 
  
  TwitterIcon,
 
  WhatsappIcon,
  
} from "react-share";














const FooterPage = () => {
  return (
    <div>
          
         
   

          <Container>
  <Row   style={{backgroundColor: 'lightblue'                 }}      >
   
    
    
    
    
    
    
    
    <Col sm={4} lg={12} md={12}    style={{backgroundColor: '#dd940bd0', height: '100px' ,display: 'flex',justifyContent: 'Center',
		alignItems: 'Center',
	}}   >
         
    < FacebookShareButton    url={'https://www.facebook.com/'}  title={'follow me on Facebook '}  >  
          
                 
          <FacebookIcon size={32} round={true} />  </ FacebookShareButton> &nbsp;&nbsp;
   
          < WhatsappShareButton    url={'https://www.youtube.com/channel/UCkgY5iy0Y4SqQustDKlee7g/videos'}  title={'follow me on Youtube'}  > 
          
                 
          <WhatsappIcon size={32} round={true} />  </ WhatsappShareButton> 
          < TwitterShareButton    url={'https://twitter.com/'}  title={''}  >  &nbsp; &nbsp;
          
                 
          <TwitterIcon size={32} round={true} />  </ TwitterShareButton> 
          < LinkedinShareButton   url={''}  title={''}  >  &nbsp; &nbsp;
          
                 
          <LinkedinIcon size={32} round={true} />  </LinkedinShareButton> 
    
          
         
    
    
    
    </Col>
    <Col sm={4} lg={12} md={12}  style={{backgroundColor: 'white', height: '100px', display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center'}} > 
    
    <a  href={'https://www.youtube.com/channel/UCkgY5iy0Y4SqQustDKlee7g/videos'} target="_blank" >   <img src={youicon} alt=""/> follow me on Youtube  </a> </Col>
    





    <Col sm={4} lg={12} md={12}  style={{backgroundColor: '#dd940bd0', height: '90px', display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center' }}  > <img src={flogo} className="imgx"   alt=""/>     </Col>
    
  <Col    sm={4} lg={12} md={12}  style={{backgroundColor: '#dd940bd0', height: '30px',    display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center' }}  >    Copyright Ⓒ Tan Ki Bat Dr. Agrwal Ke Sath  </Col>

  </Row>
</Container>
          
          
          
          
          
          
          
          
          
      </div>
  
  );
}

export default FooterPage;