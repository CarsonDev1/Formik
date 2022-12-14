import { useState } from "react";
import "./signup.css";
const SignupForm = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			email: email,
			name: name,
			phone: phone,
			password: password,
		};
	};
	return (
		<section>
			<form className="infoform" onSubmit={handleSubmit}>
				<label> Your name </label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter your name"
				/>
				<label> Email Address </label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
				/>
				<label> Password </label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
				/>
				<label> Confirm Password </label>
				<input
					type="password"
					id="confirmedpassword"
					name="confirmedpassword"
					onChange={(e) => setConfirmedPassword(e.target.value)}
					placeholder="Confirm your password"
				/>
				<label> Phone number </label>
				<input
					type="text"
					id="phone"
					name="phone"
					onChange={(e) => setPhone(e.target.value)}
					placeholder="Enter your phone numbers"
				/>
				<button type="submit"> Continue </button>
			</form>
		</section>
	);
};

export default SignupForm;
