import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { ArrowHorizontalAnimated } from "../icons/animated/ArrowHorizontalAnimated.js";
import { ArrowVerticalAnimated } from "../icons/animated/ArrowVerticalAnimated.js";
import { PlusRemoveAnimated } from "../icons/animated/PlusRemoveAnimated.js";
import { AnimatedIcon } from "./internal/AnimatedIcon.js";
import { IconsExampleGrid } from "./internal/IconsExampleGrid.js";

export const animatedIconsExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bold"],
};

export const AnimatedIconsExample: React.FC<ExampleComponentProps> = ({
    choiceValues,
    boolValues,
}) => {
    const bold = boolValues?.["Bold"] || false;

    return (
        <div style={{ width: "100%" }}>
            <IconsExampleGrid columns="two">
                <AnimatedIcon
                    renderIcon={(isDown) => (
                        <ArrowVerticalAnimated
                            bold={bold}
                            pointingDown={isDown}
                        />
                    )}
                    iconName={ArrowVerticalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isRight) => (
                        <ArrowHorizontalAnimated
                            bold={bold}
                            pointingRight={isRight}
                        />
                    )}
                    iconName={ArrowHorizontalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isPlus) => (
                        <PlusRemoveAnimated bold={bold} isPlus={isPlus} />
                    )}
                    iconName={PlusRemoveAnimated.displayName}
                />
            </IconsExampleGrid>
        </div>
    );
};
