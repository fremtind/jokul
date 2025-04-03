"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@fremtind/jokul";
import { Button } from "@fremtind/jokul/components/button";
import { ReactElement, ReactNode } from "react";

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
                <Button variant="secondary" as="a" href={href} icon={icon} />
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
        </Tooltip>
    );
};
