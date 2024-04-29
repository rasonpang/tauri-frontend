import { GetStorageOptions } from "@/interfaces/helpers";

export const getStorage = (key: string, options?: GetStorageOptions): any => {
	let item = localStorage.getItem(key) ?? null;
	if (item == null) return options?.defaultValue ?? '';
	if (options?.parse == false) return item;
	return JSON.parse(item ?? '{}');
}

export const setStorage = (key: string, value: any) => {
	value = JSON.stringify(value);
	localStorage.setItem(key, value);
}

export const removeStorage = (key: string) => {
	localStorage.removeItem(key);
};