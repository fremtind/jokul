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
            <img
                className={styles.example_card_image}
                src={imageUrl}
                alt={name}
            />
        </div>
    );
};
