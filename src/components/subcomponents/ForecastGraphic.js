import React from "react";
import ConvertTime2Date from "./ConvertTime2Date";
import Plot from "react-plotly.js";

export default function ForecastGraphic(props) {
	let tempMax = [];
	let tempMin = [];
	let weekDays = [];

	props.forecastData.forEach(function (dailyForecast, index) {
		let date = ConvertTime2Date(dailyForecast.time * 1000);
		tempMax[index] = dailyForecast.temperatureMax;
		tempMin[index] = dailyForecast.temperatureMin;
		weekDays[index] = date.weekDayShort;
	});

	let trace1 = {
		x: weekDays,
		y: tempMax,
		type: "scatter",
		name: "max.",
		line: {
			color: "#2B7EBA",
			width: 1,
		},
		mode: "lines+text",
		text: tempMax,
		textposition: "top center",
		textfont: {
			family: "Raleway, sans-serif",
			size: "16",
			color: "#10658e",
		},
	};

	let trace2 = {
		x: weekDays,
		y: tempMin,
		type: "scatter",
		name: "min.",
		line: {
			color: "#DB4052",
			width: 1,
		},
		mode: "lines+text",
		text: tempMin,
		textposition: "top center",
		textfont: {
			family: "Raleway, sans-serif",
			size: "16",
			color: "#bc3a47",
		},
	};

	let layout = {
		width: 750,
		height: 350,
		plot_bgcolor: "#c0deea",
		paper_bgcolor: "#c0deea",
		xaxis: {
			title: "Week Days",
			showgrid: false,
			zeroline: false,
		},
		yaxis: {
			title: "Temperature [°C]",
			showline: false,
			showticklabels: false,
			range: [
				Math.min.apply(Math, tempMin) - 5,
				Math.max.apply(Math, tempMax) + 5,
			],
		},
	};

	var data = [trace1, trace2];

	return <Plot data={data} layout={layout} />;
}
