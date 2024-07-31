import styles from "./style.module.css";

import InfoCard from "./InfoCard";
import Background from "../Background";
import Timeline from "./Timeline";

const Profile = () => {
	return (
		<div class={`${styles.container} column`}>
			<Background style="background-color: rgb(36, 27, 79); position: absolute;" />
			{/* Information Card */}
			<div class="center" style="margin: 2rem 0;">
				<InfoCard />
			</div>

			{/* History + Skills */}
			<div>
				<Timeline />
			</div>
		</div>
	);
};

export default Profile;
