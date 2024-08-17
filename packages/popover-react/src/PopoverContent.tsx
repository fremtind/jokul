import classNames from "classnames";
import React from "react";

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(function PopoverContent(
    { className, ...rest },
    ref,
) {
    return <div {...rest} ref={ref} className={classNames("jkl-popover__content", className)} />;
});

export default PopoverContent;
