import styles from "./style.module.css";

const AeonCreditPage = () => {
	return (
		<div class={`center ${styles.container}`}>
			<div class={`${styles.content} center`}>
				<div class={styles.side_image_wrapper}>
					<img
						class={styles.side_image}
						src="https://roms.aeoncredit.com.my/ACSMEnrollmentWeb/assets/images/landing.svg"
					/>
				</div>
				<div
					class={`center-y ${styles.content_wrapper}`}
				>
					<div>
						<h1
							class={`title ${styles.title}`}
						>
							AEON Credit Micro
							Financing
						</h1>
						<b>
							RM 5,000 finance amount
							& 24 months instalment
							period.
						</b>
						<b>Hassel-free application!</b>
					</div>

					<div class={styles.eligibility}>
						<div
							class={
								styles.eligibility_wrapper
							}
						>
							<div>
								You're eligible
								to apply if:
							</div>
							<ul>
								<li>
									You are
									18 years
									old or
									above
								</li>
								<li>
									Your
									gross
									monthly
									income
									is
									RM1,500
									or above
								</li>
								<li>
									Self
									employed
									with 1
									year in
									business
								</li>
							</ul>
						</div>
					</div>

					<span class={styles.buttons_wrapper}>
						<a
							class="center"
							href="/aeon-credit/application"
						>
							Resume Application
						</a>
						<a
							class={`${styles.filled_button} center`}
							href="/aeon-credit/loan-detail"
						>
							Let's Begin
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default AeonCreditPage;
