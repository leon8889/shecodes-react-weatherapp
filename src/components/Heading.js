import "./Heading.css";

export default function Heading() {
	return (
		<div className="Heading">
			<div className="row">
				<div className="col">
					<h1>my Weather</h1>
				</div>
				<div className="col align-self-end">
					<form action="" id="searchForm">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="get your weather in ..."
								id="citySearch"
								aria-label="City Search"
								aria-describedby="basic-addon2"
							/>
							<div className="input-group-append">
								<button
									className="btn btn-outline-secondary"
									type="submit"
									id="citySearchButton"
								>
									<img
										id="searchIcon"
										src="./images/search.svg"
										alt="Go"
										width="20"
									/>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
