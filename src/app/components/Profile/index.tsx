import LanguageCardGrid from "./LanguageCardGrid";
import InfoCard from "./InfoCard";
import styles from "./style.module.css";

import me from "@/data/constants/me.json";
import Background from "../Background";

const Profile = () => {
	const programmingLanguages = me.programming_languages;

	return (
		<div class={`${styles.container} column center-x`}>
			<Background style="background-color: rgb(4, 0, 24); position: absolute;" />
			{/* Information Card */}
			<div class="center" style="margin: 2rem 0;">
				<InfoCard />
			</div>

			{/* Skills */}
			<div class="center">
				<LanguageCardGrid
					languages={programmingLanguages}
				/>
			</div>
		</div>
	);
};

export default Profile;
