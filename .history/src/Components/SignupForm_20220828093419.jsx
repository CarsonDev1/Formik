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
				<label> Your name </label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
				/>
				<label> Email Address </label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
				/>
				<label> Password </label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Enter your password"
				/>
				<label> Confirm Password </label>
				<input
					type="password"
					id="confirmedpassword"
					name="confirmedpassword"
					placeholder="Confirm your password"
				/>
				<label> Phone number </label>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="Enter your phone numbers"
				/>
			</form>
		</section>
	);
};

export default SignupForm;
