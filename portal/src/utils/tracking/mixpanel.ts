import type { EventName } from "@/utils/tracking/types";
import mixpanel, { type Dict } from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN;
const IS_ENABLED = typeof window !== "undefined" && !!MIXPANEL_TOKEN;

export function initMixpanel() {
    if (IS_ENABLED) {
        mixpanel.init(MIXPANEL_TOKEN, {
            api_host: "/mp",
            debug: process.env.NODE_ENV === "development",
            track_pageview: "url-with-path-and-query-string",
            disable_persistence: true,
        });
        mixpanel.register({ environment: process.env.NODE_ENV || "unknown" });
    }
}

export const trackEvent = (eventName: EventName, props?: Dict) => {
    if (IS_ENABLED) {
        mixpanel.track(eventName, props);
    }
};
