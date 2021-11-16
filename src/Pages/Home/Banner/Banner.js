import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerPhoto from './../../../Photos/Banner.png';
import './Banner.css';
const Banner = () => {
    return (

        <Container>
            <Row>
                <Col md={6} className="d-flex  align-items-center">
                    <div>
                    <h1>Into The Nature</h1>
                    <p>GREATE LOCATION - BEST PRICE</p>
                    <h5 className="custom-font-color">EXPORE MORE</h5>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={bannerPhoto} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;