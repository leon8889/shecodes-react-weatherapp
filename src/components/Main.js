import "./Main.css";
import CurrentCity from "./subcomponents/CurrentCity.js";
import CurrentWeather from "./subcomponents/CurrentWeather.js";
import Forcast from "./subcomponents/Forcast.js";

export default function Main(props) {
	return (
		<div className="Main">
			<CurrentCity CityName={props.currentCityName} />

			<CurrentWeather
				description={props.description}
				temperature={props.temperature}
				humidity={props.humidity}
				wind={props.wind}
				emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
			/>
			<hr />
			<Forcast />
		</div>
	);
}
