import "./CurrentWeather.css";

export default function CurrentWeather(props) {
	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col">
					<p>
						<img src={props.emojiURL} alt="Weather Icon" />
						<span>{props.temperature}</span>
						<span className="units">°C</span>
					</p>
				</div>
				<div className="col">
					<ul>
						<li>
							<span>{props.description}</span>
						</li>
						<li>
							Humidity: <span>{props.humidity}</span>%
						</li>
						<li>
							Wind: <span>{props.wind}</span> km/h
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
