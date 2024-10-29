/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

import type { Payload, User } from "@org/cms";
import type { Response } from "express";

declare module "@remix-run/node" {
    interface AppLoadContext {
        payload: Payload;
        user?: User;
        res: Response;
    }
}
