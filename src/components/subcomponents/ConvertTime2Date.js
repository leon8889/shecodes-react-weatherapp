// import React from "react";

export default function ConvertTime2Date(timestamp) {
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
