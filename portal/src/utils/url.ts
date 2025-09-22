export const createQueryString = (
    currentParams: URLSearchParams,
    name: string,
    value: string,
): string => {
    const params = new URLSearchParams(currentParams.toString());

    if (value) {
        params.set(name, value);
    } else {
        params.delete(name);
    }

    return params.toString();
};
