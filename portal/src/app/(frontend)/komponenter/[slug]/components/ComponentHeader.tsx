"use client";

import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { ComponentHeaderLink } from "./ComponentHeaderLink";
import styles from "./componentHeader.module.scss";

type ComponentHeaderProps = {
    links?: {
        figma?: string;
        github?: string;
        storybook?: string;
    };
    name?: string;
    description?: string;
};

export const ComponentHeader = ({
    links,
    name,
    description,
}: ComponentHeaderProps) => {
    return (
        <Card variant="low" asChild>
            <Flex
                as="header"
                className={styles.header}
                justifyContent="space-between"
            >
                <div>
                    {name && (
                        <h1 className={styles.name} lang="en">
                            {name}
                        </h1>
                    )}
                    {description && (
                        <p className={styles.short_description}>
                            {description}
                        </p>
                    )}
                </div>
                {links && (
                    <Flex className={styles.external_links} gap={16}>
                        {links.storybook && (
                            <ComponentHeaderLink
                                name="Storybook"
                                href={links.storybook}
                                icon={
                                    <svg
                                        className="jkl-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 180 180"
                                    >
                                        <path
                                            d="M161.818 8.439c.011.186.017.374.017.561v161c0 4.97-4.034 9-9.01 9a9.02 9.02 0 01-.404-.01l-120.264-5.394a9.005 9.005 0 01-8.6-8.653l-5.55-147.751c-.184-4.88 3.562-9.015 8.441-9.32l98.607-6.156-.844 20.286c-.01.26.055.516.186.738l.087.13c.42.553 1.187.69 1.769.335l.114-.078 7.888-5.977 6.663 5.243a1.345 1.345 0 002.174-.972l.001-.13L142.37.636l9.893-.618c4.967-.31 9.244 3.46 9.555 8.42zm-69.185 22.02c-23.455 0-36.596 12.724-36.596 31.81 0 33.243 44.913 33.879 44.913 52.011 0 5.09-2.495 8.112-7.985 8.112l-.486-.006c-6.795-.166-9.487-3.928-9.162-16.05 0-2.69-27.28-3.53-28.112 0-2.118 30.066 16.635 38.738 38.093 38.738 20.793 0 37.095-11.07 37.095-31.112 0-35.628-45.579-34.674-45.579-52.329 0-7.044 5.156-8.08 8.332-8.111l.698.006c3.393.09 8.743 1.282 8.27 13.94 0 3.5 23.612 1.823 26.782-.637 0-23.843-12.809-36.373-36.263-36.373z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                }
                            />
                        )}
                        {links.github && (
                            <ComponentHeaderLink
                                name="Github"
                                href={links.github}
                                icon={
                                    <svg
                                        className="jkl-icon"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5l-.01-1.9c-2.79.62-3.37-1.22-3.37-1.22-.44-1.18-1.1-1.49-1.1-1.49-.92-.63.06-.63.06-.63 1 .07 1.54 1.06 1.54 1.06.9 1.56 2.34 1.12 2.92.84a2.2 2.2 0 0 1 .63-1.37c-2.22-.24-4.56-1.12-4.56-5.06 0-1.12.4-2.04 1.03-2.75-.1-.25-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.06a9.47 9.47 0 0 1 5 0c1.9-1.33 2.75-1.06 2.75-1.06.55 1.41.2 2.47.1 2.72a3.97 3.97 0 0 1 1.03 2.75c0 3.94-2.34 4.8-4.58 5.06.37.32.68.93.68 1.9l-.01 2.82c0 .27.18.6.68.5A10.23 10.23 0 0 0 22 12.24 10.11 10.11 0 0 0 12 2z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                }
                            />
                        )}
                        {links.figma && (
                            <ComponentHeaderLink
                                name="Figma"
                                href={links.figma}
                                icon={
                                    <svg
                                        className="jkl-icon"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.71 8.87A3.72 3.72 0 0 1 8.77 2h6.46a3.72 3.72 0 0 1 2.06 6.87 3.72 3.72 0 0 1-2.06 6.87h-.07c-.98 0-1.88-.38-2.55-.99v3.48A3.8 3.8 0 0 1 8.79 22a3.72 3.72 0 0 1-2.07-6.87 3.72 3.72 0 0 1 0-6.26zm5.9 3.13c0 1.4 1.14 2.53 2.55 2.53h.07c1.4 0 2.55-1.13 2.55-2.53s-1.14-2.53-2.55-2.53h-.07A2.54 2.54 0 0 0 12.61 12zm-1.22-2.53H8.77A2.54 2.54 0 0 0 6.22 12c0 1.4 1.14 2.52 2.54 2.53h2.63V9.47zm-2.62 6.27a2.54 2.54 0 0 0-2.55 2.52c0 1.4 1.15 2.53 2.57 2.53 1.43 0 2.6-1.15 2.6-2.56v-2.5H8.77zm2.62-7.48H8.77a2.54 2.54 0 0 1-2.55-2.52c0-1.4 1.14-2.53 2.55-2.53h2.62v5.05zm3.84 0h-2.62V3.21h2.62c1.4 0 2.55 1.13 2.55 2.53s-1.14 2.52-2.55 2.52z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                }
                            />
                        )}
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};
