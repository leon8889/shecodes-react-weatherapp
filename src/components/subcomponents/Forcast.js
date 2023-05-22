import "./Forcast.css";
import ForcastDay from "./ForcastDay.js";

export default function Forcast() {
	return (
		<div className="Forcast">
			<div className="row">
				<ForcastDay
					date="Nov. 4"
					weekDay="today"
					temperatureMax={15}
					temperatureMin={10}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForcastDay
					date="Nov. 5"
					weekDay="Sunday"
					temperatureMax={16}
					temperatureMin={11}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForcastDay
					date="Nov. 6"
					weekDay="Monday"
					temperatureMax={14}
					temperatureMin={8}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForcastDay
					date="Nov. 7"
					weekDay="Tuesday"
					temperatureMax={8}
					temperatureMin={-1}
					emojiURL="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
				/>
				<ForcastDay
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
