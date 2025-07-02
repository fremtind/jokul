import { Flex } from "@fremtind/jokul/flex";
import styles from "../blogpost.module.scss";

type BlogHeaderProps = {
    name?: string;
    description?: string;
};

export const BlogHeader = ({ name, description }: BlogHeaderProps) => {
    return (
        <Flex as="header" className={styles.header}>
            {name && (
                <h1 className={styles.name} lang="en">
                    {name}
                </h1>
            )}
            {description && (
                <p className={styles.short_description}>{description}</p>
            )}
        </Flex>
    );
};
