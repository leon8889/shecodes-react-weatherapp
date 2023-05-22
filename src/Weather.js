import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
	let apiKey = "tb533a02o404f422da6058f58bb72fcc";
	let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&units=metric&key=${apiKey}`;

	function handleResponse(response) {
		alert(
			`The weather in ${response.data.city} is ${response.data.temperature.current}`
		);
	}
	axios.get(url).then(handleResponse);
	return <ThreeDots color="black" height={100} width={100} />;
}
