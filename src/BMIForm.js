// BMIForm.js
import React from 'react';
import './BMIForm.css';

const BMIForm = ({ weight, height, onWeightChange, onHeightChange }) => {
  return (
    <div className="input-section">
      <p className="slider-output">Weight: {weight} kg</p>
      <input
        className="input-slider"
        onChange={onWeightChange}
        type="range"
        step="1"
        min="40"
        max="220"
        value={weight}
      />
      <p className="slider-output">Height: {height} cm</p>
      <input
        className="input-slider"
        onChange={onHeightChange}
        type="range"
        step="1"
        min="120"
        max="220"
        value={height}
      />
    </div>
  );
}

export default BMIForm;
