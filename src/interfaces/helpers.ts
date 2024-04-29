export interface DebounceList { [name: string]: number }

export interface IntersectionObserverEntryCallback {
    (value: IntersectionObserverEntry, index: number, array: IntersectionObserverEntry[]): void
}

export interface GetStorageOptions {
	parse?: boolean;
	defaultValue?: any;
}