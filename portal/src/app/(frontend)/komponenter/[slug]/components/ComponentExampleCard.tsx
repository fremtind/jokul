import { Card, CardImage } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";

import styles from "./componentExampleCard.module.scss";

type ComponentExampleCard = {
    name: string;
    imageUrl: string;
};

export const ComponentExampleCard = ({
    name,
    imageUrl,
}: ComponentExampleCard) => {
    return (
        <>
            <Card padding="m">
                <div className={styles.example_card_image_wrapper}>
                    <CardImage
                        className={styles.example_card_image}
                        src={imageUrl}
                        alt={name}
                        placement="top"
                    />
                </div>
            </Card>
        </>
    );
};
