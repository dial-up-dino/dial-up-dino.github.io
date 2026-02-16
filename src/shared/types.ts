export type PartialRecord<TKey extends PropertyKey, TValue> = {
	[key in TKey]?: TValue;
};
