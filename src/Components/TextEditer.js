// import { useState } from "react";
// import EdiText from "react-editext";
import { EmailShareButton, EmailIcon } from "react-share";
import { Card } from "react-bootstrap";
import logo from "../assets/newYear.jpg";
import { EditText, EditTextarea } from "react-edit-text";

function TextEditer() {
	return (
		<div className="App-header">
			<Card className="App-card">
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
						<img src={logo} className="App-logo" alt="logo" />
					</Card.Subtitle>
					<Card.Text>To customize your message, click the text</Card.Text>
					<Card.Text>
						<EditText
							
							style={{
								padding: "10px",
								fontSize: "24px",
								color: "#FFF",
								backgroundColor: "#000",
							}}
							defaultValue="Dear Mom"
						/>
					</Card.Text>
					<Card.Text>
						<br />
						<EditTextarea placeholder="It’s the most wonderful time of the year…and you’re the most wonderful mom." />
					</Card.Text>
					<Card.Text>
						<br />
						<EditText
							
							style={{
								padding: "15px",
								fontSize: "24px",
								color: "#FFF",
								backgroundColor: "#000",
							}}
							defaultValue=" Yours Hiwot"
						/>
					</Card.Text>
				</Card.Body>
			</Card>

			<div>
				<EmailShareButton
					subject="e-card"
					body={"This is my Holiday card for you."}
					url="http://Hiwot-Beshe.github.io/ecard/"
				>
					<EmailIcon size={40} round />
				</EmailShareButton>
			</div>
		</div>
	);
}

export default TextEditer;
