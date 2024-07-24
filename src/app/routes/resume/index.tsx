import styles from "./style.module.css";

// Components
import SlideContainer from "@/app/components/Container/SlideContainer";
import Background from "@/app/components/Background";
import Marquee from "@/app/components/Marquee";
import SideNavigator from "@/app/components/SideNavigator";
import { createSignal, onMount } from "solid-js";
import Typewriter from "@/app/components/Typewritter";
import { SentencePart } from "@/data/interfaces/elements";
import { parseSentences } from "@/data/helpers/element";
import Profile from "@/app/components/Profile";
import MarqueeStarBackground from "@/app/components/Background/Templates/MarqueeStar";

const ResumePage = () => {
	let welcomeSection: any;
	let profileSection: any;
	let experienceSection: any;

	const sentences: string[] = [
		`It's a-me, <span style='color: red'>Mario</span> - Mario`,
		"<span style='color: gold'>Justice</span> rains from above! - Overwatch",
		`Hey you, you're <span style='color: blue'>finally awake</span> - Skyrim`,
		"<span style='color: red'>Friendly fire</span> would not be tolerated! - Call of Duty",
	];

	const parsedSentences: SentencePart[][] = parseSentences(sentences);

	const [sideNavigatorList, setSideNavigatorList]: any = createSignal([]);

	onMount(() => {
		setSideNavigatorList([
			{ name: "Welcome", target: welcomeSection },
			{ name: "Profile", target: profileSection },
			{ name: "Experience", target: experienceSection },
		]);
	});

	return (
		<div class={styles.container}>
			<div class={styles.side_navigator}>
				<SideNavigator list={sideNavigatorList()} />
			</div>
			<section
				ref={welcomeSection}
				class="center overflow-hidden"
			>
				<MarqueeStarBackground />

				<div class={styles.quotes}>
					<Typewriter
						sentences={parsedSentences}
						speed={70}
						pause={2000}
					/>
				</div>
			</section>
			<section ref={profileSection} class="center">
				<Profile />
			</section>
			<section ref={experienceSection} class="center">
				<SlideContainer>Experience</SlideContainer>
			</section>
		</div>
	);
};

export default ResumePage;
