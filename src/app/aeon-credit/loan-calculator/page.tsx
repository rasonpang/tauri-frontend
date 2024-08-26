import { useState } from "react";
import styles from "./style.module.css";

import Form from "@/components/Form";

const LoanCalculatorPage = () => {
	const fields = [
		{ name: "amount" },
		{ name: "period" },
		{ name: "promo_code" },
		{ name: "purpose" },
	];

	const periodOptions = [
		{ value: "6", label: "6 months" },
		{ value: "9", label: "9 months" },
		{ value: "12", label: "12 months" },
		{ value: "15", label: "15 months" },
		{ value: "18", label: "18 months" },
		{ value: "24", label: "24 months" },
	];

	const purposeOptions = [
		{ value: "business", label: "Business" },
		{ value: "computer_and_gadget", label: "Computer & Gadget" },
		{ value: "debt_consolidation", label: "Debt Consolidation" },
		{ value: "education", label: "Education" },
		{ value: "family_matter", label: "Family Matter" },
		{ value: "holiday", label: "Holiday" },
		{ value: "home_improvement", label: "Home Improvement" },
		{ value: "investment", label: "Investment" },
		{ value: "medical", label: "Medical" },
		{
			value: "repair_and_maintenance",
			label: "Repair & Maintenance",
		},
		{ value: "vehicle", label: "Vehicle" },
		{ value: "wedding", label: "Wedding" },
	];

	const [formFields, setFormFields] = useState({
		amount: 1000,
		period: 6,
	});

	const onSubmit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<div className={`${styles.page} center`}>
			<div className={styles.container}>
				<div></div>
				<div className={styles.gap}>
					<h1 className={`title ${styles.title}`}>
						How much are you looking to
						borrow?
					</h1>

					{/* Form */}
					<Form
						onSubmit={onSubmit}
						fields={fields}
					>
						<div className={styles.gap}>
							<div
								className={`${styles.gap} ${styles.calculator_wrapper}`}
							>
								{/* Form */}
								<div
									className={`${styles.gap} ${styles.rate_calculator_value_wrapper}`}
								>
									<div
										className={
											styles.form_field
										}
									>
										<span className="field-compulsory">
											Financing
											Amount
											(RM)
										</span>
										<input
											name="amount"
											type="number"
											placeholder="Enter Financing Amount (RM)"
											value={
												formFields.amount
											}
											onChange={(
												e
											) =>
												setFormFields(
													(
														prev
													) => {
														prev[
															"amount"
														] =
															Number(
																e
																	.currentTarget
																	.value
															);
														return prev;
													}
												)
											}
											min={
												1000
											}
										/>
									</div>

									<div
										className={
											styles.form_field
										}
									>
										<span className="field-compulsory">
											Installment
											Period
										</span>
										<select name="period">
											{periodOptions.map(
												(
													i,
													key
												) => (
													<option
														value={
															i.value
														}
														key={
															key
														}
													>
														{
															i.label
														}
													</option>
												)
											)}
										</select>
									</div>
								</div>

								{/* Rate Calculator */}
								<div
									className={`${styles.rate_calculator_wrapper} ${styles.gap}`}
								>
									<div
										className={`${styles.rate_calculator} center`}
									>
										<div
											className={
												styles.gap
											}
											style={{
												padding: "1rem",
											}}
										>
											<span
												className={
													styles.gap
												}
											>
												<div>
													<div
														className={
															styles.value
														}
													>
														RM
														{
															formFields.amount
														}
													</div>
													<div
														className={
															styles.value_label
														}
													>
														Monthly
														Installment
													</div>
												</div>

												<div>
													<div
														className={
															styles.value
														}
													>
														1.8
														%
													</div>
													<div
														className={
															styles.value_label
														}
													>
														Monthly
														Profit
														Rate
													</div>
												</div>
											</span>

											<div
												className={
													styles.value_description
												}
											>
												View
												installment
												rates
												here
											</div>
										</div>
									</div>
									<i
										className={
											styles.description
										}
									>
										*Profit
										Rate
										will
										change
										as
										per
										scoring
										result.
									</i>
								</div>
							</div>

							<div
								className={
									styles.form_field
								}
							>
								<span className="field-compulsory">
									Enter
									your
									promo
									code
								</span>
								<input
									name="promo_code"
									placeholder="Enter Promo Code"
									value={
										"PFMICRO-001"
									}
									disabled
								/>
							</div>

							<div
								className={
									styles.form_field
								}
							>
								<span className="field-compulsory">
									Purpose
									of
									Financing
								</span>
								<select
									name="purpose"
									value={
										""
									}
								>
									<option
										selected
										disabled
										hidden
										value={
											""
										}
									>
										Select...
									</option>
									{purposeOptions.map(
										(
											i,
											key
										) => (
											<option
												value={
													i.value
												}
												key={
													key
												}
											>
												{
													i.label
												}
											</option>
										)
									)}
								</select>
							</div>
						</div>

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
		</div>
	);
};

export default LoanCalculatorPage;
