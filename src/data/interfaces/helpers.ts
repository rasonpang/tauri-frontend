export interface DebounceList {
	[name: string]: ReturnType<typeof setTimeout>;
}

export interface IntersectionObserverEntryCallback {
	(
		value: IntersectionObserverEntry,
		index: number,
		array: IntersectionObserverEntry[]
	): void;
}

export interface GetStorageOptions {
	parse?: boolean;
	defaultValue?: any;
}
