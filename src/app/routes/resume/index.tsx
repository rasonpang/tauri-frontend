import styles from "./style.module.css";
import { createSignal, onMount } from "solid-js";
import { SentencePart } from "@/data/interfaces/elements";
import { parseToTypewritter } from "@/data/helpers/element";

// Components
import MarqueeStarBackground from "@/app/components/Background/Templates/MarqueeStar";
import SlideContainer from "@/app/components/Container/SlideContainer";
import SideNavigator from "@/app/components/SideNavigator";
import Typewriter from "@/app/components/Typewritter";
import Profile from "@/app/components/Profile";

const ResumePage = () => {
	let welcomeSection: any;
	let profileSection: any;
	let experienceSection: any;

	const sentences: string[] = [
		`Good day sir, let's take a <span style='color: green'>small break</span> and have a sip of coffee☕`,
		`<span style='color: red'>Failure</span> is part of the <span style='color: green'>Success</span>💪`,
		`<span style='color: silver'>Treat people</span> how you want <span style='color: silver'>to be treated.</span> Start by respecting yourself🙏`,
		`People get <span style='color: red'>emotional</span> when they care about it and that's where you <span style='color: #78c0ff'>draw the line</span>`,
	];

	const parsedSentences: SentencePart[][] = parseToTypewritter(sentences);

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
