import logo from "./logo.svg";
import React from "react";

import Weather from "./Weather";

import "./App.css";

function App() {
	let city = "Paris";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<h1>Hello World from {city}!</h1>
				<h2>This is my first React App</h2>
				<Weather city={city} />
				<a href="shecodes.io" target="_blank">
					SheCodes
        </a>
				<img src="logo192.png" alt="test" />
      </header>
    </div>
  );
}

export default App;
