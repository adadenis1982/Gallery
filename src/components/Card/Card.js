import React from 'react';
import { url } from '../../redux/api';
import './Card.css';

function Card({ card, location, author }) {

  console.log(location, author)
  return (
    <div className="card">
      <div className="card__img">
        <img src={`${url}${card.imageUrl}`} alt={card.name} />
      </div>
      <ul className="card__name">
        <li>{card.name}</li>
        <li><strong>Author:</strong> {author?.name}</li>
        <li><strong>Created:</strong>{card.created}</li>
        <li><strong>Location:</strong> {location?.name}</li>
      </ul>
    </div>
  );
}

export default Card;
