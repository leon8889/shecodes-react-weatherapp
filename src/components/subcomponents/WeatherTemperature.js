import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function showToFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showToCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	function convert2Fahrenheit() {
		return Math.round((props.temperature * 9) / 5 + 32);
	}

	if (unit === "fahrenheit") {
		return (
			<span className="WeatherTemperature">
				<span>{convert2Fahrenheit()}</span>
				<span className="units">
					°F |{" "}
					<a href="/" onClick={showToCelsius}>
						°C
					</a>{" "}
				</span>
			</span>
		);
	} else {
		return (
			<span className="WeatherTemperature">
				<span>{props.temperature}</span>
				<span className="units">
					°C |{" "}
					<a href="/" onClick={showToFahrenheit}>
						°F
					</a>
				</span>
			</span>
		);
	}
}
