import fs from "node:fs/promises";
import path from "node:path";
import { tokens } from "@fremtind/jkl-core";
import type { LoaderArgs } from "@remix-run/node";
import { Resvg } from "@resvg/resvg-js";
import { LRUCache } from "lru-cache";
import React from "react";
//@ts-ignore Vi må rydde opp i esm vs cjs når vi flytter dette inn i Jøkul
import satori from "satori";

let fremtindGrotesk: Buffer | null = null;
let fremtindGroteskBold: Buffer | null = null;

const cache = new LRUCache<string, Buffer>({
    max: 50,
    ttl: 1000 * 60 * 60,
});

export async function loader({ request }: LoaderArgs) {
    const params = new URL(request.url).searchParams;

    const mode = params.get("mode") || "light";
    const titleInput = params.get("title");
    const title = titleInput || "Designsystemet til Fremtind";

    if (cache.has(`${title},${mode}`)) {
        return new Response(cache.get(`${title},${mode}`), {
            headers: {
                "Content-Type": "image/png",
            },
        });
    }

    if (!fremtindGrotesk) {
        fremtindGrotesk = await fs.readFile(
            path.join(
                process.cwd(),
                "public/fonts/FremtindGrotesk-Regular-Web.woff",
            ),
        );
    }
    if (!fremtindGroteskBold) {
        fremtindGroteskBold = await fs.readFile(
            path.join(
                process.cwd(),
                "public/fonts/FremtindGrotesk-Bold-Web.woff",
            ),
        );
    }

    const backgroundColor =
        mode === "dark" ? tokens.color.granitt : tokens.color.dis;
    const foregroundColor =
        mode === "dark" ? tokens.color.dis : tokens.color.granitt;

    const jsx = (
        <div
            style={{
                background: backgroundColor,
                color: foregroundColor,
                padding: "40px 96px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "12px",
                height: "100%",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                <p
                    style={{
                        fontSize: "56px",
                        lineHeight: "56px",
                    }}
                >
                    {title}
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <p
                    style={{
                        fontSize: "28px",
                        lineHeight: "28px",
                        marginTop: "12px",
                    }}
                >
                    Jøkul
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 260.32 140.25"
                    height="44px"
                >
                    <polygon
                        fill={foregroundColor}
                        points="248.27 138.54 257.75 129.06 130.11 1.42 2.56 128.97 12.41 138.82 72.29 78.94 132.17 138.83 141.66 129.34 81.78 69.45 130.48 20.75 248.27 138.54"
                    />
                </svg>
            </div>
        </div>
    );

    const svg = await satori(jsx, {
        width: 711,
        height: 400,
        fonts: [
            {
                name: "Fremtind Grotesk",
                data: fremtindGrotesk,
                weight: 400,
                style: "normal",
            },
            {
                name: "Fremtind Grotesk",
                data: fremtindGroteskBold,
                weight: 700,
                style: "normal",
            },
        ],
    });

    const resvgOpts = {
        font: {
            loadSystemFonts: false,
            defaultFontFamily: "Fremtind Grotesk",
        },
    };
    const svgRenderer = new Resvg(svg, resvgOpts);
    const data = svgRenderer.render().asPng();

    if (data) {
        cache.set(`${title},${mode}`, data);
    }

    return new Response(data, {
        headers: {
            "Content-Type": "image/png",
        },
    });
}
