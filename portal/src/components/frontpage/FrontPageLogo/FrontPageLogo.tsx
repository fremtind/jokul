import { Flex } from "@fremtind/jokul/flex";
import { FrontPageLogoText } from "./FrontPageLogoText";
import styles from "./frontPageLogo.module.scss";

interface FrontPageLogoProps {
    text: string;
    delay: number;
}

export const FrontPageLogo = ({ text, delay }: FrontPageLogoProps) => {
    return (
        <Flex
            as="section"
            alignItems="center"
            className={styles.logoText}
            aria-hidden="true"
        >
            <div className={styles.logoTextShell}>
                <div className={styles.logoTextMeasure}>{text}</div>
                <FrontPageLogoText text={text} delay={delay} />
            </div>
        </Flex>
    );
};
