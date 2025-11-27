"use client";
import type { Jokul_messageBox } from "@/sanity/types";
import { Message } from "@fremtind/jokul/message";

import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const MessageBox: FC<
    PortableTextTypeComponentProps<Jokul_messageBox>
> = ({ value }) => {
    const type = value.messageType;

    if (!type) return null;

    return (
        <Message variant={value.messageType} title={value.title} fullWidth>
            {value.message}
        </Message>
    );
};
