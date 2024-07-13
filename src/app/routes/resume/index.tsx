import Title from "@/app/components/Title";
import styles from "./style.module.css";
import Background from "@/app/components/Background";
import FallingStars from "@/app/components/Background/Templates/FallingStars";

const ResumePage = () => {
	return (
		<div class={styles.container}>
			<section class="all-center">
				<Background>
					<FallingStars />
				</Background>
				<div class={styles.wrapper}>
					<div>
						<Title>Character Details</Title>

						<div>
							{/* Profile Picture */}
							<div
								class={
									styles.picture
								}
							>
								{/* <img src="star.svg" /> */}
							</div>

							{/* Details */}
							<div></div>
						</div>
					</div>

					<div>
						<Title>Skills</Title>
						{/* <div>JS</div> */}
					</div>

					<div>
						<Title>Experiences</Title>
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
