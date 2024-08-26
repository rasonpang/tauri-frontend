import styles from "./styles.module.css";

import { clone } from "@/data/helpers/helper";
import { SentencePart } from "@/data/interfaces/elements";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
	mode?: "linear" | "random";
	sentences: SentencePart[][];
	speed?: number;
	pause?: number;
}

const Typewriter = (props: TypewriterProps) => {
	let mode = props.mode ?? "linear";
	let speed = props.speed ?? 150;
	let pause = props.pause ?? 2000;

	const [sentence, setSentence] = useState<SentencePart[]>([]);
	const [pointers, setPointers] = useState({ sentence: 0 });

	const currentSentence = () => clone(props.sentences[pointers.sentence]);

	function start() {
		if (mode == "random") {
			// Select -> Display
			const newIndex = Math.floor(
				Math.random() * props.sentences.length
			);
			setPointers((prev) => {
				prev.sentence = newIndex;
				return prev;
			});

			let newSentence = currentSentence();
			add(newSentence);
		} else if (mode == "linear") {
			// Display -> Select
			let newSentence = currentSentence();
			add(newSentence);

			if (pointers.sentence < props.sentences.length - 1) {
				setPointers((prev) => {
					prev.sentence = prev.sentence + 1;
					return prev;
				});
			} else {
				setPointers((prev) => {
					prev.sentence = 0;
					return prev;
				});
			}
		}
	}

	function add(value: any) {
		let changeMode = false;

		setSentence((prev) => {
			if (value?.[0]?.text?.length === 0) {
				value = value.slice(1);
				prev.push({
					...value[0],
					...{ text: "" },
				});
			}

			// If is new word
			if (!prev[0]) {
				prev.push({
					...value[0],
					...{ text: "" },
				});
			}

			if (value.length > 0 && value[0].text.length > 0) {
				// Add value into prev
				prev[prev.length - 1].text =
					prev[prev.length - 1].text +
					value[0].text[0];

				// Remove value
				value[0].text = value[0].text.slice(1);
			} else {
				changeMode = true;
				prev.pop();
			}

			return prev;
		});

		if (changeMode == false)
			setTimeout(() => {
				add(value);
			}, speed);
		else
			setTimeout(() => {
				remove();
			}, pause);
	}

	function remove() {
		let isFinish = false;

		setSentence((prev) => {
			if (prev.length == 0) {
				isFinish = true;
			} else {
				let latestWord = prev[prev.length - 1].text;
				latestWord = latestWord.substring(
					latestWord.length - 1,
					-1
				);
				prev[prev.length - 1].text = latestWord;

				if (latestWord == "") prev.pop();
			}

			return prev;
		});

		if (isFinish == false) {
			setTimeout(() => {
				remove();
			}, speed / 2);
		} else {
			setTimeout(() => {
				start();
			}, pause / 2);
		}
	}

	useEffect(() => {
		start();
	}, []);

	return (
		<span className={styles.container}>
			{sentence.map((_, index) => (
				<span
					style={
						(sentence[index].style ??
							{}) as React.CSSProperties
					}
					key={index}
				>
					{sentence[index].text}
				</span>
			))}
		</span>
	);
};

export default Typewriter;
