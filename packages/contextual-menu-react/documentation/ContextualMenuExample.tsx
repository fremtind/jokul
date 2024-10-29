import { ChevronDownIcon, ErrorIcon } from "@fremtind/jkl-icons-react";
import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { Button } from "../../button-react";
import { ContextualMenu } from "../src/ContextualMenu";
import { ContextualMenuDivider } from "../src/ContextualMenuDivider";
import { ContextualMenuItem } from "../src/ContextualMenuItem";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
    boolProps: ["Ikke lukk ved klikk utenfor"],
};
export const ContextualMenuExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
    displayValues,
}) => {
    const isOpen =
        choiceValues?.["isOpen"] !== "tom"
            ? choiceValues?.["isOpen"] === "true"
            : undefined;

    /* Force a re-render whenever theme or density changes */
    const key =
        displayValues?.theme || "none" + displayValues?.density || "none";

    const CustomLink = forwardRef<
        HTMLAnchorElement,
        ComponentPropsWithRef<"a">
    >(function CustomLink(props, ref) {
        return (
            <a ref={ref} {...props}>
                {props.children}
            </a>
        );
    });

    return (
        <div
            style={{
                width: "500px",
                textAlign: "center",
            }}
        >
            <ContextualMenu
                id={key}
                initialPlacement="bottom-end"
                isOpen={isOpen}
                keepOpenOnClickOutside={
                    boolValues?.["Ikke lukk ved klikk utenfor"]
                }
                triggerElement={
                    <Button
                        variant="ghost"
                        iconRight={<ChevronDownIcon bold />}
                    >
                        Ola Nordmann
                    </Button>
                }
            >
                <ContextualMenuItem>Forsikringsprofil</ContextualMenuItem>
                <ContextualMenuItem
                    onClick={() => console.log("Hei fra Dokumenter")}
                >
                    Dokumenter
                </ContextualMenuItem>
                <ContextualMenuItem icon={<ErrorIcon />}>
                    Skadesaker
                </ContextualMenuItem>
                <ContextualMenuDivider />
                <ContextualMenuItem as="a" href="https://jokul.fremtind.no/">
                    Jøkuls hjemmeside
                </ContextualMenuItem>
                <ContextualMenuItem
                    as={CustomLink}
                    href="https://www.fremtind.no/"
                    external
                    target="_blank"
                >
                    Fremtind Forsikring
                </ContextualMenuItem>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuExample;
export const contextualMenuExampleCode: CodeExample = ({
    boolValues,
    choiceValues,
}) => {
    const isOpen =
        !choiceValues || choiceValues["isOpen"] === "tom"
            ? ``
            : `\n    isOpen={${choiceValues["isOpen"]}}`;
    const keepOpen = boolValues?.["Ikke lukk ved klikk utenfor"]
        ? `\n    keepOpenOnClickOutside`
        : ``;

    return `
<ContextualMenu
    initialPlacement="bottom-end"${isOpen}${keepOpen}
    triggerElement={
        <Button variant="ghost" iconRight={<ChevronDownIcon bold />}>
            Ola Nordmann
        </Button>
    }
>
    <ContextualMenuItem>Forsikringsprofil</ContextualMenuItem>
    <ContextualMenuItem onClick={() => console.log("Hei fra Skadesaker")}>Dokumenter</ContextualMenuItem>
    <ContextualMenuItem icon={<ErrorIcon />}>Skadesaker</ContextualMenuItem>
    <ContextualMenuDivider />
    <ContextualMenuItem as="a" href="https://jokul.fremtind.no/">
        Jøkuls hjemmeside
    </ContextualMenuItem>
    <ContextualMenuItem as={CustomLink} href="https://www.fremtind.no/" external target="_blank">
        Fremtind Forsikring
    </ContextualMenuItem>
</ContextualMenu>
`;
};
