import { PortableText } from "@/components/portable-text/PortableText";
import type { Jokul_messageBox } from "@/sanity/types";
import { Message } from "@fremtind/jokul/message";
import type { PortableTextTypeComponentProps } from "next-sanity";
import type { FC } from "react";

export const MessageBox: FC<
    PortableTextTypeComponentProps<Jokul_messageBox>
> = ({ value }) => {
    const { title, message, messageType } = value;

    if (!message) {
        return null;
    }

    return (
        <Message variant={messageType ?? "info"} title={title} fullWidth>
            <PortableText blocks={message} />
        </Message>
    );
};
