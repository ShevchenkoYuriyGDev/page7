import React from 'react';
import './GoodsCard.css';

const GoodsCard = ({ image, title, price }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default GoodsCard;
