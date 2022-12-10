import React from 'react'
import { Col , Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Fade } from 'react-reveal';
 const Footer = () => {
  return (
    <Fade>
    <div className='footer text-light text-lg-start text-center'>
         
          <Container className='p-4'>
           
            <Row>
                <Col sm={6} lg={3}>
                    <div className='footer-1'>
                            <h1>Nasser</h1>
                            <p className=''>Laborum cupidatat deserunt proident ut. Irure voluptate veniam aliqua excepteur commodo cillum occaecat ipsum nisi laborum duis voluptate ipsum. Do qui nostrud aliquip ad ad labore.</p>
                            <p>Created By  <span style={{color:'gold'}}>Nasser Bash </span>  </p>
                            <p>Copyright </p>
                    </div>
                </Col>

                <Col sm={6} lg={3}>
                    
                    <div className='footer-2 p-2 '>
                    <h4 className=''>Links</h4>
                    <ul className='list-unstyled lh-lg'>
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>Testimonials</li>
                        <li>Support</li>
                        <li>Terms and Condition</li>
                    </ul>
                    </div>
                </Col>

                <Col sm={6} lg={3}>
               
                    <div className='footer-3 p-2'>
                    <h4  className=''>About Us</h4>
                    <ul className='list-unstyled lh-lg'>
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    </div>
                </Col>

                <Col sm={6} lg={3}>
                    <div className='footer-4 p-2'>
                    <h4>Contact  Us</h4>
                    
                            <p>Get in touch with us via mail phone.We are waiting for your call or message</p>
                            <p className='email p-2 rounded-pill'> <FontAwesomeIcon icon={faEnvelope} style={{color:'#5a0d0d'}}></FontAwesomeIcon> nasser9959@gmail.com</p>
                    </div>
                    <div className='social d-flex justify-content-around '>
                        <a href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </Col>
                </Row>
             
            </Container>
            
    </div>
    </Fade>
  )
}
export default Footer;