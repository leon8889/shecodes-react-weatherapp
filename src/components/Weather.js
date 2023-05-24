import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import CurrentCity from "./subcomponents/CurrentCity.js";
import CurrentWeather from "./subcomponents/CurrentWeather.js";
// import Forecast from "./subcomponents/Forecast.js";

import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function search() {
		let apiKey = "tb533a02o404f422da6058f58bb72fcc";
		let url = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;

		axios.get(url).then(handleResponse);
	}

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.city,
			temperature: Math.round(response.data.temperature.current),
			description: response.data.condition.description,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			emojiURL: response.data.condition.icon_url,
			currentDate: getCurrentDate(response.data.time),
		});
		setCity(response.data.city);
	}

	function getCity(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (city) {
			search();
		}
	}

	function getCurrentDate(timestamp) {
		let currentDate = getDate(timestamp * 1000);
		return (
			currentDate["weekDay"] +
			", " +
			currentDate["month"] +
			" " +
			currentDate["day"] +
			" " +
			currentDate["hours"] +
			":" +
			currentDate["minutes"]
		);
	}

	function getDate(timestamp) {
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		let daysShort = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
		let months = [
			"Jan.",
			"Feb.",
			"Mar.",
			"Apr.",
			"May",
			"Jun.",
			"Jul.",
			"Aug.",
			"Sep.",
			"Oct.",
			"Nov.",
			"Dec.",
		];

		let date = new Date(timestamp);
		let dateArray = {
			hours: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minutes:
				date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			day: date.getDate(),
			month: months[date.getMonth()],
			weekDay: days[date.getDay()],
			weekDayShort: daysShort[date.getDay()],
		};
		return dateArray;
	}

	if (weatherData.ready) {
		console.log(weatherData);
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
						<CurrentCity CityName={weatherData.city} />

						<CurrentWeather weatherData={weatherData} />
						<hr />
						{/* <Forecast /> */}
					</div>

					<div className="Footer" id="footer">
						<div className="row">
							<div className="col">
								<p>
									<a
										href="https://github.com/leon8889/shecodes-react-weatherapp"
										target="_blank"
										rel="noreferrer"
									>
										Source code
									</a>{" "}
									by leon8889
								</p>
							</div>
							<div className="col">
								<p className="currentDate">{weatherData.currentDate}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return <ThreeDots color="black" height={100} width={100} />;
	}
}
