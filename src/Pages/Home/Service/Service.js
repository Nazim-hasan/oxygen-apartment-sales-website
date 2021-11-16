import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,name,shortDec,img,rent}=props.service;
    return (
            <Col md={4}>
            <div className="shadow-lg rounded">
                <img className="rounded-top " style={{maxHeight: "227px"}} src={img} alt="" width="350" height="200"/>
                <div className="ps-1 my-2 mx-2">
                    <h5 className="fw-bolder ">{name}</h5>
                    <small className="fw-light">{shortDec.slice(0,85)}</small>
                    </div>
                    <h6 className="text-center">Rent: {rent}</h6>
                    <Link to={`/placeOrder/${_id}`}>
                    <div className="text-center">
                        
                    <button className="btn btn-success mb-3 btn-sm">Book Now</button>
                    </div>
                    </Link>
            </div>
        </Col>
    );
};

export default Service;