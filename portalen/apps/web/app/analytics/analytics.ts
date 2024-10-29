import type { AnalyticsBackend, Trackable, InitOptions, OptInOptions, OptOutOptions, Timed } from "./types";

export class Analytics {
    private backends: Record<string, AnalyticsBackend> = {};

    async init(backend: AnalyticsBackend, options?: InitOptions): Promise<void> {
        if (this.backends[backend.name]) {
            if (backend.options.debug) {
                console.warn(
                    `An analytics backend named ${backend.name} already exists. Backend names must be unique.`,
                );
            }
            return;
        }
        this.backends[backend.name] = backend;
        await backend.init(options);
    }

    async hasOptedInTracking(): Promise<boolean> {
        return Promise.race(Object.values(this.backends).map((backend) => backend.hasOptedIn()));
    }

    async hasOptedOutTracking(): Promise<boolean> {
        return Promise.race(Object.values(this.backends).map((backend) => backend.hasOptedOut()));
    }

    async optInTracking(options?: OptInOptions): Promise<void> {
        for (const backend of Object.values(this.backends)) {
            if (backend.options.debug) {
                console.groupCollapsed(`Opting in to tracking`);
                if (options) {
                    console.table(options);
                }
                console.groupEnd();
            }
            await backend.optIn(options);
        }
    }

    async optOutTracking(options?: OptOutOptions): Promise<void> {
        for (const backend of Object.values(this.backends)) {
            if (backend.options.debug) {
                console.groupCollapsed(`Opting out of tracking`);
                if (options) {
                    console.table(options);
                }
                console.groupEnd();
            }
            await backend.optOut(options);
        }
    }

    async track(trackable: Trackable): Promise<void> {
        for (const backend of Object.values(this.backends)) {
            if (backend.options.debug) {
                console.groupCollapsed(`Track  ${trackable.eventName}`);
                console.table(trackable);
                console.groupEnd();
            }
            await backend.track(trackable);
        }
    }

    async time(timed: Timed): Promise<void> {
        for (const backend of Object.values(this.backends)) {
            if (backend.options.debug) {
                console.groupCollapsed(`Track time from now to ${timed.eventName}`);
                console.table(timed);
                console.groupEnd();
            }
            backend.time(timed);
        }
    }
}
