import InfoCard from "./InfoCard";
import styles from "./style.module.css";

const Profile = () => {
	return (
		<span class={`${styles.container} center-x`}>
			<div class={`${styles.main} container`}>
				{/* Information Card */}
				<span class="center-x">
					<InfoCard />
				</span>

				{/* School */}
				<div>
					<div>
						New Era Institute of Vocational
						& Continuing Education
					</div>
					<img src="school.png"></img>
				</div>
			</div>
		</span>
	);
};

export default Profile;
