import { type WithChildren } from '@fremtind/jkl-core';
import cn from 'classnames';
import React, { useState, type FC, type ReactNode } from 'react';
import { HighlightExample } from './HighlightExample';
import { ScrollContent } from './ScrollContent';

export interface ScrollContentProps extends WithChildren {
    className?: string;
    example: ReactNode;
    flipped?: boolean;
}

export const ScrollExample: FC<ScrollContentProps> = ({
    children,
    className,
    example,
    flipped = false,
}) => {
    const [currentStep, setStep] = useState(-1);
    const [hideExample, setExampleHidden] = useState(true);

    const handleStepChange = (step: number) => {
        setStep(step);
        setExampleHidden(false);
    };
    const handleLastStepLeave = () => setExampleHidden(true);
    return (
        <div
            className={cn('jkl-portal-scroll-example', className, {
                'jkl-portal-scroll-example--flipped': flipped,
            })}
        >
            <ScrollContent
                className="jkl-portal-scroll-example__content"
                onLastStepLeave={handleLastStepLeave}
                onStepChange={handleStepChange}
            >
                {children}
            </ScrollContent>
            <HighlightExample
                className="jkl-portal-scroll-example__example"
                hidden={hideExample}
                step={currentStep}
            >
                {example}
            </HighlightExample>
        </div>
    );
};
