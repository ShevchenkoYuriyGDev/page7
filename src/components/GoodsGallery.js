import React from 'react';
import GoodsCard from './GoodsCard';
import './GoodsGallery.css';

const GoodsGallery = () => {
  const goods = [
    { image: 'https://via.placeholder.com/150', title: 'Product 1', price: '$10' },
    { image: 'https://via.placeholder.com/150', title: 'Product 2', price: '$20' },
    { image: 'https://via.placeholder.com/150', title: 'Product 3', price: '$30' },
    { image: 'https://via.placeholder.com/150', title: 'Product 4', price: '$40' },
    { image: 'https://via.placeholder.com/150', title: 'Product 5', price: '$50' },
    { image: 'https://via.placeholder.com/150', title: 'Product 6', price: '$60' },
  ];

  return (
    <div className="goods-gallery">
      {goods.map((good, index) => (
        <GoodsCard key={index} image={good.image} title={good.title} price={good.price} />
      ))}
    </div>
  );
};

export default GoodsGallery;
