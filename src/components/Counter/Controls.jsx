import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button className="Counter__buttons" type="button" onClick={onIncrement}>
        increase by 1
      </button>
      <button className="Counter__buttons" type="button" onClick={onDecrement}>
        decrease by 1
      </button>
    </div>
  );
};

export default Controls;
