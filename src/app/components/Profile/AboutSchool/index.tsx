import styles from "./style.module.css";
import me from "@/data/constants/me.json";

import SlideContainer from "../../Container/SlideContainer";
import { For } from "solid-js";

const AboutSchool = () => {
	return (
		<SlideContainer from="left">
			<div class={styles.container}>
				{/* Title */}
				<div
					class={`${styles.side_title_wrapper} center`}
				>
					<div
						class={`title ${styles.side_title}`}
					>
						Academy
					</div>
				</div>

				{/* Image */}
				<div class={styles.icon_wrapper}>
					<img src="school.jpg"></img>
				</div>

				<div class={styles.text_wrapper}>
					{/* School Name */}
					<div class={styles.school_name}>
						{me.education.schoolName}
					</div>

					{/* Course */}
					<div class={styles.subtitle}>
						Course studied:
					</div>
					<div class={styles.certificate}>
						<div
							class={
								styles.level_of_certificate
							}
						>
							{
								me.education
									.certificate
							}
						</div>
						<div class={styles.course_name}>
							{me.education.course}
						</div>
					</div>

					{/* Skills */}
					<div class={styles.subtitle}>
						Programming Languages learnt:
					</div>
					<span class={styles.skill_wrapper}>
						<For each={me.education.skills}>
							{(item) => {
								return (
									<div>
										{
											item
										}
									</div>
								);
							}}
						</For>
					</span>
				</div>
			</div>
		</SlideContainer>
	);
};

export default AboutSchool;
