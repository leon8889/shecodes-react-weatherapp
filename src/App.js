import React from "react";

import Weather from "./components/Weather.js";

import "./App.css";

function App() {
	let defaultCity = "new york";
	return (
		<div className="App">
			<div className="image-wrapper">
				<div className="container">
					<Weather defaultCity={defaultCity} />
				</div>
			</div>
		</div>
	);
}

export default App;
