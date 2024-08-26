import styles from "./style.module.css";
import me from "@/data/constants/me.json";

import SlideContainer from "../../Container/SlideContainer";

const AboutSchool = () => {
	return (
		<SlideContainer from="left">
			<div className={styles.container}>
				{/* Title */}
				<div
					className={`${styles.side_title_wrapper} center`}
				>
					<div
						className={`title ${styles.side_title}`}
					>
						Academy
					</div>
				</div>

				{/* Image */}
				<div className={styles.icon_wrapper}>
					<img src="school.jpg"></img>
				</div>

				<div className={styles.text_wrapper}>
					{/* School Name */}
					<div className={styles.school_name}>
						{me.education.schoolName}
					</div>

					{/* Course */}
					<div className={styles.subtitle}>
						Course studied:
					</div>
					<div className={styles.certificate}>
						<div
							className={
								styles.level_of_certificate
							}
						>
							{
								me.education
									.certificate
							}
						</div>
						<div
							className={
								styles.course_name
							}
						>
							{me.education.course}
						</div>
					</div>

					{/* Skills */}
					<div className={styles.subtitle}>
						Programming Languages learnt:
					</div>
					<span className={styles.skill_wrapper}>
						{me.education.skills.map(
							(item, key) => (
								<div key={key}>
									{item}
								</div>
							)
						)}
					</span>
				</div>
			</div>
		</SlideContainer>
	);
};

export default AboutSchool;
