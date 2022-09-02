import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
const SignupForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			phone: "",
			password: "",
			confirmedPassword: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Required")
				.min(4, "Must be 4 characters or more"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<section>
			<form className="infoform" onSubmit={formik.handleSubmit}>
				<label> Your name </label>
				<input
					type="text"
					id="name"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					placeholder="Enter your name"
				/>
				<label> Email Address </label>
				<input
					type="email"
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder="Enter your email"
				/>
				<label> Password </label>
				<input
					type="password"
					id="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder="Enter your password"
				/>
				<label> Confirm Password </label>
				<input
					type="password"
					id="confirmedPassword"
					name="confirmedPassword"
					value={formik.values.confirmedPassword}
					onChange={formik.handleChange}
					placeholder="Confirm your password"
				/>
				<label> Phone number </label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					placeholder="Enter your phone numbers"
				/>
				<button type="submit"> Continue </button>
			</form>
		</section>
	);
};

export default SignupForm;
