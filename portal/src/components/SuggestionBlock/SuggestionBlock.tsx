import { Link } from "@fremtind/jkl-core";
import { QuestionIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { Paragraph } from "../Typography";

import "./suggestion-block.scss";

export interface SuggestionBlockProps {
    variant: "komponent";
    component?: string;
}

export const SuggestionBlock: FC<SuggestionBlockProps> = ({
    variant,
    component,
}) => {
    return (
        <section className="suggestion-block">
            <div className="suggestion-block__content">
                <QuestionIcon />
                <Paragraph>{options[variant].text}</Paragraph>
            </div>
            <Link
                href={`${options[variant].link}+<${component}/>`}
                className="suggestion-block__link"
                target="_blank"
                aria-label="Åpne skjema for innspill i ny fane"
            >
                Gi oss tilbakemelding
            </Link>
        </section>
    );
};

const issueUrl = "https://github.com/fremtind/jokul/issues/new";

const options: {
    [key: string]: {
        text: string;
        link: string;
    };
} = {
    komponent: {
        text: "Har du innspill til komponenten?",
        link: `${issueUrl}?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+`,
    },
};
