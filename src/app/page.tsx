"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { SentencePart } from "@/data/interfaces/elements";
import { parseToTypewritter, ps } from "@/data/helpers/element";

// Components
import MarqueeStarBackground from "@/components/Background/Templates/MarqueeStar";
import SideNavigator from "@/components/SideNavigator";
import Typewriter from "@/components/Typewritter";
import Profile from "@/components/Profile";

const ResumePage = () => {
	let welcomeSection = useRef(null);
	let profileSection = useRef(null);

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

	const [navList, setNavList]: any = useState([]);

	useEffect(() => {
		setNavList((prev: any) => [
			...prev,
			{ name: "Welcome", target: welcomeSection },
			{ name: "Profile", target: profileSection },
		]);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.side_navigator}>
				<SideNavigator list={navList} />
			</div>
			<section
				ref={welcomeSection}
				className="center overflow-hidden"
			>
				<MarqueeStarBackground
					class={styles.marquee_bg}
					maxScrollVH={99}
				/>

				<div className={`${styles.quotes} container`}>
					<Typewriter
						sentences={parsedSentences}
						speed={70}
						pause={2000}
					/>
				</div>
			</section>
			<section
				ref={profileSection}
				className="center"
				id={styles.section_two}
			>
				<Profile setNavList={setNavList} />
			</section>
		</div>
	);
};

export default ResumePage;
