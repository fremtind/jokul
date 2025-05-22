import { Flex } from "@fremtind/jokul/components/flex";
import styles from "../blogpost.module.scss";

type BlogHeaderProps = {
    name?: string;
    description?: string;
};

export const BlogHeader = ({ name, description }: BlogHeaderProps) => {
    return (
        <Flex
            as="header"
            className={styles.header}
            justifyContent="space-between"
        >
            <div>
                {name && (
                    <h1 className={styles.name} lang="en">
                        {name}
                    </h1>
                )}
                {description && (
                    <p className={styles.short_description}>{description}</p>
                )}
            </div>
        </Flex>
    );
};
