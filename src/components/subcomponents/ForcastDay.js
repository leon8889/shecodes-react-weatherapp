export default function ForcastDay(props) {
	return (
		<div className="col ForcastDay">
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
				<img src={props.emojiURL} alt="Weather Icon" />
			</div>
		</div>
	);
}
