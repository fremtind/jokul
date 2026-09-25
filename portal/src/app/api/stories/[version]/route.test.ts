import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";

afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
});

describe("GET /api/stories/[version]", () => {
    it("loads the published index despite the obsolete proxy URL", async () => {
        vi.stubEnv("NEXT_PUBLIC_STORYBOOK_BASE_URL", "/storybook");
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ entries: {} }),
        });
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(
            new NextRequest("http://localhost/api/stories/latest"),
            { params: Promise.resolve({ version: "latest" }) },
        );

        expect(fetchMock).toHaveBeenCalledWith(
            "https://fremtind.github.io/jokul/latest/index.json",
        );
        expect(response.status).toBe(200);
    });

    it("loads local stories during development", async () => {
        vi.stubEnv("NODE_ENV", "development");
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({
                entries: {
                    button: {
                        type: "story",
                        id: "button--primary",
                        name: "Primary",
                        title: "Komponenter/Button",
                    },
                },
            }),
        });
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(
            new NextRequest("http://localhost/api/stories/local"),
            { params: Promise.resolve({ version: "local" }) },
        );

        expect(fetchMock).toHaveBeenCalledWith(
            "http://localhost:6007/index.json",
        );
        expect(response.status).toBe(200);
        expect((await response.json()).Button[0].url).toContain(
            "http://localhost:6007/iframe.html",
        );
    });

    it("does not fetch local Storybook in production", async () => {
        vi.stubEnv("NODE_ENV", "production");
        const fetchMock = vi.fn();
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(
            new NextRequest("http://localhost/api/stories/local"),
            { params: Promise.resolve({ version: "local" }) },
        );

        expect(response.status).toBe(404);
        expect(fetchMock).not.toHaveBeenCalled();
    });
});
