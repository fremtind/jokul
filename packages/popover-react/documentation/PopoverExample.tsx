import React, { type FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Button } from "../../button-react/src";
import { Popover } from "../src";

export const popoverExampleKnobs: ExampleKnobsProps = {};

export const PopoverExample: FC<ExampleComponentProps> = () => {
    const [openState, setOpenState] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button
                variant="ghost"
                ref={buttonRef}
                onClick={() => setOpenState(!openState)}
                aria-expanded={openState}
                aria-controls="popover"
            >
                Toggle Popover
            </Button>
            <Popover id="popover" open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
                <Popover.Content>Some Content</Popover.Content>
            </Popover>
        </>
    );
};

export default PopoverExample;

export const popoverExampleCode: CodeExample = () => `
    <Button ref={buttonRef} onClick={() => setOpenState(!openState)}>
        Toggle Popover
    </Button>
    <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
        <Popover.Content>Some Content</Popover.Content>
    </Popover>
`;
