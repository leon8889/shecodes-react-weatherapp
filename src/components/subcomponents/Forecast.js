import "./Forecast.css";
import ForecastDay from "./ForecastDay.js";

export default function Forecast() {
	return (
		<div className="Forecast">
			<div className="row">
				<ForecastDay
					date="Nov. 4"
					weekDay="today"
					temperatureMax={15}
					temperatureMin={10}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForecastDay
					date="Nov. 5"
					weekDay="Sunday"
					temperatureMax={16}
					temperatureMin={11}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForecastDay
					date="Nov. 6"
					weekDay="Monday"
					temperatureMax={14}
					temperatureMin={8}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForecastDay
					date="Nov. 7"
					weekDay="Tuesday"
					temperatureMax={8}
					temperatureMin={-1}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForecastDay
					date="Nov. 8"
					weekDay="Wednesday"
					temperatureMax={20}
					temperatureMin={15}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
			</div>
		</div>
	);
}
