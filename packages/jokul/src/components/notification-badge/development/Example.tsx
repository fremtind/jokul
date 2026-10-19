import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";

import {
    NotificationBadgeAnchorExample,
    NotificationBadgeExample,
    NotificationBadgeVariantExample,
} from "./NotificationBadgeExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                title="NotificationBadge"
                component={NotificationBadgeExample}
            />
            <DevExample
                title="Varianter"
                component={NotificationBadgeVariantExample}
            />
            <DevExample
                title="Ankere"
                component={NotificationBadgeAnchorExample}
            />
        </>
    );
}
