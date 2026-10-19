import React, { type FC } from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { Button } from "../../button/index.js";
import { Chip } from "../../chip/index.js";
import { Flex } from "../../flex/index.js";
import { IconButton } from "../../icon-button/index.js";
import { Icon } from "../../icon/index.js";
import { Tag } from "../../tag/index.js";
import { NotificationBadge } from "../NotificationBadge.js";

export const NotificationBadgeExample: FC<ExampleComponentProps> = () => (
    <Flex gap="xl" alignItems="center" wrap>
        {[1, 9, 99, 100].map((count) => (
            <NotificationBadge key={count} count={count}>
                <Button variant="secondary">{`count=${count}`}</Button>
            </NotificationBadge>
        ))}
        <NotificationBadge count={120} max={50}>
            <Button variant="secondary">max=50</Button>
        </NotificationBadge>
    </Flex>
);

export const NotificationBadgeVariantExample: FC<
    ExampleComponentProps
> = () => (
    <Flex gap="xl" alignItems="center" wrap>
        <NotificationBadge count={3} hideCounter>
            <Button variant="secondary">Prikk</Button>
        </NotificationBadge>
        <NotificationBadge count={3} urgent>
            <Button variant="secondary">Urgent</Button>
        </NotificationBadge>
        <NotificationBadge count={3} urgent hideCounter>
            <Button variant="secondary">Urgent prikk</Button>
        </NotificationBadge>
    </Flex>
);

export const NotificationBadgeAnchorExample: FC<ExampleComponentProps> = () => (
    <Flex gap="xl" alignItems="center" wrap>
        <NotificationBadge count={3}>
            <Button variant="secondary">En lengre knappetekst</Button>
        </NotificationBadge>
        <NotificationBadge count={3}>
            <IconButton aria-label="Handlekurv">
                <Icon>shopping_bag</Icon>
            </IconButton>
        </NotificationBadge>
        <NotificationBadge count={3}>
            <Chip variant="filter">Chip</Chip>
        </NotificationBadge>
        <Tag>
            I en tag
            <NotificationBadge count={3} hideCounter />
        </Tag>
        <NotificationBadge count={3} />
    </Flex>
);
