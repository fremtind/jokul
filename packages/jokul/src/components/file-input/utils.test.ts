import { afterEach, describe, expect, it, vi } from "vitest";
import { upload } from "./utils.js";

class FakeXMLHttpRequest extends EventTarget {
    static last: FakeXMLHttpRequest;
    upload = new EventTarget();
    status = 0;
    statusText = "";
    response: unknown = null;
    responseType = "";
    abort = vi.fn(() => this.dispatchEvent(new Event("abort")));
    open = vi.fn();
    send = vi.fn();
    setRequestHeader = vi.fn();

    constructor() {
        super();
        FakeXMLHttpRequest.last = this;
    }

    respond(status: number, response: unknown, statusText = "") {
        this.status = status;
        this.statusText = statusText;
        this.response = response;
        this.dispatchEvent(new Event("load"));
    }
}

describe("upload", () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    const start = (signal?: AbortSignal) => {
        vi.stubGlobal("XMLHttpRequest", FakeXMLHttpRequest);
        const progress = vi.fn();
        const request = upload<{ id: string }>(
            "/api",
            new FormData(),
            progress,
            { "x-csrf": "token" },
            signal,
        );
        return { request, progress, xhr: FakeXMLHttpRequest.last };
    };

    it("should report progress and resolve with the JSON response", async () => {
        const { request, progress, xhr } = start();

        expect(xhr.responseType).toBe("json");
        expect(xhr.setRequestHeader).toHaveBeenCalledWith("x-csrf", "token");

        xhr.upload.dispatchEvent(
            Object.assign(new Event("progress"), {
                lengthComputable: true,
                loaded: 25,
                total: 100,
            }),
        );
        expect(progress).toHaveBeenCalledWith(25);

        xhr.respond(200, { id: "abc" });
        await expect(request).resolves.toEqual({ id: "abc" });
    });

    it("should reject with the status when the server responds with an error", async () => {
        const { request, xhr } = start();

        xhr.respond(413, null, "Payload Too Large");

        await expect(request).rejects.toThrow(
            "Opplastingen feilet med status 413 Payload Too Large",
        );
    });

    it("should abort the request when the signal is aborted", async () => {
        const controller = new AbortController();
        const { request, xhr } = start(controller.signal);

        controller.abort();

        expect(xhr.abort).toHaveBeenCalled();
        await expect(request).rejects.toHaveProperty("name", "AbortError");
    });

    it("should not start the request if the signal is already aborted", async () => {
        const controller = new AbortController();
        controller.abort();

        await expect(start(controller.signal).request).rejects.toHaveProperty(
            "name",
            "AbortError",
        );
    });
});
