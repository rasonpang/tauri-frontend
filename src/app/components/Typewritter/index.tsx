import { findLastIndexByKey } from "@/data/helpers/getter";
import { createSignal, onCleanup, onMount } from "solid-js";

interface SentencePart {
	text: string;
	style?: string;
}

interface TypewriterProps {
	sentences: SentencePart[][];
	speed?: number;
	pause?: number;
}

const Typewriter = (props: TypewriterProps) => {
	let container: any;
	let timer: any;

	const { sentences, speed = 100, pause = 2000 } = props;
	const [displayedText, setDisplayedText] = createSignal<SentencePart[]>(
		[]
	);
	const [sentenceIndex, setSentenceIndex] = createSignal(0);
	const [charIndex, setCharIndex] = createSignal(0);
	const [isDeleting, setIsDeleting] = createSignal(false);

	const getCurrentSentence = () => {
		return sentences[sentenceIndex()];
	};

	const isContainerOverflowed = () => {
		if (container.scrollWidth > window.innerWidth * 0.8) {
			const obj = displayedText();
			const spaceIndex = findLastIndexByKey(
				obj,
				"text",
				"\u00A0"
			);
			if (spaceIndex > 0)
				setTimeout(() => {
					setDisplayedText((prev) => {
						if (prev[spaceIndex]?.text)
							prev[spaceIndex].text =
								"<br>";

						return prev;
					});
				}, 3000);
		}
	};

	const type = () => {
		const currentSentence = getCurrentSentence();
		if (!isDeleting()) {
			// Check overflow
			isContainerOverflowed();

			setDisplayedText((prev) => [
				...prev,
				currentSentence[charIndex()],
			]);
			setCharIndex(charIndex() + 1);
		} else {
			setDisplayedText((prev) => prev.slice(0, -1));
			setCharIndex(charIndex() - 1);
		}

		if (!isDeleting() && charIndex() === currentSentence.length) {
			setIsDeleting(true);
			timer = setTimeout(type, pause);
		} else if (isDeleting() && charIndex() === 0) {
			setIsDeleting(false);
			setSentenceIndex(
				(prev) => (prev + 1) % sentences.length
			);
			setDisplayedText([]);
			timer = setTimeout(type, 500);
		} else {
			timer = setTimeout(
				type,
				isDeleting() ? speed / 2 : speed
			);
		}
	};

	onMount(() => {
		type();

		onCleanup(() => clearTimeout(timer));
	});

	return (
		<div
			ref={container}
			class="row"
			style="max-width: 90vw; flex-flow: wrap;"
		>
			{displayedText().map((part) =>
				part.text === "<br>" ? (
					<div style="width: 100%; height: 1px;"></div>
				) : (
					<div style={part.style}>
						{part.text}
					</div>
				)
			)}
		</div>
	);
};

export default Typewriter;
