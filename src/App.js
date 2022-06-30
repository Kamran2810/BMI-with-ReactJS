import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter Valid Data");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(`Your BMI is :: ${bmi.toFixed(2)}`);

      if (bmi <= 18.49) {
        setMessage("Under Weight");
      } else if (bmi >= 18.5 && bmi <= 24.99) {
        setMessage("Healthy Weight");
      } else if (bmi >= 25 && bmi <= 39.99) {
        setMessage("Over Weight");
      } else if (bmi >= 40) {
        setMessage("Obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="header">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="card">
            <label>Enter your Height in Centimeters (cm)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="card">
            <label>Enter your Weight in Kilograms (kg)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div className="buttons">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>{bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
