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
            href="https://github.com/Bridget2960/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href = "https://poetic-sunburst-16d857.netlify.app/"
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