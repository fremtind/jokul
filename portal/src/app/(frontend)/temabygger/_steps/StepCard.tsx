import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import type { ReactNode } from "react";

type StepCardProps = {
    children: ReactNode;
};

export function StepCard({ children }: StepCardProps) {
    return (
        <Card padding="l">
            <Flex direction="column" gap="32">
                {children}
            </Flex>
        </Card>
    );
}
