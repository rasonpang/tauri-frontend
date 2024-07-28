export interface DebounceList {
	[name: string]: ReturnType<typeof setTimeout>;
}

export interface GetStorageOptions {
	parse?: boolean;
	defaultValue?: any;
}
