"use client";
import { PortableText } from "@/components/portable-text/PortableText";
import type { Jokul_qa } from "@/sanity/types";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
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
            <Accordion outlined>
                {faq.map((qa) => (
                    <ExpandablePanel key={qa._key}>
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
            </Accordion>
        </Flex>
    );
};
