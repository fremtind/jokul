export interface HasMinimumWordsOptions {
    minimumWords?: number;
}
export const hasMinimumWords = (value: string, options?: HasMinimumWordsOptions): boolean =>
    value.split(" ").filter((str) => !["", " "].includes(str)).length >= (options?.minimumWords || 2);
