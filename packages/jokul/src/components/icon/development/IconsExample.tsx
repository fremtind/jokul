import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    CopyIcon,
    DotsIcon,
    DragIcon,
    ErrorIcon,
    GreenCheckIcon,
    HamburgerIcon,
    InfoIcon,
    LinkIcon,
    MinusIcon,
    OpenInNewIcon,
    PenIcon,
    PlusIcon,
    QuestionIcon,
    RedCrossIcon,
    SearchIcon,
    SuccessIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashCanIcon,
    WarningIcon,
} from "../index.js";
import { IconExample } from "./internal/IconExample.js";
import { IconsExampleGrid } from "./internal/IconsExampleGrid.js";

export const iconsExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bold"],
    choiceProps: [
        {
            name: "Variant",
            values: ["inherit", "medium", "small"],
            defaultValue: 1,
        },
    ],
};

const allIcons = [
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    CopyIcon,
    DotsIcon,
    DragIcon,
    ErrorIcon,
    GreenCheckIcon,
    HamburgerIcon,
    InfoIcon,
    LinkIcon,
    MinusIcon,
    OpenInNewIcon,
    PenIcon,
    PlusIcon,
    QuestionIcon,
    RedCrossIcon,
    SearchIcon,
    SuccessIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashCanIcon,
    WarningIcon,
];

export const IconsExample: React.FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const bold = boolValues?.["Bold"] || false;

    return (
        <div style={{ width: "100%" }}>
            <IconsExampleGrid columns="four">
                {allIcons.map((Ico) => (
                    <IconExample
                        key={Ico.name}
                        renderIcon={() => <Ico bold={bold} />}
                        name={Ico.name}
                    />
                ))}
            </IconsExampleGrid>
        </div>
    );
};
