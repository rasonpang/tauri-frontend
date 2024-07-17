import SlideContainer from "@/app/components/Container/SlideContainer";
import styles from "./style.module.css";
import Profile from "@/app/components/Profile";

const ResumePage = () => {
	return (
		<div class={styles.container}>
			<section class="all-center">
				<SlideContainer>
					<Profile />
				</SlideContainer>
			</section>
			<section class="all-center">
				<SlideContainer>Second</SlideContainer>
			</section>
		</div>
	);
};

export default ResumePage;
