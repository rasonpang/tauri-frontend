import styles from "./style.module.css";

const ResumePage = () => {
	return (
		<div class={styles.container}>
			<section class="all-center">
				<div class={styles.wrapper}>
					<div>
						<div>Character Details</div>
						<div class={styles.picture}>
							<img src="me.jpg" />
						</div>
					</div>

					<div>
						<div>Skills</div>
						<div>JS</div>
					</div>
				</div>
			</section>
			<section class="x-center">
				<div>Abc</div>
			</section>
		</div>
	);
};

export default ResumePage;
