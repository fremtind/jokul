import { type WithChildren } from '@fremtind/jkl-core';
import { usePreviousValue } from '@fremtind/jkl-react-hooks';
import classNames from 'classnames';
import React, { type FC, useState } from 'react';
import { RichText } from '../rich-text';
import type { ExampleStepProps } from './example-step';
import { SteppedExampleNavigation } from './stepped-example-navigation';

function isExampleStep(
    child: {} | null | undefined
): child is React.ReactElement<ExampleStepProps> {
    return (
        React.isValidElement<ExampleStepProps>(child) &&
        Boolean(child.props.children)
    );
}

export const SteppedExample: FC<WithChildren> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const previousStep = usePreviousValue(currentStep);
    const steps = React.Children.map(
        children,
        (child) => isExampleStep(child) && child.props
    )?.filter(Boolean);

    if (!steps) {
        return null;
    }

    const goToPreviousStep = () =>
        setCurrentStep((prevValue) => Math.max(prevValue - 1, 0));
    const goToNextStep = () =>
        setCurrentStep((prevValue) =>
            Math.min(prevValue + 1, steps.length - 1)
        );

    const currentExample = steps[currentStep];
    const isFullWidth = !currentExample.headline && !currentExample.description;

    return (
        <div
            className="jkl-portal-stepped-example"
            aria-live={previousStep !== currentStep ? 'polite' : undefined}
        >
            {currentExample.headline && (
                <p className="jkl-portal-stepped-example__headline">
                    {currentExample.headline}
                </p>
            )}
            <div
                className={classNames('jkl-portal-stepped-example__example', {
                    'jkl-portal-stepped-example__example--full-width':
                        isFullWidth,
                })}
            >
                {currentExample.children}
                <button
                    aria-hidden
                    tabIndex={-1}
                    className="touch-button touch-button--back"
                    onClick={goToPreviousStep}
                />
                <button
                    aria-hidden
                    tabIndex={-1}
                    className="touch-button touch-button--forward"
                    onClick={goToNextStep}
                />
            </div>
            {!isFullWidth && (
                <div className="jkl-portal-stepped-example__description">
                    {currentExample.description && (
                        <p className="jkl-body">
                            <RichText content={currentExample.description} />
                        </p>
                    )}
                </div>
            )}
            {steps.length > 1 ? (
                <div className="jkl-portal-stepped-example__navigation">
                    <SteppedExampleNavigation
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        handleNext={goToNextStep}
                        handlePrevious={goToPreviousStep}
                    />
                </div>
            ) : null}
        </div>
    );
};
