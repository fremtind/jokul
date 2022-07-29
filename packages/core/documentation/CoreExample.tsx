import PropTypes from "prop-types";
import React, { FC } from "react";
import { DevExample } from "../../../doc-utils";
import "../core.scss";
import "./style.scss";
import { LinkExample, linkExampleCode, linkExampleKnobs } from "./Link/LinkExample";
import { NavLinkExample, navLinkExampleCode, navLinkExampleKnobs } from "./Link/NavLinkExample";
import { Keyboard } from "./Mixins/Keyboard";
import { SpacingScaleTable } from "./Spacing/Spacing";
import { NormalExample, SmallExample, LargeExample } from "./Typography/Typography";

interface BoxProps {
    type: "color" | "spacing";
    number: number;
}

const Box = ({ type, number }: BoxProps) => <div className={`demo-${type}--${number + 1}`} />;

Box.propTypes = {
    type: PropTypes.string,
    number: PropTypes.number,
};

export const Typo: FC = () => (
    <section className="jkl-spacing-2xl--top jkl-spacing-2xl--bottom">
        <h1 className="jkl-h1">Heading1</h1>
        <h2 className="jkl-h2">Heading2</h2>
        <h3 className="jkl-h3">Heading3</h3>
        <h4 className="jkl-h4">Heading4</h4>
        <p className="jkl-lead">Lead paragraph</p>
        <p className="jkl-body">Paragraph</p>
        <p className="jkl-small-text">Small paragraph</p>
    </section>
);

export const Spacing: FC = () => (
    <section className="jkl-spacing-2xl--top jkl-spacing-2xl--bottom">
        <h1 className="jkl-h1">Spacing</h1>

        <div className="demo-wrapper">
            {[...Array(10)].map((_, idx) => (
                <Box key={idx} type="spacing" number={idx} />
            ))}
        </div>
    </section>
);

export const CoreExample: FC = () => (
    <section className="jkl-spacing-2xl--top jkl-spacing-2xl--bottom">
        <DevExample component={LinkExample} knobs={linkExampleKnobs} codeExample={linkExampleCode} />
        <DevExample component={NavLinkExample} knobs={navLinkExampleKnobs} codeExample={navLinkExampleCode} />
        <SpacingScaleTable />
        <NormalExample />
        <SmallExample />
        <LargeExample />
        <Keyboard />
    </section>
);
