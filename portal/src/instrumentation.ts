export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { initSearchIndex } = await import("@/search/singleton");
        initSearchIndex();
    }
}
