import { DebounceList } from "@/data/interfaces/helpers";

let debounceList: DebounceList = {};

export const clone = (data: any) => {
	const r = JSON.parse(JSON.stringify(data));
	return r;
};

export const debounce = (func: Function, timeout: number = 1000) => {
	if (typeof func != "function") return;

	if (debounceList[func.name]) clearTimeout(debounceList[func.name]);
	debounceList[func.name] = setTimeout(() => {
		func();
		delete debounceList[func.name];
	}, timeout);
};

export const onFormSubmit = (func: Function) => (e: any) => {
	e.preventDefault();
	func();
};
