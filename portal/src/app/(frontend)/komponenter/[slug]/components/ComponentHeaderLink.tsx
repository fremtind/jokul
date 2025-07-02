"use client";

import { Button } from "@fremtind/jokul/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@fremtind/jokul/tooltip";
import type { ReactElement } from "react";

type ComponentHeaderLinkProps = {
    name: string;
    href: string;
    icon: ReactElement;
};

export const ComponentHeaderLink = ({
    name,
    href,
    icon,
}: ComponentHeaderLinkProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                    icon={icon}
                />
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
        </Tooltip>
    );
};
