import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardDetails from './CardDetails';
import former from '../image/former.jpg';
import f1 from '../image/fr1.jpg';
import f2 from '../image/fr2.jpg';
import f3 from '../image/fr3.jpg';
import './home.css'; // Ensure this path is correct

export const MainHome = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleCardClick = (event, card) => {
    event.stopPropagation();
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const getMenuItemClass = (menu) => (
    `list-group-item list-group-item-action ${selectedMenu === menu ? 'active' : ''}`
  );

  const cardsData = [
    { id: 1, image: former, price: '₹10', count: 5 },
    { id: 2, image: f1, price: '₹20', count: 3 },
    { id: 3, image: f2, price: '₹30', count: 8 },
    { id: 4, image: f3, price: '₹40', count: 2 },
    { id: 5, image: f1, price: '₹40', count: 2 },
  ];

  const requestsData = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' }
  ];

  return (
    <div className="d-flex vh-100">
      <div className="bg-purple p-3 h-100" style={{ width: '200px' }}>
        <ul className="list-group">
          <li onClick={() => handleMenuClick('home')} className={getMenuItemClass('home')}>
            Home
          </li>
          <li onClick={() => handleMenuClick('about')} className={getMenuItemClass('about')}>
            About
          </li>
          <li onClick={() => handleMenuClick('contact')} className={getMenuItemClass('contact')}>
            Contact
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 p-3">
        {selectedMenu === 'home' && (
          <div className="row">
            {cardsData.map(card => (
              <div className="col-md-3 mb-4" key={card.id}>
                <div className="card card-fixed-size">
                  <img src={card.image} className="card-img-top card-img-fixed-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Price: {card.price}</h5>
                    <p className="card-text">Count: {card.count}</p>
                    <Button variant="primary" onClick={(event) => handleCardClick(event, card)}>See</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedMenu === 'about' && (
          <div>
            <h1>About Page</h1>
            <p>Learn more about us on this page.</p>
          </div>
        )}
        {selectedMenu === 'contact' && (
          <div>
            <h1>Contact Page</h1>
            <p>Get in touch with us through this page.</p>
          </div>
        )}
      </div>

      <CardDetails
        card={selectedCard}
        requests={requestsData}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
};