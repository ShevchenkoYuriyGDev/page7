import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import ImageControls from './components/ImageControls';
import GoodsGallery from './components/GoodsGallery';
import './App.css';

const App = () => {
  const [imageWidth, setImageWidth] = useState(400);
  const [showImage, setShowImage] = useState(false);

  const handleAddImage = () => {
    setShowImage(true);
  };

  const handleIncreaseImage = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const handleDecreaseImage = () => {
    setImageWidth((prevWidth) => Math.max(prevWidth - 50, 50));
  };

  const handleRemoveImage = () => {
    setShowImage(false);
  };

  const variantNumber = 19;
  const targetIndex = (variantNumber % 10) + 1;

  const handleListItemClick = (listId, itemId) => {
    if (listId === 'books-list' && itemId === `book-${targetIndex}`) {
      const element = document.getElementById(itemId);
      element.classList.toggle('clicked');
    } else if (listId === 'movies-list' && itemId === `movie-${targetIndex + 1}`) {
      const element = document.querySelector(`#${itemId}`);
      element.classList.toggle('query-clicked');
    }
  };

  return (
    <div className="App">
      <Header />
      <Content handleListItemClick={handleListItemClick} />
      <p>
        Дізнатися більше про{' '}
        <a href="https://uk.wikipedia.org/wiki/Київ" target="_blank" rel="noopener noreferrer">
          Київ
        </a>
        .
      </p>
      {showImage && <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Монумент_Незалежності_України_Майдан.jpg" alt="Київ" width={imageWidth} />}
      <ImageControls
        onAdd={handleAddImage}
        onIncrease={handleIncreaseImage}
        onDecrease={handleDecreaseImage}
        onRemove={handleRemoveImage}
      />
      <GoodsGallery />
    </div>
  );
};

export default App;