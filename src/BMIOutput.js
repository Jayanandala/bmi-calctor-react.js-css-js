// BMIOutput.js
import React from 'react';
import './BMIOutput.css';
const BMIOutput = ({ output }) => {
  return (
    <div className="output-section">
      <p> Your BMI </p>
      <p className="output"> {output} </p>
    </div>
  );
}

export default BMIOutput;
