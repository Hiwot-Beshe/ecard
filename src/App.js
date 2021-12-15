
import "./App.css";
import TextEditer from "./Components/TextEditer";
import { useState } from "react";

function App() {
	const query = new URLSearchParams(window.location.search);
	const [email, setEmail] = useState("");
	const [importedGreeting, setImportedGreeting] = useState(
		query.get("greeting") || "Dear Mom,"
	);
	const [importedBody, setImportedBody] = useState(
		query.get("body") || "Have a comforting and joyous holiday!"
	);
	const [importedClosing, setImportedClosing] = useState(
		query.get("closing") || "Love, your son Juan"
	);
	const [customize, setCustomize] = useState(false);
	const [preview, setPreview] = useState(false);
	return (
		<div className="App">
			<div>
				<did>
					<TextEditer
						email={email}
						setEmail={setEmail}
						greeting={importedGreeting}
						setGreeting={setImportedGreeting}
						body={importedBody}
						setBody={setImportedBody}
						closing={importedClosing}
						setClosing={setImportedClosing}
						setPreview={setPreview}
						setCustomize={setCustomize}
					/>
				</did>
			</div>
		</div>
	);
}

export default App;
