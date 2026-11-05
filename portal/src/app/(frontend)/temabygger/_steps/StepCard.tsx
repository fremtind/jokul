import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import type { ComponentProps, ReactNode } from "react";
import {
    StepBackLink,
    StepNavigation,
    type ThemeBuilderStepSegment,
} from "./StepNavigation";

type StepCardProps = {
    segment: ThemeBuilderStepSegment;
    /** Sendes videre til navigasjonen som avslutter kortet. */
    navigation?: Omit<ComponentProps<typeof StepNavigation>, "segment">;
    children: ReactNode;
};

export function StepCard({ segment, navigation, children }: StepCardProps) {
    return (
        <Card padding="l">
            <Flex direction="column" gap="32">
                <StepBackLink segment={segment} />
                {children}
                <StepNavigation segment={segment} {...navigation} />
            </Flex>
        </Card>
    );
}
