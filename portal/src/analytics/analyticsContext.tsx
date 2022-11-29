import { WithChildren } from "@fremtind/jkl-core";
import mixpanel from "mixpanel-browser";
import React, { createContext, useContext, type FC } from "react";
import { EventName } from "./events";
import { GroupKey, GroupValue } from "./groups";

type InitOptions = {
    debug: boolean;
};

type Response = { status: 1; error: null } | { status: 0; error: string };

type Callback = (response: Response) => void;

type Trackable = {
    eventName: EventName;
    properties?: Record<string, any>;
    callback?: Callback;
};

class AnalyticsContext {
    private identifier: string;

    private _isInitialized = false;
    get isInitialized(): boolean {
        return this._isInitialized;
    }

    private options: Partial<InitOptions> = {
        debug: process.env.NODE_ENV === "development",
    };

    private queue: Trackable[] = [];

    constructor(identifier: string) {
        this.identifier = identifier;
    }

    private normalizeResponse(response: 1 | 0 | Response): Response {
        if (response === 1) {
            return {
                status: response,
                error: null,
            };
        } else if (response === 0) {
            return {
                status: response,
                error: "",
            };
        } else {
            return response;
        }
    }

    init(options?: Partial<InitOptions>) {
        if (this.isInitialized) {
            return;
        }

        if (options) {
            this.options = options;
        }

        const initOptions = {
            ...options,
            api_host: "https://api-eu.mixpanel.com",
            ip: false,
            opt_out_tracking_by_default: true,
        };

        if (this.options.debug) {
            console.group("Initialize");
            console.log(initOptions);
        }

        mixpanel.init(this.identifier, initOptions);

        mixpanel.register({
            source: "gatsby",
            environment: process.env.PREVIEW_PATH ? "preview" : process.env.NODE_ENV || "production",
        });

        if (this.options.debug) {
            console.log("Register source jkl");
            console.groupEnd();
        }

        this._isInitialized = true;
    }

    addGroup(groupKey: GroupKey, groupValue: GroupValue, callback?: Callback | undefined): void {
        if (this.options.debug) {
            console.groupCollapsed(`Add group ${groupKey}`);
            console.log(groupValue);
            console.groupEnd();
        }

        mixpanel.add_group(
            groupKey,
            groupValue,
            callback
                ? (response) => {
                      callback(this.normalizeResponse(response));
                  }
                : undefined,
        );
    }

    disable(): void {
        mixpanel.disable();
    }

    hasOptedInTracking(): boolean {
        return mixpanel.has_opted_in_tracking();
    }

    hasOptedOutTracking(): boolean {
        return mixpanel.has_opted_out_tracking();
    }

    optInTracking(): void {
        mixpanel.opt_in_tracking();
    }

    optOutTracking(): void {
        mixpanel.opt_out_tracking();
    }

    setGroup(groupKey: GroupKey, groupValues: GroupValue | GroupValue[], callback?: Callback | undefined): void {
        if (this.options.debug) {
            console.group(`DEBUG: Set group ${groupKey}`);
            console.log(`Will be sent: ${this.hasOptedInTracking()}`);
            console.table(groupValues);
            console.groupEnd();
        }

        mixpanel.set_group(
            groupKey,
            groupValues,
            callback
                ? (response) => {
                      callback(this.normalizeResponse(response));
                  }
                : undefined,
        );
    }

    track(eventName: EventName, properties?: Record<string, any> | undefined, callback?: Callback | undefined): void {
        if (this.options.debug) {
            console.groupCollapsed(`DEBUG: Track ${eventName}`);
            console.log(`Will be sent: ${this.hasOptedInTracking()}`);
            console.table(properties);
            console.groupEnd();
        }

        this.queue.push({
            eventName,
            properties,
            callback,
        });

        if (!this.isInitialized) {
            if (this.options.debug) {
                console.log("Not initialized");
            }
            return;
        }

        for (const trackable of this.queue) {
            mixpanel.track(trackable.eventName, trackable.properties, (response) => {
                if (trackable.callback) {
                    trackable.callback(this.normalizeResponse(response));
                }
            });
        }

        this.queue = [];
    }

    trackForms(selector: string, eventName: EventName, properties?: Record<string, any> | undefined): void {
        if (this.options.debug) {
            console.groupCollapsed(`DEBUG: Track form ${selector} by name ${eventName}`);
            console.log(`Will be sent: ${this.hasOptedInTracking()}`);
            console.table(properties);
            console.groupEnd();
        }

        mixpanel.track_forms(selector, eventName, properties);
    }

    trackLinks(selector: string, eventName: EventName, properties?: Record<string, any> | undefined): void {
        if (this.options.debug) {
            console.groupCollapsed(`Track links ${selector} by name ${eventName}`);
            console.log(`Will be sent: ${this.hasOptedInTracking()}`);
            console.table(properties);
            console.groupEnd();
        }

        mixpanel.track_links(selector, eventName, properties);
    }

    trackTime(eventName: EventName): void {
        if (this.options.debug) {
            console.groupCollapsed(`Track time to ${eventName}`);
            console.groupEnd();
        }
        mixpanel.time_event(eventName);
    }
}

const analytics = new AnalyticsContext(process.env.MIXPANEL_PROJECT_ID || "bac3ea28c7d92a05956f54eab1595663");

export const analyticsContext = createContext<AnalyticsContext>(analytics);

export const useAnalytics = (): AnalyticsContext => useContext(analyticsContext);

export const AnalyticsContextProvider: FC<WithChildren> = ({ children }) => {
    return <analyticsContext.Provider value={analytics}>{children}</analyticsContext.Provider>;
};
