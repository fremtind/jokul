"use client";

import {
    type SupportedVersion,
    getStorybookBaseUrl,
} from "@/storybook/versions";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { stegaClean } from "next-sanity";
import { type CSSProperties, useCallback, useEffect, useState } from "react";

import "./storybook-frame.scss";

type StorybookFrameProps = {
    storyId?: string | null;
    storyUrl?: string | null;
    version?: SupportedVersion;
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

export const getStorybookFrameUrl = ({
    storyId,
    storyUrl,
    version = "latest",
}: Pick<StorybookFrameProps, "storyId" | "storyUrl" | "version">) => {
    const cleanStoryUrl = stegaClean(storyUrl);
    const cleanStoryId = stegaClean(storyId);
    const cleanVersion = stegaClean(version);

    if (cleanStoryUrl) return cleanStoryUrl;
    if (!cleanStoryId) return undefined;

    return `${getStorybookBaseUrl(cleanVersion)}/iframe.html?viewMode=story&id=${cleanStoryId}`;
};

export const getStorybookUrl = ({
    storyId,
    version = "latest",
}: Pick<StorybookFrameProps, "storyId" | "version">) => {
    const cleanStoryId = stegaClean(storyId);
    const cleanVersion = stegaClean(version);

    if (!cleanStoryId) return undefined;

    return `${getStorybookBaseUrl(cleanVersion)}/?path=/story/${cleanStoryId}`;
};

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
    version,
    title,
    height,
    globals = "backgrounds.value:page;backgrounds.grid:!false",
    inert,
}: StorybookFrameProps) => {
    const cleanStoryId = stegaClean(storyId);
    const cleanTitle = stegaClean(title);
    const cleanGlobals = stegaClean(globals);
    const frameSrc = getStorybookFrameUrl({
        storyId: cleanStoryId,
        storyUrl,
        version,
    });
    const frameStyle = getFrameStyle(height);
    const frameRef = useCallback(
        (frame: HTMLIFrameElement | null) => {
            if (frame) {
                frame.inert = Boolean(inert);
            }
        },
        [inert],
    );

    const [status, setStatus] = useState<StoryStatus>("loading");

    useEffect(() => {
        if (!frameSrc) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        if (!cleanStoryId) return;

        const handler = (event: MessageEvent) => {
            const status = parseStorybookEvent(event, cleanStoryId);
            if (status) setStatus(status);
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, [cleanStoryId, frameSrc]);

    if (!frameSrc || status === "error") {
        const issueUrl = getIssueUrl(cleanTitle, cleanStoryId);

        return (
            <output
                aria-label={`Eksempel: ${cleanTitle}`}
                className="storybook-frame"
                style={frameStyle}
            >
                <Flex
                    as="span"
                    alignItems="center"
                    direction="column"
                    gap="8"
                    justifyContent="center"
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
            ref={frameRef}
            title={cleanTitle}
            className="storybook-frame"
            onLoad={() => {
                setStatus((currentStatus) =>
                    currentStatus === "error" ? "error" : "ready",
                );
            }}
            style={{
                ...frameStyle,
                visibility: status === "loading" ? "hidden" : "visible",
            }}
            src={`${frameSrc}&globals=${cleanGlobals}`}
        />
    );
};
