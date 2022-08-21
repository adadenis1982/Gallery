import React from 'react';
import { url } from "../../redux/api";
import "./Card.css";

function Card({card}) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`${url}${card.imageUrl}`} alt={card.name} />
      </div>
      <div className="card__name">{card.name}</div>
    </div>
  );
}

export default Card;
