"use client";

import { PortableText } from "@/components/portable-text/PortableText";
import type { Jokul_component } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import { Link as JklLink } from "@fremtind/jokul/link";
import { Message } from "@fremtind/jokul/message";
import jokul from "@fremtind/jokul/package.json";
import styles from "./componentHeader.module.scss";

type ComponentHeaderProps = Pick<
    Jokul_component,
    "name" | "status" | "short_description"
>;

export const ComponentHeader = ({
    name,
    short_description,
    status,
}: ComponentHeaderProps) => {
    const statusToMessageMapping = (status: Jokul_component["status"]) => {
        switch (status?.value) {
            case "deprecated":
                return {
                    variant: "warning",
                    title: "Deprecated",
                    replacementText: "Bruk heller ",
                };
            case "beta":
                return {
                    variant: "info",
                    title: "Beta",
                    replacementText: "Vurder ",
                };
            case "removed":
                return {
                    variant: "error",
                    title: "Fjernet",
                    replacementText: "Erstattet med ",
                };
            default:
                return;
        }
    };

    return (
        <Flex as="header" className={styles.header}>
            <div>
                {name && (
                    <h1 className={styles.name} lang="en">
                        {name}{" "}
                        <span className="jkl-text-small">v{jokul.version}</span>
                    </h1>
                )}
                {short_description && (
                    <p className={styles.short_description}>
                        {short_description}
                    </p>
                )}
                {status && status.value !== "stable" && (
                    <div className={styles.status}>
                        {/* @ts-ignore */}
                        <Message {...statusToMessageMapping(status)}>
                            {status.description && (
                                <PortableText blocks={status.description} />
                            )}
                            {status.replacement && (
                                <p className={styles.replacement}>
                                    {
                                        statusToMessageMapping(status)
                                            ?.replacementText
                                    }
                                    <JklLink
                                        href={`${status.replacement.slug}`}
                                    >
                                        {status.replacement.name}
                                    </JklLink>
                                </p>
                            )}
                        </Message>
                    </div>
                )}
            </div>
        </Flex>
    );
};
