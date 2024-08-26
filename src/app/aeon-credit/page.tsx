import styles from "./style.module.css";

const AeonCreditPage = () => {
	return (
		<div className={`center ${styles.container}`}>
			<div className={`${styles.content} center`}>
				<div className={styles.side_image_wrapper}>
					<img
						className={styles.side_image}
						src="https://roms.aeoncredit.com.my/ACSMEnrollmentWeb/assets/images/landing.svg"
					/>
				</div>
				<div
					className={`center-y ${styles.content_wrapper}`}
				>
					<div>
						<h1
							className={`title ${styles.title}`}
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

					<div className={styles.eligibility}>
						<div
							className={
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

					<span
						className={
							styles.buttons_wrapper
						}
					>
						<a
							className="center"
							href="/aeon-credit/application"
						>
							Resume Application
						</a>
						<a
							className={`${styles.filled_button} center`}
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
