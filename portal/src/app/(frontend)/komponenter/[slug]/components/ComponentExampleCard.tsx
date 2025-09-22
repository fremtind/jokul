import { Card, CardImage } from "@fremtind/jokul/card";

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
        <div className={styles.example_card_image_wrapper}>
            <Card>
                <img
                    className={styles.example_card_image}
                    src={imageUrl}
                    alt={name}
                />
            </Card>
        </div>
    );
};
