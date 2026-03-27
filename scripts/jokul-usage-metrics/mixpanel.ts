import { chunk } from "./utils.ts";

export async function sendEventsToMixpanel(events, apiUrl, log) {
    for (const batch of chunk(events, 50)) {
        const response = await fetch(`${apiUrl}?verbose=1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(batch),
        });

        const body = await response.text();

        if (!response.ok) {
            throw new Error(
                `Mixpanel track request failed with ${response.status}: ${body}`,
            );
        }

        log(`Mixpanel accepted batch of ${batch.length} event(s): ${body}`);
    }
}
