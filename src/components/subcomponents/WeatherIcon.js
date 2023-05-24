export default function WeatherIcon(props) {
	let imageDescription = `Weather icon of ${props.description}`;

	return <img src={props.emojiURL} alt={imageDescription} />;
}
