import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import type { CSSProperties } from "react";

import "./storybook-frame.scss";
import { storyExists } from "@/storybook/storybookIndex";

type StorybookFrameProps = {
    storyId?: string | null;
    title: string;
    height?: number | null;
    globals?: string;
    inert?: boolean;
};

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
    title,
    height,
    globals = "backgrounds.value:page;backgrounds.grid:!false",
    inert,
}: StorybookFrameProps) => {
    const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;
    const hasStory = storyExists(storyId);
    const frameStyle = getFrameStyle(height);

    if (!storybookUrl || !hasStory) {
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
            style={frameStyle}
            src={`${storybookUrl}/iframe.html?viewMode=story&id=${storyId}&globals=${globals}`}
        />
    );
};
