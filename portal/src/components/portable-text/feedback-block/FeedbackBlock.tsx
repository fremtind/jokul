import { FeedbackButton } from "@/components/portable-text/feedback-block/FeedbackButton";
import type { Jokul_feedbackBlock } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text } from "@fremtind/jokul/typography";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const FeedbackBlock: FC<
    PortableTextTypeComponentProps<Jokul_feedbackBlock>
> = ({ value }) => {
    const { question } = value;

    if (!question) return null;

    return (
        <Card padding="m" outlined asChild style={{ maxWidth: "max-content" }}>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="s l"
                wrap="wrap"
            >
                <Text>{question}</Text>
                <Flex gap="xs" wrap="wrap">
                    <FeedbackButton question={question} sentiment="positive" />
                    <FeedbackButton question={question} sentiment="negative" />
                </Flex>
            </Flex>
        </Card>
    );
};
