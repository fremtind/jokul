export const createQueryString = (
    currentParams: URLSearchParams,
    name: string,
    value: string,
): string => {
    const params = new URLSearchParams(currentParams.toString());
    params.set(name, value);
    return params.toString();
};
