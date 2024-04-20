import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Engine App</h1>
      <div className="container">
        <Weather defaultCity="New York" />
      
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noluthando Bridget Siluma
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Bridget2960/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
<<<<<<< HEAD
            href="https://https://poetic-sunburst-16d857.netlify.app//"
=======
            href="https://suspicious-beaver-111c4d.netlify.com/"
>>>>>>> e67709989d5f0261466ce2d61cf76789178d3bb1
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}