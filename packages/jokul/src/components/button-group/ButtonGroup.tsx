import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Button } from "../button/Button.jsx";
import type { ButtonProps } from "../button/types.js";
import { Flex } from "../flex/Flex.jsx";

export type ButtonGroupProps = {
    mainAction: Exclude<ButtonProps<"button">, "variant">;
    secondaryAction?: Exclude<ButtonProps<"button">, "variant">;
};

export const ButtonGroup = ({
    mainAction,
    secondaryAction,
    className,
    ...elementAttributes
}: ButtonGroupProps & ComponentPropsWithoutRef<"div">) => {
    return (
        <Flex
            {...elementAttributes}
            className={clsx("jkl-button-group", className)}
            gap="8"
            direction="column"
            alignItems="center"
        >
            <Button
                variant="primary"
                {...(mainAction as ButtonProps<"button">)}
            />
            {secondaryAction && (
                <Button
                    variant="ghost"
                    {...(secondaryAction as ButtonProps<"button">)}
                />
            )}
        </Flex>
    );
};
