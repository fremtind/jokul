export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

/** Kjører `worker` over `items` med maks `concurrency` samtidige kall. */
export async function mapPool(items, concurrency, worker, onProgress) {
    const results = new Array(items.length);
    let cursor = 0;
    let completed = 0;
    const runners = Array.from(
        { length: Math.max(1, Math.min(concurrency, items.length)) },
        async () => {
            while (cursor < items.length) {
                const idx = cursor++;
                results[idx] = await worker(items[idx]);
                completed++;
                onProgress?.(completed, items.length);
            }
        },
    );
    await Promise.all(runners);
    return results;
}
