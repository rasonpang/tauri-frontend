import SlideContainer from "@/app/components/Container/SlideContainer";
import styles from "./style.module.css";
import Profile from "@/app/components/Profile";
import Background from "@/app/components/Background";
import Marquee from "@/app/components/Marquee";

const ResumePage = () => {
	return (
		<div class={styles.container}>
			<section class="center overflow-hidden">
				<Background>
					<div
						id={styles.marquee_1}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_2}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_3}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
				</Background>
				<Profile />
			</section>
			<section class="center">
				<SlideContainer>Second</SlideContainer>
			</section>
		</div>
	);
};

export default ResumePage;
