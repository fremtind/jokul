"use client";

import { Button } from "@fremtind/jokul/components/button";
import { PortableText } from "@/components/portable-text/PortableText";
import { Flex } from "@fremtind/jokul/components/flex";
import { ComponentBySlugQueryResult } from "@/sanity/types";
import styles from "./component.module.scss";

type ComponentProps = {
    component: ComponentBySlugQueryResult;
};

const Component = ({ component }: ComponentProps) => {
    if (!component) {
        return <h1>Komponenten finnes ikke</h1>;
    }

    return (
        <>
            <Flex
                as="section"
                className={styles.component}
                justifyContent="space-between"
            >
                <div>
                    {component.name && (
                        <h1 className={styles.name}>{component.name}</h1>
                    )}
                    {component.short_description && (
                        <p className={styles.short_description}>
                            {component.short_description}
                        </p>
                    )}
                </div>
                <Flex className={styles.external_links} gap={16}>
                    <Button
                        variant="secondary"
                        as="a"
                        href={component.github_link || ""}
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
                    <Button
                        variant="secondary"
                        as="a"
                        href={component.figma_link || ""}
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
                </Flex>
            </Flex>

            {component.documentation_article && (
                <PortableText blocks={component.documentation_article} />
            )}
        </>
    );
};

export default Component;
