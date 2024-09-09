import React, { FC } from "react";
import { LinkList } from "../src";

export const OrderedLinkListExample: FC = () => (
    <LinkList variant="ordered">
        <LinkList.Item>
            <LinkList.Link href="#">Ledige stillinger</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">Hvorfor Fremtind?</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">Fordeler og goder</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">Kultur</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">Teknologi</LinkList.Link>
        </LinkList.Item>
    </LinkList>
);

export const orderedLinkListExample = () => `
<LinkList variant="ordered">
    <LinkList.Item>
        <LinkList.Link>Ledige stillinger</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>Hvorfor Fremtind?</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>Fordeler og goder</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>Kultur</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>Teknologi</LinkList.Link>
    </LinkList.Item>s
</LinkList>
`;

export const UnorderedLinkListExample: FC = () => (
    <LinkList variant="unordered">
        <LinkList.Item>
            <LinkList.Link href="#">SpareBank 1</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">DNB</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">LOfavør</LinkList.Link>
        </LinkList.Item>
        <LinkList.Item>
            <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
        </LinkList.Item>
    </LinkList>
);

export const unorderedLinkListExample = () => `
<LinkList variant="unordered">
    <LinkList.Item>
        <LinkList.Link>SpareBank 1</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>DNB</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>LOfavør</LinkList.Link>
    </LinkList.Item>
    <LinkList.Item>
        <LinkList.Link>Norsk Sykepleierforbund</LinkList.Link>
    </LinkList.Item>
</LinkList>
`;
