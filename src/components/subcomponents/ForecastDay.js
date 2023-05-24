import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
	return (
		<div className="col ForecastDay">
			<div>{props.date}</div>
			<div className="weekDay">{props.weekDay}</div>
			<div className="temperature temperatureMax">
				<span className="temperatureLabel">max. </span>
				<span className="temperatureValue">{props.temperatureMax}</span>
				<span>°C</span>
			</div>
			<div className="temperature temperatureMin">
				<span className="temperatureLabel">min. </span>
				<span className="temperatureValue">{props.temperatureMin}</span>
				<span>°C</span>
			</div>
			<div className="emoji">
				<WeatherIcon
					emojiURL={props.emojiURL}
					description={props.description}
				/>
			</div>
		</div>
	);
}
