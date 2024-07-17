import { loadAssets } from "@/data/helpers/preload";
import { onMount } from "solid-js";

import styles from "./style.module.css";
import PictureFrame from "../PictureFrame";

const Profile = () => {
	let assets: any = {
		frame: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1098340/71f42ec23a7f80c365f0c3900a6e61bdc78733d7.png",
		me: "me.png",
	};

	onMount(async () => {
		assets = await loadAssets(assets);
	});

	return (
		<div class={`${styles.container} all-center`}>
			<div class="row all-fit">
				<div class={styles.sidebar}>
					<div
						class="row y-center"
						style={{ gap: "20px" }}
					>
						<div>
							<PictureFrame
								src={
									assets.frame
								}
							>
								<img
									src={
										assets.me
									}
								/>
							</PictureFrame>
						</div>
						<div>
							<h2>Pang Sheng Wei</h2>
						</div>
					</div>
				</div>
				<div class={styles.wrapper}>123</div>
			</div>
		</div>
	);
};

export default Profile;
