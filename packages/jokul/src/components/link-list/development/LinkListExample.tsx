import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { LinkList } from "../LinkList.js";

export const knobs: ExampleKnobsProps = {};

export const OrderedLinkListExample: FC<ExampleComponentProps> = () => (
    <LinkList variant="ordered" label="Sideinnhold">
        <LinkList.Link href="#">Ledige stillinger</LinkList.Link>
        <LinkList.Link href="#">Hvorfor Fremtind?</LinkList.Link>
        <LinkList.Link href="#">Fordeler og goder</LinkList.Link>
        <LinkList.Link href="#">Kultur</LinkList.Link>
        <LinkList.Link href="#">Teknologi</LinkList.Link>
    </LinkList>
);

export const UnorderedLinkListExample: FC = () => (
    <LinkList variant="unordered" label="Banker">
        <LinkList.Link href="#">SpareBank 1</LinkList.Link>
        <LinkList.Link href="#">DNB</LinkList.Link>
        <LinkList.Link href="#">LOfavør</LinkList.Link>
        <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
        <LinkList.Link href="#">
            En tekst som går over flere linjer for å se hvordan pilen oppfører
            seg når den ikke bare skal midtstilles i lenken
        </LinkList.Link>
    </LinkList>
);
