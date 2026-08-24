import type { EventName, EventProps } from "@/utils/tracking/types";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN;
const IS_DISABLED = typeof window === "undefined" || !MIXPANEL_TOKEN;

const STUDIO_AUTH_KEY_PREFIX = "__studio_auth_token_";

/**
 * Resultatet caches for økten, slik at vi slipper å skanne localStorage
 * på hvert eneste sporingskall.
 */
let sanityEditorCache: boolean | undefined;

/**
 * Settes først når initMixpanel() faktisk har initialisert klienten.
 * MixpanelProvider kan være disabled (f.eks. i draft mode), og da skal
 * trackEvent() være en no-op i stedet for å kalle en uinitialisert klient.
 */
let isInitialized = false;

function hasStudioAuthToken() {
    try {
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key?.startsWith(STUDIO_AUTH_KEY_PREFIX)) {
                return true;
            }
        }
        return false;
    } catch {
        return false;
    }
}

/**
 * Redaktører skal ikke telles med i statistikken.
 */
function isSanityEditor() {
    if (typeof window === "undefined") {
        return false;
    }

    if (sanityEditorCache) {
        return true;
    }

    // Billig sjekk som også fanger opp redaktører som logger inn underveis
    if (window.location.pathname.startsWith("/studio")) {
        sanityEditorCache = true;
        return true;
    }

    if (sanityEditorCache === undefined) {
        sanityEditorCache = hasStudioAuthToken();
    }

    return sanityEditorCache;
}

export function initMixpanel() {
    if (isInitialized || IS_DISABLED || isSanityEditor()) {
        return;
    }

    mixpanel.init(MIXPANEL_TOKEN, {
        api_host: "/mp",
        debug: process.env.NODE_ENV === "development",
        track_pageview: "url-with-path-and-query-string",
        disable_persistence: true,
    });
    mixpanel.register({ environment: process.env.NODE_ENV || "unknown" });

    isInitialized = true;
}

export function trackEvent<T extends EventName>(
    eventName: T,
    props: EventProps[T],
) {
    if (!isInitialized || isSanityEditor()) {
        return;
    }

    mixpanel.track(eventName, props);
}
