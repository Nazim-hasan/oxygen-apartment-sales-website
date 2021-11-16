import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-dark bg-white pt-5 pb-0">
            <Container>
                <Row>
                    <Col sm={6} md={3} >
                    <h4 className='custom-font-color'>Building Location</h4>
                        <p className='text-dark'><small>6500 International Pkwy Suite 1100, Plano, TX 75093</small></p>
                        <p className='text-dark'><small> Tell +1 246-345-0699</small></p>
                        <p className='text-dark'><small>  Email info@ggBoy.com</small></p>
                    </Col>
                    <Col  sm={6} md={3}>
                        <h4 className='custom-font-color '>Opening Hours</h4>
                        <p className='text-dark'>Monday – Thursday : 10AM to 6PM</p>
                        <p className='text-dark'>Friday – Saturday : 11AM to 4PM</p>
                        <p className='text-dark'>Sunday: Close</p>
                        
                    </Col>
                    <Col md={3} sm={6}>
                        <h4 className='custom-font-color '>Import Links</h4>
                        <p className='text-dark'>Destination</p>
                        <p className='text-dark'>Get in Touch</p>
                        <p className='text-dark'>Who we Are</p>
                        <p className='text-dark'>Contact Us</p>
                    </Col>
                    <Col md={3} sm={6}>
                        <h4 className='custom-font-color '>Subscribe Newsletter</h4>
                        <p className='text-dark'><small>Subscribe to our newsletter & always be aware of all the latest updates</small></p>
                        <p className='text-dark'><small> Tell (800)-456-789</small></p>
                        <p className='text-dark'><small>  Email info@icloud.com</small></p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;