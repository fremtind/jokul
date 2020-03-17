export function getCookie(name: string) {
    const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
}

export function setCookie(name: string, value: string | number, maxAge: number, secure?: boolean) {
    const secureString = secure ? ";secure" : "";
    document.cookie = `${name}=${value}${secureString};path=/;max-age=${maxAge}`;
}

export function deleteCookie(name: string) {
    setCookie(name, "", 0);
}
