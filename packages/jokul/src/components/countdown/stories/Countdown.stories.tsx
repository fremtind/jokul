import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/Flex.js";
import {
    Modal,
    ModalActions,
    ModalBody,
    ModalContainer,
    ModalOverlay,
    ModalTitle,
} from "../../modal/index.js";
import { useModal } from "../../modal/useModal.js";
import { Countdown as CountdownComponent } from "../Countdown.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Countdown",
    component: CountdownComponent,
    args: {
        from: 5000,
        isPaused: false,
    },
} satisfies Meta<typeof CountdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Countdown: Story = {
    decorators: (Story) => {
        const [key, setKey] = useState(0);

        return (
            <Flex direction="column" gap="m">
                <div key={key}>
                    <Story />
                </div>
                <Button variant="secondary" onClick={() => setKey(Date.now())}>
                    Gjenta
                </Button>
            </Flex>
        );
    },
};

export const SessionTimeout: Story = {
    args: {
        from: 60000,
    },
    render: (args) => {
        const [key, setKey] = useState(0);
        const [sessionTimeout, setSessionTimeout] = useState(
            args.from / 1000 || 0,
        );
        const heading = "Er du fortsatt der?";
        const [instance, { title, overlay, container, modal }] = useModal({
            title: heading,
            role: "dialog",
        });

        useEffect(() => {
            if (sessionTimeout <= 0) {
                return;
            }
            setTimeout(() => setSessionTimeout(sessionTimeout - 1), 1000);
        }, [sessionTimeout]);

        useEffect(() => {
            if (!instance) {
                return;
            }
            instance.show();
        }, [instance]);

        return (
            <ModalContainer {...container} key={key}>
                <ModalOverlay {...overlay} />
                <Modal {...modal} role="document" style={{ minWidth: "400px" }}>
                    <ModalTitle {...title}>{heading}</ModalTitle>
                    <ModalBody>
                        <Flex direction="column">
                            <p>
                                Du blir logget ut om {sessionTimeout} sekund(er)
                            </p>
                            <CountdownComponent {...args} />
                        </Flex>
                    </ModalBody>
                    <ModalActions>
                        <Button
                            variant="primary"
                            onClick={() => setKey(Date.now())}
                        >
                            Jeg er her!
                        </Button>
                        <Button>Logg ut</Button>
                    </ModalActions>
                </Modal>
            </ModalContainer>
        );
    },
};
