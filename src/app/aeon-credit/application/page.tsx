import Form from "@/components/Form";
import styles from "./style.module.css";

const AeonApplicationPage = () => {
	const fields = [
		{ name: "nric" },
		{ name: "mobile" },
		{ name: "email" },
	];
	const onSubmit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<div className={`${styles.page} center`}>
			<div className={styles.container}>
				<div>
					<h1 className={`title ${styles.title}`}>
						Resume Your Application
					</h1>
					<b>
						Hi, welcome back! Please provide
						your details to resume your
						application
					</b>
				</div>

				{/* Form */}
				<Form onSubmit={onSubmit} fields={fields}>
					<span className={styles.form}>
						<div
							className={
								styles.form_field
							}
						>
							<span className="field-compulsory">
								NRIC Number
							</span>
							<input
								name="nric"
								placeholder="Enter NRIC Number"
							/>
						</div>

						<div
							className={
								styles.form_field
							}
						>
							<span className="field-compulsory">
								Mobile Number
							</span>
							<input
								name="mobile"
								placeholder="Enter Mobile Number"
							/>
						</div>

						<div
							className={
								styles.form_field
							}
						>
							<span className="field-compulsory">
								Email Address
							</span>
							<input
								name="email"
								placeholder="e.g. myname@email.com"
							/>
						</div>
					</span>

					<hr />

					<div>
						<span
							className={
								styles.buttons_wrapper
							}
						>
							<a
								className="center"
								href="/aeon-credit"
							>
								Back
							</a>
							<button
								className={`${styles.filled_button} center`}
								type="submit"
							>
								Proceed
							</button>
						</span>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default AeonApplicationPage;
