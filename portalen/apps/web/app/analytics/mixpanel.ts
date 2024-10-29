import mixpanel from "mixpanel-browser";
import type {
    AnalyticsBackend,
    AnalyticsBackendOptions,
    Identifiable,
    InitOptions,
    OptInOptions,
    OptOutOptions,
    Register,
    RegisterOptions,
    Timed,
    Trackable,
    TrackResponse,
} from "./types";

export interface MixpanelOptions extends AnalyticsBackendOptions {}

export class MixpanelBackend implements AnalyticsBackend {
    readonly name = "mixpanel";
    readonly options: MixpanelOptions;

    constructor(options: MixpanelOptions) {
        this.options = Object.freeze({ ...options });
    }

    private normalizeResponse(
        response: 1 | 0 | { status: 0 | 1; error: string | null },
    ): TrackResponse {
        if (response === 1) {
            return {
                backend: this.name,
                status: 201,
                message: undefined,
            };
        } else if (response === 0) {
            return {
                backend: this.name,
                status: 500,
                message: "Unknown error",
            };
        } else {
            return {
                backend: this.name,
                status: response.status === 0 ? 500 : 201,
                message: response.error || undefined,
            };
        }
    }

    async hasOptedIn(): Promise<boolean> {
        return Promise.resolve(mixpanel.has_opted_in_tracking());
    }

    async hasOptedOut(): Promise<boolean> {
        return Promise.resolve(mixpanel.has_opted_out_tracking());
    }

    async identify<T extends Identifiable>(identifiable: T): Promise<void> {
        mixpanel.identify(identifiable.uid);
    }

    async init(options?: InitOptions): Promise<void> {
        const initOptions = {
            api_host: "https://api-eu.mixpanel.com",
            ip: false,
            opt_out_tracking_by_default: true,
            ...options,
        };

        if (this.options.debug) {
            console.groupCollapsed("Initialize mixpanel");
            console.log(initOptions);
            console.groupEnd();
        }

        mixpanel.init(this.options.trackingId, initOptions);
    }

    async optIn<T extends Partial<OptInOptions>>(
        options?: T | undefined,
    ): Promise<void> {
        mixpanel.opt_in_tracking({
            persistence_type: "cookie",
            ...options,
        });
    }

    async optOut<T extends Partial<OptOutOptions>>(
        options?: T | undefined,
    ): Promise<void> {
        mixpanel.opt_out_tracking(options);
    }

    async register<T extends Register, O extends RegisterOptions>(
        register: T,
        options?: O,
    ): Promise<void> {
        mixpanel.register(
            register.properties,
            // @ts-ignore Options godtar egentlig også { persistent: false } i følge docs, men typet til kun number.
            options,
        );
    }

    async time<T extends Timed>(timed: T): Promise<void> {
        mixpanel.time_event(timed.eventName);
    }

    async track<T extends Trackable>(trackable: T): Promise<void> {
        await new Promise((resolve) => {
            mixpanel.track(
                trackable.eventName,
                trackable.properties,
                (response) => {
                    resolve(this.normalizeResponse(response));
                },
            );
        });
    }
}
