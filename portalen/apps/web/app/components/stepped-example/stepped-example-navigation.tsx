import React, { type CSSProperties, type FC } from "react";

export interface ExampleNavigationProps {
    currentStep: number;
    totalSteps: number;
    handlePrevious: VoidFunction;
    handleNext: VoidFunction;
}

export const SteppedExampleNavigation: FC<ExampleNavigationProps> = ({
    currentStep,
    handleNext,
    handlePrevious,
    totalSteps,
}) => {
    return (
        <div className="jkl-portal-stepped-example-navigation">
            <button
                onClick={handlePrevious}
                className="jkl-portal-stepped-example-navigation__button jkl-nav-link jkl-nav-link--back"
            >
                Forrige
            </button>

            <progress
                className="jkl-sr-only"
                value={currentStep}
                max={totalSteps - 1}
                aria-label={`steg ${currentStep + 1} av ${totalSteps}`}
            >{`steg ${currentStep + 1} av ${totalSteps}`}</progress>
            <div
                aria-hidden
                className="jkl-portal-stepped-example-navigation__progress"
                style={
                    {
                        "--value": currentStep,
                        "--max": totalSteps - 1,
                    } as CSSProperties
                }
            />
            <button onClick={handleNext} className="jkl-portal-stepped-example-navigation__button jkl-nav-link">
                Neste
            </button>
        </div>
    );
};
