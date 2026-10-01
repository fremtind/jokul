// `__JOKUL_VERSION__` injiseres ved buildtid (se `define` i
// vite.build.config.mjs/vite.test.config.mjs), hentet fra Jøkuls egen
// `package.json`. Fallbacken dekker miljøer der `define` ikke er satt opp
// (f.eks. andre test-/dev-oppsett enn vårt eget).
declare const __JOKUL_VERSION__: string | undefined;

/**
 * Jøkuls egen versjon, brukt internt til å sette `data-track-jokul-version`.
 * Ikke en del av det offentlige API-et (foreløpig kun brukt av
 * `CookieConsentProvider`).
 */
export const JOKUL_VERSION: string =
    typeof __JOKUL_VERSION__ !== "undefined" ? __JOKUL_VERSION__ : "unknown";
