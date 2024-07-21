import { JSX } from "solid-js";

export interface NavigateItem {
	name: string;
	target: JSX.Element;
}

export interface SentencePart {
	text: string;
	style?: string;
}
