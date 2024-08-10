import styles from "./style.module.css";
import { createSignal, onMount } from "solid-js";
import { SentencePart } from "@/data/interfaces/elements";
import { insertStyle, parseToTypewritter, ps } from "@/data/helpers/element";

// Components
import MarqueeStarBackground from "@/app/components/Background/Templates/MarqueeStar";
import SlideContainer from "@/app/components/Container/SlideContainer";
import SideNavigator from "@/app/components/SideNavigator";
import Typewriter from "@/app/components/Typewritter";
import Profile from "@/app/components/Profile";

const ResumePage = () => {
	let welcomeSection: any;
	let profileSection: any;

	const sentences: string[] = [
		`Good day sir, let's take a ${ps(
			"small break",
			"#08B404"
		)} and have a sip of coffee☕`,

		`This background has ${ps(
			"Parallax Scrolling",
			"green"
		)} effect.`,

		`${ps("Failure", "#FF6B6B")} is part of the ${ps(
			"Success",
			"#08B404"
		)}💪`,

		`${ps("Treat people", "#E3E3E3")} how you want ${ps(
			"to be treated.",
			"#E3E3E3"
		)} Start by respecting yourself🙏`,

		`People get ${ps(
			"emotional",
			"#FF6B6B"
		)} when they care about it and that's where you ${ps(
			"draw the line",
			"#78c0ff"
		)}`,
	];

	const parsedSentences: SentencePart[][] = parseToTypewritter(sentences);

	const [navList, setNavList]: any = createSignal([]);

	onMount(() => {
		setNavList((prev: any) => [
			...prev,
			{ name: "Welcome", target: welcomeSection },
			{ name: "Profile", target: profileSection },
		]);
	});

	return (
		<div class={styles.container}>
			<div class={styles.side_navigator}>
				<SideNavigator list={navList()} />
			</div>
			<section
				ref={welcomeSection}
				class="center overflow-hidden"
			>
				<MarqueeStarBackground
					class={styles.marquee_bg}
					maxScrollVH={99}
				/>

				<div class={`${styles.quotes} container`}>
					<Typewriter
						sentences={parsedSentences}
						speed={70}
						pause={2000}
					/>
				</div>
			</section>
			<section
				ref={profileSection}
				class="center"
				style="min-height: 500vh"
			>
				<Profile setNavList={setNavList} />
			</section>
		</div>
	);
};

export default ResumePage;
