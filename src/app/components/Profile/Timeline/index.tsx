import { onMount } from "solid-js";
import styles from "./style.module.css";

const Timeline = (props: any) => {
	let container: any;

	onMount(() => {
		props.setNavList((prev: any) => [
			...prev,
			{ name: "Work Experience", target: container },
		]);
	});

	return (
		<div ref={container} class={styles.timeline}>
			<div class="title">Work Experience</div>

			<ul>
				<li>
					{/* #ff8181 */}
					<div>J&T Express</div>
				</li>
				<li>
					{/* #eb3670 */}
					<div>LavaX</div>
				</li>
				<li>
					{/* #50c8e0 */}
					<div>UP DevLabs</div>
				</li>
				<li>
					{/* #44ce6f */}
					<div>Volservers Sdn Bhd</div>
				</li>
			</ul>
		</div>
	);
};

export default Timeline;
