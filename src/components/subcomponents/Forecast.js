import React from "react";

import ForecastDay from "./ForecastDay.js";
import ConvertTime2Date from "./ConvertTime2Date";

import "./Forecast.css";

export default function Forecast(props) {
	if (props.forecastData[0]) {
		return (
			<div className="Forecast">
				<div className="row">
					{props.forecastData.map(function (dailyForecast, index) {
						let date = ConvertTime2Date(dailyForecast.time * 1000);
						let weekDay = index === 0 ? "today" : date.weekDay;
						let dateString = `${date.month} ${date.day}`;
						return (
							<div className="col" key={index}>
								<ForecastDay
									data={dailyForecast}
									date={dateString}
									weekDay={weekDay}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
