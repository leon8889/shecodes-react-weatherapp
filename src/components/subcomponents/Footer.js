import React from "react";

import ConvertTime2Date from "./ConvertTime2Date";

import "./Footer.css";

export default function Footer(props) {
	let date = ConvertTime2Date(props.time * 1000);
	let dateString = `${date.weekDay}, ${date.month} ${date.day} ${date.hours}:${date.minutes}`;
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
					<p className="currentDate">{dateString}</p>
				</div>
			</div>
		</div>
	);
}
