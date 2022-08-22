export function getCompactValue(compact?: boolean): "true" | "false" | undefined {
    if (typeof compact === "undefined") {
        return undefined;
    }
    return compact ? "true" : "false";
}
