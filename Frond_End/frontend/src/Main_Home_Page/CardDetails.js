import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CardDetails = ({ card, requests, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Card Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {card && (
          <div className="card">
            <img src={card.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Price: {card.price}</h5>
              <p className="card-text">Count: {card.count}</p>
            </div>
          </div>
        )}
        <h5>Requests</h5>
        <ul className="list-group">
          {requests.map((request, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              {request.name}
              <div>
                <Button variant="success" className="mr-2">Accept</Button>
                <Button variant="danger">Reject</Button>
              </div>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default CardDetails;