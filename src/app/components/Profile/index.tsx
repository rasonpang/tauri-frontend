import TiltCard from "../Container/TiltCard";
import InfoCard from "./InfoCard";
import styles from "./style.module.css";

const Profile = () => {
	// Soft Skill
	const softSkillList = [
		"Time Management",
		"Communication",
		"Problem Solving",
		"Adaptability",
		"Team Work",
	];

	// Technical Skill
	const skillLogoPath = "logos/programming/";
	const skillLogoList = [
		"go.svg",
		"js.svg",
		"php.svg",
		"python.svg",
		"ts.svg",
	];

	// Languages
	const languages = {
		english: 10,
		chinese: 10,
		melayu: 6,
	};

	return (
		<div class={styles.container}>
			{/* Information Card */}
			<div class="center" style="margin: 2rem 0;">
				<InfoCard />
			</div>

			{/* Skills */}
			<div>
				<div>Skills</div>
				{skillLogoList.map((path) => (
					<img
						class={styles.skill_logo}
						src={skillLogoPath + path}
					/>
				))}
			</div>
		</div>
	);
};

export default Profile;
