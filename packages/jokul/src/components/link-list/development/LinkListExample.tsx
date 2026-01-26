import React, { type FC } from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { LinkList } from "../LinkList.js";

const links = [
    "Ledige stillinger",
    "Hvorfor Fremtind?",
    "Fordeler og goder",
    "Kultur",
    "Teknologi",
];

export const LinkListExample: FC<ExampleComponentProps> = () => (
    <LinkList label="Om forsikringen din" hideLabel>
        {links.map((link) => (
            <LinkList.Link href="#" key={link}>
                {link}
            </LinkList.Link>
        ))}
    </LinkList>
);
