import Form from "@/app/components/Form";
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
		<div class={`${styles.page} center`}>
			<div class={styles.container}>
				<div>
					<h1 class={`title ${styles.title}`}>
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
					<span class={styles.form}>
						<div class={styles.form_field}>
							<span class="field-compulsory">
								NRIC Number
							</span>
							<input
								name="nric"
								placeholder="Enter NRIC Number"
							/>
						</div>

						<div class={styles.form_field}>
							<span class="field-compulsory">
								Mobile Number
							</span>
							<input
								name="mobile"
								placeholder="Enter Mobile Number"
							/>
						</div>

						<div class={styles.form_field}>
							<span class="field-compulsory">
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
							class={
								styles.buttons_wrapper
							}
						>
							<a
								class="center"
								href="/aeon-credit"
							>
								Back
							</a>
							<button
								class={`${styles.filled_button} center`}
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
