import React, { FC } from "react";
import { OrderedLinkList } from "../src/OrderedLinkList";
import { UnorderedLinkList } from "../src/UnorderedLinkList";

export const UnorderedLinkListExample: FC = () => (
    <UnorderedLinkList>
        <UnorderedLinkList.Item>
            <UnorderedLinkList.Link>SpareBank 1</UnorderedLinkList.Link>
        </UnorderedLinkList.Item>
        <UnorderedLinkList.Item>
            <UnorderedLinkList.Link>DNB</UnorderedLinkList.Link>
        </UnorderedLinkList.Item>
        <UnorderedLinkList.Item>
            <UnorderedLinkList.Link>LOfavør</UnorderedLinkList.Link>
        </UnorderedLinkList.Item>
        <UnorderedLinkList.Item>
            <UnorderedLinkList.Link>Norsk Sykepleierforbund</UnorderedLinkList.Link>
        </UnorderedLinkList.Item>
    </UnorderedLinkList>
);

export const unorderedLinkListExample = () => `
<UnorderedLinkList>
    <UnorderedLinkList.Item>
        <UnorderedLinkList.Link>SpareBank 1</UnorderedLinkList.Link>
    </UnorderedLinkList.Item>
    <UnorderedLinkList.Item>
        <UnorderedLinkList.Link>DNB</UnorderedLinkList.Link>
    </UnorderedLinkList.Item>
    <UnorderedLinkList.Item>
        <UnorderedLinkList.Link>LOfavør</UnorderedLinkList.Link>
    </UnorderedLinkList.Item>
    <UnorderedLinkList.Item>
        <UnorderedLinkList.Link>Norsk Sykepleierforbund</UnorderedLinkList.Link>
    </UnorderedLinkList.Item>
</UnorderedLinkList>
`;

export const OrderedLinkListExample: FC = () => (
    <OrderedLinkList>
        <OrderedLinkList.Item>
            <OrderedLinkList.Link>Ledige stillinger</OrderedLinkList.Link>
        </OrderedLinkList.Item>
        <OrderedLinkList.Item>
            <OrderedLinkList.Link>Hvorfor Fremtind?</OrderedLinkList.Link>
        </OrderedLinkList.Item>
        <OrderedLinkList.Item>
            <OrderedLinkList.Link>Fordeler og goder</OrderedLinkList.Link>
        </OrderedLinkList.Item>
        <OrderedLinkList.Item>
            <OrderedLinkList.Link>Kultur</OrderedLinkList.Link>
        </OrderedLinkList.Item>
        <OrderedLinkList.Item>
            <OrderedLinkList.Link>Teknologi</OrderedLinkList.Link>
        </OrderedLinkList.Item>
    </OrderedLinkList>
);

export const orderedLinkListExample = () => `
<OrderedLinkList>
    <OrderedLinkList.Item>
        <OrderedLinkList.Link>Ledige stillinger</OrderedLinkList.Link>
    </OrderedLinkList.Item>
    <OrderedLinkList.Item>
        <OrderedLinkList.Link>Hvorfor Fremtind?</OrderedLinkList.Link>
    </OrderedLinkList.Item>
    <OrderedLinkList.Item>
        <OrderedLinkList.Link>Fordeler og goder</OrderedLinkList.Link>
    </OrderedLinkList.Item>
    <OrderedLinkList.Item>
        <OrderedLinkList.Link>Kultur</OrderedLinkList.Link>
    </OrderedLinkList.Item>
    <OrderedLinkList.Item>
        <OrderedLinkList.Link>Teknologi</OrderedLinkList.Link>
    </OrderedLinkList.Item>
</OrderedLinkList>
`;
