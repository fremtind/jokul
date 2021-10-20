import React, { VFC } from "react";
import PropTypes from "prop-types";
import { DevExample } from "../../../doc-utils";

import "../core.scss";
import "./style.scss";
import Colors from "./Colors/Colors";
import { LinkExample } from "./Link/LinkExample";
import { NavLinkExample } from "./Link/NavLinkExample";
import { SpacingScaleTable } from "./Spacing/Spacing";
import { NormalExample, SmallExample, LargeExample } from "./Typography/Typography";
import { Keyboard } from "./Mixins/Keyboard";

interface BoxProps {
    type: "color" | "spacing";
    number: number;
}

const Box = ({ type, number }: BoxProps) => <div className={`demo-${type}--${number + 1}`} />;

Box.propTypes = {
    type: PropTypes.string,
    number: PropTypes.number,
};

export const Typo: VFC = () => (
    <section className="jkl-spacing-xs--top jkl-spacing-xs--bottom">
        <h1 className="jkl-h1">Heading1</h1>
        <h2 className="jkl-h2">Heading2</h2>
        <h3 className="jkl-h3">Heading3</h3>
        <h4 className="jkl-h4">Heading4</h4>
        <p className="jkl-lead">Lead paragraph</p>
        <p className="jkl-body">Paragraph</p>
        <p className="jkl-small-text">Small paragraph</p>
    </section>
);

export const Spacing: VFC = () => (
    <section className="jkl-spacing-xs--top jkl-spacing-xs--bottom">
        <h1 className="jkl-h1">Spacing</h1>

        <div className="demo-wrapper">
            {[...Array(10)].map((_, idx) => (
                <Box key={idx} type="spacing" number={idx} />
            ))}
        </div>
    </section>
);

const Example: VFC = () => (
    <section className="jkl-spacing-xs--top jkl-spacing-xs--bottom">
        <DevExample component={LinkExample} knobs={{ boolProps: ["Invertert", "Ekstern"] }} />
        <DevExample component={NavLinkExample} knobs={{ boolProps: ["Invertert", "Aktiv", "Back"] }} />
        <Colors />
        <SpacingScaleTable />
        <NormalExample />
        <SmallExample />
        <LargeExample />
        <Keyboard />
    </section>
);

export default Example;
