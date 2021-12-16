import newYear from "../assets/newYear.jpg";
import "../App.css";
import { Card } from "react-bootstrap";


function GreetingCard({
	email,
	greeting,
	body,
	closing,
	setCustomize,
	preview,
	setPreview,
}) {
	const continueEditing = () => {
		setCustomize(true);
		setPreview(false);
	};

	const sendEcard = () => {
		let mailto = `mailto:${email}`;
		mailto += "?subject=E-Card";
		mailto += "&body=You have received an e-greeting card.";
		mailto += "%0D%0A%0D%0A";
		mailto += "Go To Greeting Card";
		mailto += "%0D%0A";

		let url = "http://Hiwot-Beshe.github.io/ecard/";
		url += `?greeting=${encodeURIComponent(greeting)}`;
		url += `&body=${encodeURIComponent(body)}`;
		url += `&closing=${encodeURIComponent(closing)}`;

		mailto += encodeURIComponent(url);

		window.open(mailto);
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
					<Card.Subtitle className="mb-2 text-muted">
						<img src={newYear} className="App-logo" alt="logo" />
					</Card.Subtitle>
					<Card.Text style={{
							padding: "5px",
							fontSize: "14px",
							color: "#FFF",
							backgroundColor: "#000",
						}}>To customize your message, click the button</Card.Text>

					<Card.Text>
						<br />
						<p className="script">{greeting}</p>
					</Card.Text>
					<Card.Text>
						<br />
						<p className="script">{body}</p>
					</Card.Text>
					<Card.Text>
						<br />
						<p className="script">{closing}</p>
					</Card.Text>
				</Card.Body>
			</Card>
			<div
				style={{
					flexDirection: "row",
					paddingRight: "5%",
				}}
			>
				{preview ? (
					<div>
						<br />
						<button
							style={{
								marginRight: "5px",
								fontSize: "24px",
								color: "#FFF",
								backgroundColor: "#000",
							}}
							onClick={continueEditing}
						>
							Continue Editing
						</button>

						<button
							style={{
								fontSize: "24px",
								color: "#FFF",
								backgroundColor: "#000",
							}}
							onClick={sendEcard}
						>
							Send E-Card
						</button>

						
					</div>
				) : (
					<button
						style={{
							marginTop:"5px",
							fontSize: "24px",
							color: "#FFF",
							backgroundColor: "#000",
						}}
						onClick={() => setCustomize(true)}
					>
						Reshare This Card
					</button>
				)}
			</div>
		</div>
	);
}

export default GreetingCard;
