import { SentencePart } from "../interfaces/elements";

export function parseToTypewritter(sentences: string[]): SentencePart[][] {
	return sentences.map((input: string) => {
		// Regular expressions to match HTML tags and extract attributes
		const tagRegex = /<([^>]+)>/g;
		const attributeRegex = /(\w+)=['"]([^'"]+)['"]/g;

		// Function to parse an HTML tag and extract its attributes
		function parseHtmlTag(tag: string) {
			const attributes: any = {};
			let match;
			while ((match = attributeRegex.exec(tag)) !== null) {
				attributes[match[1]] = match[2];
			}
			return attributes;
		}

		// Split the input string into an array of words and tags
		const parts = input.split(/(<[^>]+>)/).filter(Boolean);

		// Result array to hold the final objects
		const result: SentencePart[] = [];

		let currentTagAttributes: any = null;

		parts.forEach((part: string) => {
			if (tagRegex.test(part)) {
				// If part is an HTML tag, parse its attributes
				currentTagAttributes = parseHtmlTag(part);
			} else {
				// Split the text part by spaces
				const words = part.split(" ").filter(Boolean);
				words.forEach((word) => {
					if (currentTagAttributes) {
						// If there are current tag attributes, merge them with the word
						result.push({
							text: word,
							...currentTagAttributes,
						});
						currentTagAttributes = null;
					} else {
						// Otherwise, just add the word as a text object
						result.push({ text: word });
					}
				});
			}
		});

		return result;
	});
}

// export function parseSentences(sentences: string[]): SentencePart[][] {
// 	return sentences.map((sentence) => {
// 		const parts: SentencePart[] = [];
// 		const regex =
// 			/(<span style='([^']*)'>(.*?)<\/span>)|([^<\s]+|\s+)/g;
// 		let match: any;

// 		while ((match = regex.exec(sentence)) !== null) {
// 			if (match[4]) {
// 				parts.push(
// 					...match[4]
// 						.split("")
// 						.map((char: any) => ({
// 							text:
// 								char === " "
// 									? "\u00A0"
// 									: char,
// 						}))
// 				);
// 			} else if (match[3]) {
// 				parts.push(
// 					...match[3]
// 						.split("")
// 						.map((char: any) => ({
// 							text:
// 								char === " "
// 									? "\u00A0"
// 									: char,
// 							style: match[2],
// 						}))
// 				);
// 			}
// 		}

// 		return parts;
// 	});
// }
