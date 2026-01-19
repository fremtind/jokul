"use client";
import { PortableText } from "@/components/portable-text/PortableText";
import type { Jokul_qa } from "@/sanity/types";
import { ExpandablePanel } from "@fremtind/jokul/expander";
import { Flex } from "@fremtind/jokul/flex";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import React, { type FC } from "react";

export const QuestionsAndAnswers: FC<
    PortableTextTypeComponentProps<Jokul_qa>
> = ({ value }) => {
    const { faq, title } = value;

    if (!faq) return null;

    return (
        <Flex direction="column" gap="xs">
            <h2>{title ? title : "Spørsmål og svar"}</h2>
            <Flex
                direction="column"
                gap="none"
                as="ul"
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
            >
                {faq.map((qa) => (
                    <ExpandablePanel
                        variant={faq.length >= 2 ? "stroke" : "fill"}
                        key={qa._key}
                    >
                        <ExpandablePanel.Header>
                            {qa.question}
                        </ExpandablePanel.Header>
                        <ExpandablePanel.Content>
                            {qa.answer ? (
                                <PortableText blocks={qa.answer} />
                            ) : (
                                "Ingen gode svar å få"
                            )}
                        </ExpandablePanel.Content>
                    </ExpandablePanel>
                ))}
            </Flex>
        </Flex>
    );
};
