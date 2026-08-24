import { PortableText } from "@/components/portable-text/PortableText";
import type { Jokul_qa } from "@/sanity/types";
import { trackEvent } from "@/utils/tracking/mixpanel";
import { Events } from "@/utils/tracking/types";
import { Accordion, ExpandablePanel } from "@fremtind/jokul/expander";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import React, { type FC } from "react";

export const QuestionsAndAnswers: FC<
    PortableTextTypeComponentProps<Jokul_qa>
> = ({ value }) => {
    const { faq } = value;

    if (!faq) return null;

    return (
        <Accordion outlined>
            {faq.map(
                (qa) =>
                    qa.answer && (
                        <ExpandablePanel key={qa._key}>
                            <ExpandablePanel.Header
                                onClick={() =>
                                    trackEvent(Events.CLICK, {
                                        element: `Spørsmål: ${qa.question}`,
                                        type: "q&a",
                                    })
                                }
                            >
                                {qa.question}
                            </ExpandablePanel.Header>
                            <ExpandablePanel.Content>
                                <PortableText blocks={qa.answer} />
                            </ExpandablePanel.Content>
                        </ExpandablePanel>
                    ),
            )}
        </Accordion>
    );
};
