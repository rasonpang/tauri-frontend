import styles from "./style.module.css";

// Components
import SlideContainer from "@/app/components/Container/SlideContainer";
import Profile from "@/app/components/Profile";
import Background from "@/app/components/Background";
import Marquee from "@/app/components/Marquee";
import SideNavigator from "@/app/components/SideNavigator";
import { createSignal, onMount } from "solid-js";

const ResumePage = () => {
	let profileSection: any;
	let historySection: any;

	const [sideNavigatorList, setSideNavigatorList]: any = createSignal([]);

	onMount(() => {
		setSideNavigatorList([
			{ name: "Profile", target: profileSection },
			{ name: "History", target: historySection },
		]);
	});

	return (
		<div class={styles.container}>
			<div class={styles.side_navigator}>
				<SideNavigator list={sideNavigatorList()} />
			</div>
			<section
				ref={profileSection}
				class="center overflow-hidden"
			>
				<Background>
					<div
						id={styles.marquee_1}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_2}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_3}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
				</Background>
				<Profile />
			</section>
			<section ref={historySection} class="center">
				<SlideContainer>Second</SlideContainer>
			</section>
		</div>
	);
};

export default ResumePage;
