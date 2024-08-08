import InfoCard from "./InfoCard";
import styles from "./style.module.css";

const Profile = () => {
	return (
		<div class={styles.container}>
			<div class={styles.main}>
				{/* Information Card */}
				<span class="center-x">
					<InfoCard />
				</span>

				{/* Experience */}
				<span>Experience</span>
			</div>
		</div>
	);
};

export default Profile;
