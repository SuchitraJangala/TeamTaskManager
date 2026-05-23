import React from 'react';
import '../styles/Card.css';

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
