import styles from "./style.module.css";

// Components
import SlideContainer from "@/app/components/Container/SlideContainer";
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
		`Second page contains Information about me and my Skills.`,
		`Welcome to my Resume page.`,
		`You may use Navigation on the end of screen.`,
		`This component has Typewritter Effect.`,
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
				<SlideContainer>
					<div>
						<h1>Experience</h1>
						<div>Work in progress...</div>
					</div>
				</SlideContainer>
			</section>
		</div>
	);
};

export default ResumePage;
