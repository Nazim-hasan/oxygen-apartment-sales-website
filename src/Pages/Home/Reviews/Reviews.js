import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
    fetch('https://gentle-mesa-29497.herokuapp.com/review')
    .then(res => res.json())
    .then(result=> setReviews(result))
    },[])
    return (
        <Container className="my-5">
            <div className="text-center">
            <h5 className="text-secondary">Some Reviews from </h5>
            <h1 className="text-success mb-5">Our honorable customer </h1>
            </div>
            <Row className="g-3">
                {
                    reviews.map(rev =><CustomerReviews key={rev._id} review={rev}></CustomerReviews>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;