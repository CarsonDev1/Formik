import { useState } from "react";
import "./signup.css";
const SignupForm = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");
	return <>Sign up Form</>;
};

export default SignupForm;
