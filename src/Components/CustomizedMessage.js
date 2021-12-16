
import { Card } from "react-bootstrap";

export default function CustomizeMessage({
	email,
	setEmail,
	greeting,
	setGreeting,
	body,
	setBody,
	closing,
	setClosing,
	setPreview,
	setCustomize,
}) {
	const onSubmit = (event) => {
		event.preventDefault();
		setPreview(true);
		setCustomize(false);
	};

	return (
		<div className="App-header">
			<Card className="App-card" type="submit">
				<Card.Body>
					<br />
					<Card.Title
						style={{
							padding: "15px",
							fontSize: "24px",
							color: "#FFF",
							backgroundColor: "#000",
						}}
					>
						Happy Holiday
					</Card.Title>
					<br />
					

					<Card.Text
						style={{
							padding: "5px",
							fontSize: "14px",
							color: "#FFF",
							backgroundColor: "#000",
						}}
					>
						<p>
							<strong>How to Reshare:</strong>
							<br />
							Write your own custom message below.
						</p>
					</Card.Text>
					<form className="form-wrap">
						<div className="App-form">
							<label htmlFor="email">Recipient Email</label>
							<input
								name="email"
								id="email"
								type="text"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								placeholder="Recipient Email"
							/>
						</div>

						<div>
							<label htmlFor="greeting">Greeting</label>
							<input
								name="greeting"
								id="greeting"
								type="text"
								value={greeting}
								onChange={(event) => setGreeting(event.target.value)}
								placeholder="Greeting"
							/>
						</div>

						<div>
							<label htmlFor="body">Body</label>
							<textarea
								name="body"
								id="body"
								value={body}
								onChange={(event) => setBody(event.target.value)}
								placeholder="Body"
								rows="3"
							></textarea>
						</div>

						<div>
							<label htmlFor="closing">Closing</label>
							<input
								name="closing"
								id="closing"
								type="text"
								value={closing}
								onChange={(event) => setClosing(event.target.value)}
								placeholder="Closing"
							/>
						</div>

						<button
							style={{
								fontSize: "24px",
								color: "#FFF",
								backgroundColor: "#000",
							}}
							type="submit"
							onClick={onSubmit}
						>
							Preview Greeting Card
						</button>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
}
