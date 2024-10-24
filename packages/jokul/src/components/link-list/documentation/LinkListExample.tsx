import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { LinkList } from "../LinkList.js";

export const knobs: ExampleKnobsProps = {};

export const OrderedLinkListExample: FC<ExampleComponentProps> = () => (
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
        <LinkList.Item>
            <LinkList.Link href="#">
                En tekst som går over flere linjer for å se hvordan pilen oppfører seg når den ikke bare skal
                midtstilles i lenken
            </LinkList.Link>
        </LinkList.Item>
    </LinkList>
);
