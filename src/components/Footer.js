import "./Footer.css";

export default function Footer(props) {
	return (
		<div className="Footer" id="footer">
			<div className="row">
				<div className="col">
					<p>
						<a
							href="https://github.com/leon8889/shecodes-react-weatherapp"
							target="_blank"
							rel="noreferrer"
						>
							Source code
						</a>{" "}
						by leon8889
					</p>
				</div>
				<div className="col">
					<p className="currentDate">{props.currentDate}</p>
				</div>
			</div>
		</div>
	);
}
