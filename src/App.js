import React from "react";

import Heading from "./components/Heading.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="image-wrapper">
				<div className="container">
					<Heading />
					<div className="space">
						<Main
							currentCityName="munich"
							description="clear"
							temperature={11}
							humidity={73}
							wind={2}
						/>
						<Footer currentDate="Tuesday, Apr. 25 09:24" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
