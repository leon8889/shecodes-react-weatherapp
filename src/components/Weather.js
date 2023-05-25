import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import CurrentWeather from "./subcomponents/CurrentWeather.js";
import Forecast from "./subcomponents/Forecast.js";
import ForecastGraphic from "./subcomponents/ForecastGraphic.js";
import Footer from "./subcomponents/Footer.js";

import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [forecastData, setForecastData] = useState([]);
	const [city, setCity] = useState(props.defaultCity);

	let apiKey = "tb533a02o404f422da6058f58bb72fcc";

	function searchWeather4City() {
		let url = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;

		axios.get(url).then(handleWeatherAPIResponse);
	}

	function searchWeather4Position(position) {
		let url = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&key=${apiKey}`;

		axios.get(url).then(handleWeatherAPIResponse);
	}

	function handleWeatherAPIResponse(response) {
		if (response.status === 200) {
			setCity(response.data.city);
			setWeatherData({
				ready: true,
				city: city,
				temperature: Math.round(response.data.temperature.current),
				description: response.data.condition.description,
				humidity: response.data.temperature.humidity,
				wind: Math.round(response.data.wind.speed * 10) / 10,
				emojiURL: response.data.condition.icon_url,
				time: response.data.time,
			});
			searchForecast4City(city);
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	function searchForecast4City(city) {
		let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&units=metric&key=${apiKey}`;

		axios.get(url).then(handleForecastAPIResponse);
	}

	function handleForecastAPIResponse(response) {
		if (response.status === 200) {
			let forecastResponse = response.data.daily;
			let forecast = [];

			forecastResponse.forEach(function (forecastDay, index) {
				if (index < 5) {
					forecast[index] = {
						temperatureMax: Math.round(forecastDay.temperature.maximum),
						temperatureMin: Math.round(forecastDay.temperature.minimum),
						emojiURL: forecastDay.condition.icon_url,
						description: forecastDay.condition.description,
						time: forecastDay.time,
					};
				}
			});
			setForecastData(forecast);
		} else {
			console.log(`${response.status}: Response Error`);
		}
	}

	function getCity(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (city) {
			searchWeather4City();
		}
	}

	function getGeolocation(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(searchWeather4Position);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<div className="Heading">
					<div className="row">
						<div className="col">
							<h1>my Weather</h1>
						</div>
						<div className="col align-self-end">
							<form onSubmit={handleSubmit} id="searchForm">
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Get your weather in ..."
										id="citySearch"
										aria-label="City Search"
										aria-describedby="basic-addon2"
										autoFocus="on"
										onChange={getCity}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											type="submit"
											id="citySearchButton"
										>
											<img
												id="searchIcon"
												src="./images/search.svg"
												alt="Go"
												width="20"
											/>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="space">
					<div className="Main">
						<div className="CurrentCity">
							<div className="row">
								<div className="col">
									<p>
										Weather in{" "}
										<span className="CityName">{weatherData.city}</span>
									</p>
								</div>
								<div className="col text-right">
									<button
										className="btn btn-link"
										id="CurrentLocation"
										onClick={getGeolocation}
									>
										<span
											title="find weather at current location"
											role="img"
											aria-label="geolocation"
										>
											🚩
										</span>
									</button>
								</div>
							</div>
						</div>

						<CurrentWeather weatherData={weatherData} />
						<hr />
						<Forecast forecastData={forecastData} />
						<hr />
						<ForecastGraphic forecastData={forecastData} />
					</div>

					<Footer time={weatherData.time} />
				</div>
			</div>
		);
	} else {
		searchWeather4City();
		return <ThreeDots color="black" height={100} width={100} />;
	}
}
