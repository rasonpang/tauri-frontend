import { useParams } from "@solidjs/router";
import { createMemo } from "solid-js";

export const getParam = (key: string) => {
	const param = createMemo(() => useParams()[key]);

	return param;
};

export const get = <T>(
	obj: T,
	path: string | Array<string | number>,
	defaultValue?: any
): any => {
	if (!path) return defaultValue;

	const pathArray = Array.isArray(path)
		? path
		: path
				.split(".")
				.flatMap((part) =>
					part.split(/\[|\].?/).filter(Boolean)
				);

	const result = pathArray.reduce((acc: any, key: any) => {
		if (acc && key in acc) {
			return acc[key as keyof typeof acc];
		}
		return undefined;
	}, obj);

	return result === undefined ? defaultValue : result;
};

export const set = <T>(
	obj: T,
	path: string | Array<string | number>,
	value: any
): T => {
	if (!path) return obj;

	const pathArray = Array.isArray(path)
		? path
		: path
				.split(".")
				.flatMap((part) =>
					part.split(/\[|\].?/).filter(Boolean)
				);

	let current = obj as any;

	for (let i = 0; i < pathArray.length; i++) {
		const key = pathArray[i];
		if (i === pathArray.length - 1) {
			current[key] = value;
		} else {
			if (!current[key] || typeof current[key] !== "object") {
				current[key] = isNaN(Number(pathArray[i + 1]))
					? {}
					: [];
			}
			current = current[key];
		}
	}

	return obj;
};
