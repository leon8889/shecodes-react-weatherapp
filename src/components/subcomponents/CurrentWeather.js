import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
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
						<WeatherTemperature temperature={props.weatherData.temperature} />
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
