/**
 * Sjekker om et CSS Media Query matcher nettleserens egenskaper
 *
 * @param mediaQuery CSS Media Query som skal sjekkes. F.eks. `(orientation: portrait)`
 * @returns om det er match på queryen
 */
export function getInitialMediaQueryMatch(mediaQuery: string): boolean {
    if (!window.matchMedia) {
        // Enhetstester
        return false;
    }
    return window.matchMedia(mediaQuery).matches;
}
/**
 * Lytt på endringer i match mot et CSS Media Query
 *
 * @param queryList en MediaQueryList initiert med `window.matchMedia(<CSS Media Query>)`
 * @param callback funksjon som kalles når match for `queryList` endres
 */
export function addMediaQueryListener(
    queryList: MediaQueryList,
    callback: (e: MediaQueryListEvent) => void,
) {
    if (typeof queryList.addEventListener !== "undefined") {
        queryList.addEventListener("change", callback);
    } else {
        queryList.addListener(callback);
    }
}

/**
 * Fjern en lytter fra en MediaQueryList
 *
 * @param queryList en MediaQueryList initiert med `window.matchMedia(<CSS Media Query>)`
 * @param callback lytter som skal fjernes
 */
export function removeMediaQueryListener(
    queryList: MediaQueryList,
    callback: (e: MediaQueryListEvent) => void,
) {
    if (typeof queryList.removeEventListener !== "undefined") {
        queryList.removeEventListener("change", callback);
    } else {
        queryList.removeListener(callback);
    }
}
