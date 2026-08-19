"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { useEffect, useState, type CSSProperties } from "react";

import "./storybook-frame.scss";

type StorybookFrameProps = {
    storyId?: string | null;
    storyUrl?: string | null;
    title: string;
    height?: number | null;
    globals?: string;
    inert?: boolean;
};

type StorybookChannelMessage = {
    key: "storybook-channel";
    event: {
        type: string;
        args: string[];
    };
};

type StoryStatus = "loading" | "ready" | "error";

const isStorybookMessage = (data: unknown): data is StorybookChannelMessage =>
    typeof data === "object" &&
    data !== null &&
    (data as StorybookChannelMessage).key === "storybook-channel";

const storybookEventStatusMap: Partial<Record<string, StoryStatus>> = {
    storyMissing: "error",
    storyRendered: "ready",
};

const TRUSTED_STORYBOOK_ORIGINS = [
    "https://fremtind.github.io",
    "http://localhost:6007",
];

function parseStorybookEvent(
    event: MessageEvent,
    storyId: string,
): StoryStatus | undefined {
    if (!TRUSTED_STORYBOOK_ORIGINS.includes(event.origin)) return;

    let data: unknown;
    try {
        data =
            typeof event.data === "string"
                ? JSON.parse(event.data)
                : event.data;
    } catch {
        return;
    }

    if (!isStorybookMessage(data)) return;
    const { type, args } = data.event;
    if (args[0] !== storyId) return;

    return storybookEventStatusMap[type];
}

const getFrameStyle = (height?: number | null) =>
    typeof height === "number"
        ? ({
              "--storybook-frame-height": height,
          } as CSSProperties)
        : undefined;

const getIssueUrl = (title: string, storyId?: string | null) => {
    const params = new URLSearchParams({
        template: "rapporter-en-bug.yaml",
        title: `[Portal] Storybook-eksempel vises ikke: ${title}`,
    });

    if (storyId) {
        params.set(
            "what-happened",
            [
                `Storybook-eksempelet \`${title}\` vises ikke i portalen.`,
                "",
                `Story-id: \`${storyId}\``,
            ].join("\n"),
        );
    }

    return `https://github.com/fremtind/jokul/issues/new?${params.toString()}`;
};

export const StorybookFrame = ({
    storyId,
    storyUrl,
    title,
    height,
    globals = "backgrounds.value:page;backgrounds.grid:!false",
    inert,
}: StorybookFrameProps) => {
    const frameSrc = storyUrl ?? (storyId ? `https://fremtind.github.io/jokul/latest/iframe.html?viewMode=story&id=${storyId}` : undefined);
    const frameStyle = getFrameStyle(height);

    const [status, setStatus] = useState<StoryStatus>("loading");

    useEffect(() => {
        if (!storyId) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        const handler = (event: MessageEvent) => {
            const status = parseStorybookEvent(event, storyId);
            if (status) setStatus(status);
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, [storyId]);

    if (!frameSrc || status === "error") {
        const issueUrl = getIssueUrl(title, storyId);

        return (
            <output
                aria-label={`Eksempel: ${title}`}
                className="storybook-frame"
                style={frameStyle}
            >
                <Flex
                    as="span"
                    alignItems="center"
                    direction="column"
                    gap="8"
                    justifyContent="center"
                    textAlign="center"
                    className="storybook-frame-fallback"
                >
                    <span className="storybook-frame-fallback__title">
                        Vi får ikke vist dette eksempelet akkurat nå
                    </span>
                    <span className="storybook-frame-fallback__details">
                        Kontakt Jøkul-teamet ved å{" "}
                        <Link
                            external
                            href={issueUrl}
                            rel="noreferrer"
                            target="_blank"
                        >
                            opprette en issue
                        </Link>
                        .
                    </span>
                </Flex>
            </output>
        );
    }

    return (
        <iframe
            inert={inert}
            title={title}
            className="storybook-frame"
            style={{
                ...frameStyle,
                visibility: status === "loading" ? "hidden" : "visible",
            }}
            src={`${frameSrc}&globals=${globals}`}
        />
    );
};
