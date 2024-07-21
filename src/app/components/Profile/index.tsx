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
			<u id={styles.name}>Pang Sheng Wei</u>

			{/* Phone */}
			<div class="row center-y" style="gap: 1rem;">
				<img
					src="logos/general/phone.svg"
					width={30}
					height={30}
				></img>
				<a href="tel:0105016651">+6010-5016651</a>
			</div>

			{/* Email */}
			<div class="row center-y" style="gap: 1rem;">
				<img
					src="logos/general/email.svg"
					width={30}
					height={30}
				></img>
				<a href="mailto:pangshengwei99.work@gmail.com">
					pangshengwei99.work@gmail.com
				</a>
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
