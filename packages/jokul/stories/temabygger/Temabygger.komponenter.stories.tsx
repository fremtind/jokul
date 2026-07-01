import type { StoryObj } from "@storybook/nextjs";
import React from "react";
import { fn } from "storybook/test";
import { Button } from "../../src/components/button/Button.jsx";
import { Card } from "../../src/components/card/Card.jsx";
import { Checkbox } from "../../src/components/checkbox/Checkbox.jsx";
import { Flex } from "../../src/components/flex/Flex.jsx";
import { QuestionIcon } from "../../src/components/icon/index.js";
import { FieldGroup } from "../../src/components/input-group/FieldGroup.jsx";
import { Link } from "../../src/components/link/Link.jsx";
import { List } from "../../src/components/list/List.jsx";
import {
    CheckListItem,
    CrossListItem,
} from "../../src/components/list/ListItem.jsx";
import { Message } from "../../src/components/message/Message.jsx";
import { Tag } from "../../src/components/tag/Tag.jsx";
import { TextInput } from "../../src/components/text-input/TextInput.jsx";
import { Toast } from "../../src/components/toast/Toast.jsx";
import type {
    ToastContent,
    ToastOptions,
} from "../../src/components/toast/types.js";
import { ToggleSwitch } from "../../src/components/toggle-switch/ToggleSwitch.jsx";
import { Text } from "../../src/components/typography/Text.jsx";

type ToastStoryArgs = Omit<ToastOptions, "timeout"> & {
    content: ToastContent;
    key: string;
    timeout?: number;
};

const successToast = {
    key: "toast-success",
    variant: "success",
    content: {
        title: "Toast success!",
        content: "Her kommer relevant informasjon.",
    },
} satisfies ToastStoryArgs;

const meta = {
    title: "Skjermbilder/Temabygger",
};

export default meta;
type Story = StoryObj<typeof meta>;

const state = {
    add: fn(() => "toast-story"),
    close: fn(),
    pauseAll: fn(),
    remove: fn(),
    resumeAll: fn(),
    visibleToasts: [],
};

export const KomponentOversikt: Story = {
    render: () => (
        <Flex>
            <Card padding="l">
                <Flex gap="32" direction="column">
                    <Flex direction="column" gap="4">
                        <Text size="l">Text default</Text>
                        <Text
                            size="m"
                            style={{ color: "var(--jkl-color-text-subdued)" }}
                        >
                            Text subdued
                        </Text>
                    </Flex>
                    <Flex>
                        <Link>Link</Link>
                    </Flex>

                    <Flex direction="column" gap="16">
                        <TextInput label="Default" placeholder="Placeholder" />
                        <TextInput
                            label="Active"
                            placeholder="Placeholder"
                            tooltip={<QuestionIcon />}
                            data-focused="true"
                        />
                        <TextInput
                            label="Label"
                            placeholder="Placeholder"
                            data-invalid="true"
                            errorLabel="Error"
                        />
                    </Flex>

                    <Flex>
                        <FieldGroup legend="Label">
                            <Checkbox name="skrivnoeher" value="skriv noe her">
                                Skriv noe her
                            </Checkbox>
                            <Checkbox
                                name="skrivnoeher"
                                value="skriv noe her"
                                checked={true}
                            >
                                Skriv noe her
                            </Checkbox>
                            <Checkbox name="skrivnoeher" value="skriv noe her">
                                Skriv noe her
                            </Checkbox>
                        </FieldGroup>
                    </Flex>

                    <Flex direction="column">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </Flex>
                    <Flex>
                        <List>
                            <CheckListItem>Dekker</CheckListItem>
                            <CrossListItem>Dekker ikke</CrossListItem>
                        </List>
                    </Flex>

                    <Flex>
                        <ToggleSwitch aria-pressed="true">
                            Toggle Switch
                        </ToggleSwitch>
                    </Flex>

                    <Flex>
                        <Tag variant="neutral">Neutral</Tag>
                        <Tag variant="success">Success</Tag>
                        <Tag variant="info">Info</Tag>
                        <Tag variant="warning">Warning</Tag>
                        <Tag variant="error">Error</Tag>
                    </Flex>

                    <Flex>
                        {" "}
                        <Message variant="info" title="Info">
                            Her kommer relevant informasjon.
                        </Message>
                    </Flex>

                    <Flex>
                        {" "}
                        <Toast state={state} toast={successToast} />
                    </Flex>
                </Flex>
            </Card>
            <Card padding="l" outlined={true}>
                <Flex gap="32" direction="column">
                    <Flex direction="column" gap="4">
                        <Text size="l">Text default</Text>
                        <Text
                            size="m"
                            style={{ color: "var(--jkl-color-text-subdued)" }}
                        >
                            Text subdued
                        </Text>
                    </Flex>
                    <Flex>
                        <Link>Link</Link>
                    </Flex>

                    <Flex direction="column" gap="16">
                        <TextInput label="Default" placeholder="Placeholder" />
                        <TextInput
                            label="Active"
                            placeholder="Placeholder"
                            tooltip={<QuestionIcon />}
                            data-focused="true"
                        />
                        <TextInput
                            label="Label"
                            placeholder="Placeholder"
                            data-invalid="true"
                            errorLabel="Error"
                        />
                    </Flex>

                    <Flex>
                        <FieldGroup legend="Label">
                            <Checkbox name="skrivnoeher" value="skriv noe her">
                                Skriv noe her
                            </Checkbox>
                            <Checkbox
                                name="skrivnoeher"
                                value="skriv noe her"
                                checked={true}
                            >
                                Skriv noe her
                            </Checkbox>
                            <Checkbox name="skrivnoeher" value="skriv noe her">
                                Skriv noe her
                            </Checkbox>
                        </FieldGroup>
                    </Flex>

                    <Flex direction="column">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </Flex>
                    <Flex>
                        <List>
                            <CheckListItem>Dekker</CheckListItem>
                            <CrossListItem>Dekker ikke</CrossListItem>
                        </List>
                    </Flex>

                    <Flex>
                        <ToggleSwitch aria-pressed="true">
                            Toggle Switch
                        </ToggleSwitch>
                    </Flex>

                    <Flex>
                        <Tag variant="neutral">Neutral</Tag>
                        <Tag variant="success">Success</Tag>
                        <Tag variant="info">Info</Tag>
                        <Tag variant="warning">Warning</Tag>
                        <Tag variant="error">Error</Tag>
                    </Flex>

                    <Flex>
                        {" "}
                        <Message variant="info" title="Info">
                            Her kommer relevant informasjon.
                        </Message>
                    </Flex>

                    <Flex>
                        {" "}
                        <Toast state={state} toast={successToast} />
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    ),
};
