import React from 'react';

const ImageControls = ({ onAdd, onIncrease, onDecrease, onRemove }) => {
  return (
    <div>
      <button onClick={onAdd}>Додати</button>
      <button onClick={onIncrease}>Збільшити</button>
      <button onClick={onDecrease}>Зменшити</button>
      <button onClick={onRemove}>Видалити</button>
    </div>
  );
};

export default ImageControls;
