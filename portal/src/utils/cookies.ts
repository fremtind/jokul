export function getCookie(name: string): string | null {
    const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
}

export function setCookie(
    name: string,
    value: string | number,
    maxAge: number,
    secure?: boolean,
): void {
    const secureString = secure ? ";secure" : "";
    document.cookie = `${name}=${value}${secureString};path=/;max-age=${maxAge}`;
}

export function deleteCookie(name: string): void {
    setCookie(name, "", 0);
}
