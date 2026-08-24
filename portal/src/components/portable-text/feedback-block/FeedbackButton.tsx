import { trackEvent } from "@/utils/tracking/mixpanel";
import { Events, type FeedbackEventProps } from "@/utils/tracking/types";
import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { ThumbDownIcon, ThumbUpIcon } from "@fremtind/jokul/icon";
import { Popover } from "@fremtind/jokul/popover";
import { TextArea } from "@fremtind/jokul/text-area";
import { useState } from "react";
import type { FC } from "react";

interface FeedbackButtonProps {
    question: string;
    sentiment: FeedbackEventProps["sentiment"];
}

function sendFeedback(
    question: string,
    sentiment: "positive" | "negative",
    feedback: string,
) {
    trackEvent(Events.FEEDBACK, {
        question,
        sentiment,
        score: sentiment === "positive" ? 10 : 1,
        comment: feedback,
    });
}

export const FeedbackButton: FC<FeedbackButtonProps> = ({
    question,
    sentiment,
}) => {
    const positiv = sentiment === "positive";
    const Icon = positiv ? ThumbUpIcon : ThumbDownIcon;
    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState("");

    return (
        <Popover placement="bottom-end" open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <Button
                    onClick={() => setOpen(!open)}
                    icon={<Icon />}
                    aria-label={`${positiv ? "Gi positiv tilbakemelding" : "Gi negativ tilbakemelding"}: ${question}`}
                    variant="ghost"
                />
            </Popover.Trigger>

            <Popover.Content style={{ width: "35ch" }}>
                <Card padding="l">
                    <Flex
                        direction="column"
                        gap="s"
                        as="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            sendFeedback(question, sentiment, feedback);
                        }}
                    >
                        <TextArea
                            label="Kommentar (valgfritt)"
                            value={feedback}
                            rows={3}
                            autoExpand={false}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder=""
                        />
                        <Button type="submit" variant="primary">
                            Send
                        </Button>
                    </Flex>
                </Card>
            </Popover.Content>
        </Popover>
    );
};
