export interface AnalyticsBackendOptions {
    /** Skrur på logging for feilsøking i nettleseren.
     * @default false
     */
    debug?: boolean;
    trackingId: string;
}

export type ResponseStatus = 201 | 400 | 500;

export interface BaseResponse {
    backend: string;
    status: ResponseStatus;
    message?: string;
}

export interface Identifiable {
    uid: string;
}

export interface InitOptions {
    appName?: string;
    version?: string;
    environment?: string;
}

export interface OptInOptions {}

export interface OptOutOptions {}

export interface Register {
    properties: Record<string, unknown>;
}

export interface RegisterOptions extends Record<string, unknown> {}

export interface Timed {
    eventName: string;
}

export interface TrackResponse extends BaseResponse {}

export interface Trackable {
    eventName: string;
    properties?: Record<string, unknown>;
    callback?: (response: TrackResponse) => void;
}

export interface AnalyticsBackend {
    readonly name: string;
    readonly options: AnalyticsBackendOptions;
    hasOptedIn(): Promise<boolean>;
    hasOptedOut(): Promise<boolean>;
    /**
     * Brukes typisk ved innlogging for å knytte events til en kjent bruker.
     * @param identifiable
     */
    identify<T extends Identifiable>(identifiable: T): Promise<void>;
    init<T extends Partial<InitOptions>>(initOptions?: T): Promise<void>;
    optIn<T extends Partial<OptInOptions>>(options?: T): Promise<void>;
    optOut<T extends Partial<OptOutOptions>>(options?: T): Promise<void>;
    /**
     * Egenskaper som registreres skal knyttes til alle sporingsevents.
     * @param register
     */
    register<T extends Register, O extends RegisterOptions>(
        register: T,
        options?: O
    ): Promise<void>;
    /**
     * Måler tiden fram til et `track`-event med samme navn.
     * @param timed
     */
    time<T extends Timed>(timed: T): Promise<void>;
    track<T extends Trackable>(trackable: T): Promise<void>;
}
