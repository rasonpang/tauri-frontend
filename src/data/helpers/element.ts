interface SentencePart {
	text: string;
	style?: string;
}

export function parseSentences(sentences: string[]): SentencePart[][] {
	return sentences.map((sentence) => {
		const parts: SentencePart[] = [];
		const regex =
			/(<span style='([^']*)'>(.*?)<\/span>)|([^<\s]+|\s+)/g;
		let match: any;

		while ((match = regex.exec(sentence)) !== null) {
			if (match[4]) {
				parts.push(
					...match[4]
						.split("")
						.map((char: any) => ({
							text:
								char === " "
									? "\u00A0"
									: char,
						}))
				);
			} else if (match[3]) {
				parts.push(
					...match[3]
						.split("")
						.map((char: any) => ({
							text:
								char === " "
									? "\u00A0"
									: char,
							style: match[2],
						}))
				);
			}
		}

		return parts;
	});
}
