import styles from "./style.module.css";

import AboutSchool from "./AboutSchool";
import InfoCard from "./InfoCard";
import Timeline from "./Timeline";

const Profile = (props: any) => {
	return (
		<span className={`${styles.container} center-x`}>
			<div className={`${styles.main} container`}>
				{/* Information Card */}
				<span className="center-x">
					<InfoCard />
				</span>

				<hr />
				{/* School */}
				<div>
					<AboutSchool />
				</div>

				<hr />
				{/* Work Experience */}
				<Timeline setNavList={props.setNavList} />
			</div>
		</span>
	);
};

export default Profile;
