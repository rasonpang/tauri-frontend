import Form from "@/app/components/Form";
import styles from "./style.module.css";
import { createSignal } from "solid-js";

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

	const [formFields, setFormFields] = createSignal(
		{
			amount: 1000,
			period: 6,
		},
		{ equals: false }
	);

	const onSubmit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<div class={`${styles.page} center`}>
			<div class={styles.container}>
				<div></div>
				<div class={styles.gap}>
					<h1 class={`title ${styles.title}`}>
						How much are you looking to
						borrow?
					</h1>

					{/* Form */}
					<Form
						onSubmit={onSubmit}
						fields={fields}
					>
						<div class={styles.gap}>
							<div
								class={`${styles.gap} ${styles.calculator_wrapper}`}
							>
								{/* Form */}
								<div
									class={`${styles.gap} ${styles.rate_calculator_value_wrapper}`}
								>
									<div
										class={
											styles.form_field
										}
									>
										<span class="field-compulsory">
											Financing
											Amount
											(RM)
										</span>
										<input
											name="amount"
											type="number"
											placeholder="Enter Financing Amount (RM)"
											value={
												formFields()
													.amount
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
										class={
											styles.form_field
										}
									>
										<span class="field-compulsory">
											Installment
											Period
										</span>
										<select name="period">
											{periodOptions.map(
												(
													i
												) => (
													<option
														value={
															i.value
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
									class={`${styles.rate_calculator_wrapper} ${styles.gap}`}
								>
									<div
										class={`${styles.rate_calculator} center`}
									>
										<div
											class={
												styles.gap
											}
											style="padding: 1rem"
										>
											<span
												class={
													styles.gap
												}
											>
												<div>
													<div
														class={
															styles.value
														}
													>
														RM
														{
															formFields()
																.amount
														}
													</div>
													<div
														class={
															styles.value_label
														}
													>
														Monthly
														Installment
													</div>
												</div>

												<div>
													<div
														class={
															styles.value
														}
													>
														1.8
														%
													</div>
													<div
														class={
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
												class={
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
										class={
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
								class={
									styles.form_field
								}
							>
								<span class="field-compulsory">
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
								class={
									styles.form_field
								}
							>
								<span class="field-compulsory">
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
											i
										) => (
											<option
												value={
													i.value
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
		</div>
	);
};

export default LoanCalculatorPage;
