const DEFAULT_MAX_AGE = 10368000; // 120 days

const setCookie = (name: string, content: any, maxAge = DEFAULT_MAX_AGE): void => {
    const cookie = [];
    cookie.push(`${name}=${JSON.stringify(content)}`);
    cookie.push(`max-age=${maxAge}`);
    cookie.push(`SameSite=Strict`);
    cookie.push(`Path=/`);
    document.cookie = cookie.join(";");
};

const clearCookie = (name: string): void => {
    const cookie = [];
    cookie.push(`${name}=false`);
    cookie.push("expires=Thu, 01 Jan 1970 00:00:01 GMT;");
    cookie.push(`SameSite=Strict`);
    cookie.push(`Path=/`);
    document.cookie = cookie.join(";");
};

const hasCookie = (name: string, cookie = document.cookie): boolean => {
    return cookie.split(";").some((item) => item.trim().startsWith(`${name}=`));
};

const getCookie = (name: string, cookie = document.cookie): [string, string] | undefined => {
    const nameValuePair = cookie
        .split(";")
        .map((s) => s.trim().split("="))
        .find((item) => item[0] === name);

    if (!nameValuePair) {
        return;
    }

    return [nameValuePair[0], nameValuePair[1]];
};

class PortalCookie {
    key: string;

    constructor(key: string) {
        this.key = key;
    }

    exists(cookie?: string) {
        return hasCookie(this.key, cookie);
    }

    parse<T = any>(cookie: string | null): T | undefined {
        if (!cookie) {
            return;
        }
        const nameValuePair = getCookie(this.key, cookie);
        if (!nameValuePair) {
            return;
        }
        return JSON.parse(nameValuePair[1]);
    }

    setCookie(value: any): void {
        setCookie(this.key, value);
    }

    clear() {
        clearCookie(this.key);
    }
}

export const consentsCookie = new PortalCookie("fremtind-cookie-consent");
export const userPreferencesCookie = new PortalCookie("jkl-user-prefs");
