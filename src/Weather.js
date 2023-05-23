import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });

	let apiKey = "tb533a02o404f422da6058f58bb72fcc";
	let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&units=metric&key=${apiKey}`;

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.temperature.current,
			city: response.data.city,
		});
		alert();
	}
	axios.get(url).then(handleResponse);

	if (weatherData.ready) {
		return (
			<p>
				`The weather in ${weatherData.city} is ${weatherData.temperature}`
			</p>
		);
	} else {
		return <ThreeDots color="black" height={100} width={100} />;
	}
}
