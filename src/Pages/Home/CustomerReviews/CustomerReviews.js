import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const CustomerReviews =  (props)  => {
    const {customerName,Reviews,starRating}=props.review;
    return (
        <Col md={4} className="px-4">
            <Row className="shadow-lg rounded ">
                <Col md={4} className="">
                    <img src="https://www.pinclipart.com/picdir/middle/95-958614_man-icon-person-logo-png-clipart.png" alt="" className="img-fluid my-3" />
                </Col>
                <Col md={6} className="mt-3 text-dark">
                    <p  className="mb-0 text-dark">{Reviews}</p>
                    <p  className="mb-0 text-dark"><small>-{customerName}</small></p>
                    <Rating initialRating={starRating} readonly emptySymbol="far fa-star " fullSymbol="fas fa-star  text-warning" />
                    <br />
                </Col>
            </Row>
        </Col>
    );
};

export default CustomerReviews;