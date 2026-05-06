import type { ColorTokenNode } from "./types";

export function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isColorTokenNode(value: unknown): value is ColorTokenNode {
    return isRecord(value) && isRecord(value.value);
}

export function readPath(
    source: Record<string, unknown>,
    path: string[],
): unknown {
    let node: unknown = source;
    for (const segment of path) {
        if (!isRecord(node)) return undefined;
        node = node[segment];
    }
    return node;
}
