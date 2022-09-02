import { useState } from "react";
import "./signup.css";
const SignupForm = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");
	return (
		<section>
			<form className="infoform">
				<label>Your name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
				/>
			</form>
		</section>
	);
};

export default SignupForm;
