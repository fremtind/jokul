import { Button } from "packages/button-react/src";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Popover } from "../src";

export const popoverExampleKnobs: ExampleKnobsProps = {};

export const PopoverExample: FC<ExampleComponentProps> = () => {
    const [openState, setOpenState] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button ref={buttonRef} onClick={() => setOpenState(!openState)}>
                Toggle Popover
            </Button>
            <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
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
