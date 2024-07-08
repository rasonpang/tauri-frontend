import Title from "@/app/components/Title";
import styles from "./style.module.css";

const ResumePage = () => {
	return (
		<div class={styles.container}>
			<section class="all-center">
				<div class={styles.wrapper}>
					<div>
						<Title>Character Details</Title>

						<div class={styles.picture}>
							{/* <img src="me.jpg" /> */}
						</div>
					</div>

					<div>
						<Title>Skills</Title>
						<div>JS</div>
					</div>

					<div>
						<Title>Experience</Title>
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
