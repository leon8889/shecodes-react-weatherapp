import "./CurrentCity.css";

export default function CurrentCity(props) {
	return (
		<div className="CurrentCity">
			<div className="row">
				<div className="col">
					<p>
						Weather in <span className="CityName">{props.CityName}</span>
					</p>
				</div>
				<div className="col text-right">
					<button className="btn btn-link" id="CurrentLocation">
						<span
							title="find weather at current location"
							role="img"
							aria-label="geolocation"
						>
							🚩
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
