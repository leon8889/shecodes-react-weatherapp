import WeatherIcon from "./WeatherIcon.js";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col">
					<p>
						<WeatherIcon
							emojiURL={props.weatherData.emojiURL}
							description={props.weatherData.description}
						/>
						<span>{props.weatherData.temperature}</span>
						<span className="units">°C</span>
					</p>
				</div>
				<div className="col">
					<ul>
						<li>
							<span>{props.weatherData.description}</span>
						</li>
						<li>
							Humidity: <span>{props.weatherData.humidity}</span>%
						</li>
						<li>
							Wind: <span>{props.weatherData.wind}</span> km/h
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
