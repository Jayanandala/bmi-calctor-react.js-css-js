// BMIStatus.js
import React from 'react';
import './BMIStatus.css';

const BMIStatus = ({ bmiStatus }) => {
  const getClass = (status) => {
    switch (status) {
      case 'Underweight':
        return 'blue';
      case 'Normal Weight':
        return 'green';
      case 'Overweight':
        return 'yellow';
      case 'Obesity Class I':
      case 'Obesity Class II':
      case 'Obesity Class III':
        return 'red';
      default:
        return 'black';
    }
  };

  const statusClass = getClass(bmiStatus);

  return (
    <div className={`status ${statusClass}`}>
      <span>●</span> {bmiStatus}
    </div>
  );
}

export default BMIStatus;
