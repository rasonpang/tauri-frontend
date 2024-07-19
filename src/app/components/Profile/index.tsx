import { loadAssets } from "@/data/helpers/preload";
import { onMount } from "solid-js";

import styles from "./style.module.css";
import PanelContainer from "../Container/PanelContainer";

const Profile = () => {
	let assets: any = {
		frame: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1098340/71f42ec23a7f80c365f0c3900a6e61bdc78733d7.png",
		me: "me.png",
	};

	onMount(async () => {
		assets = await loadAssets(assets);
	});

	return (
		<PanelContainer glowColor="rgba(0, 0, 200, 0.5)">
			<div class={styles.container}>
				<u id={styles.name}>Pang Sheng Wei</u>
				<div>123</div>
			</div>
		</PanelContainer>
	);
};

export default Profile;
