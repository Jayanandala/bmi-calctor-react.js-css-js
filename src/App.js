// App.js
import React, { useState, useMemo } from "react";
import BMIForm from "./BMIForm";
import BMIOutput from "./BMIOutput";
import BMIStatus from "./BMIStatus";
import './App.css';

// set default values for weight and height
const defaultWeight = 44;
const defaultHeight = 120;

function App() {
  const [height, setHeight] = useState(defaultHeight);
  const [weight, setWeight] = useState(defaultWeight);

  const onHeightChange = (event) => {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  };

  const onWeightChange = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  };

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  const bmiStatusCalculation = (output) => {
    let bmiStatus = "";
    let bmiSignClass = "black";
    if (output < 18.5) {
      bmiStatus = "Underweight";
      bmiSignClass = "blue";
    } else if (output > 18.5 && output <= 24.9) {
      bmiStatus = "Normal Weight";
      bmiSignClass = "green";
    } else if (output > 25 && output <= 29.9) {
      bmiStatus = "Overweight";
      bmiSignClass = "yellow";
    } else if (output > 30 && output <= 34.9) {
      bmiStatus = "Obesity Class I";
      bmiSignClass = "red";
    } else if (output > 35 && output <= 39.9) {
      bmiStatus = "Obesity Class II";
      bmiSignClass = "red";
    } else {
      bmiStatus = "Obesity Class III";
      bmiSignClass = "red";
    }
    return [bmiStatus, bmiSignClass];
  };

  return (
    <main>
      <h1> BMI CALCULATOR </h1>
      <BMIForm
        weight={weight}
        height={height}
        onWeightChange={onWeightChange}
        onHeightChange={onHeightChange}
      />
      <BMIOutput output={output} />
      <BMIStatus output={output} bmiStatus={bmiStatusCalculation(output)[0]} />
    </main>
  );
}

export default App;
