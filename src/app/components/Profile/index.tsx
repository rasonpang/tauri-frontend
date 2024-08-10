import styles from "./style.module.css";

import AboutSchool from "./AboutSchool";
import InfoCard from "./InfoCard";
import Timeline from "./Timeline";

const Profile = (props: any) => {
	return (
		<span class={`${styles.container} center-x`}>
			<div class={`${styles.main} container`}>
				{/* Information Card */}
				<span class="center-x">
					<InfoCard />
				</span>

				<hr style={{ width: "100%" }} />
				{/* School */}
				<div>
					<AboutSchool />
				</div>

				<hr style={{ width: "100%" }} />
				{/* Work Experience */}
				<Timeline setNavList={props.setNavList} />
			</div>
		</span>
	);
};

export default Profile;
