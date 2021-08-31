import React from "react";
import PropTypes from "prop-types";
import { DevExample } from "../../../doc-utils";

import "../core.scss";
import "./style.scss";
import Colors from "./Colors/Colors";
import { LinkExample } from "./Link/LinkExample";
import { NavLinkExample } from "./Link/NavLinkExample";
import { ComponentSpacingTable, LayoutSpacingTable } from "./Spacing/Spacing";
import { NormalExample, SmallExample, LargeExample } from "./Typography/Typography";
import { Keyboard } from "./Mixins/Keyboard";

interface BoxProps {
    type: "color" | "component" | "layout";
    number: number;
}

const Box = ({ type, number }: BoxProps) => <div className={`demo-${type}--${number + 1}`} />;

Box.propTypes = {
    type: PropTypes.string,
    number: PropTypes.number,
};

export const Typo = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <h1 className="jkl-h1">Heading1</h1>
        <h2 className="jkl-h2">Heading2</h2>
        <h3 className="jkl-h3">Heading3</h3>
        <h4 className="jkl-h4">Heading4</h4>
        <p className="jkl-lead">Lead paragraph</p>
        <p className="jkl-body">Paragraph</p>
        <p className="jkl-small-text">Small paragraph</p>
    </section>
);

export const Spacing = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <h1 className="jkl-h1">Spacing</h1>
        <h2 className="jkl-h2">Layout spacing</h2>
        <div className="demo-wrapper">
            {[...Array(7)].map((_, idx) => (
                <Box key={idx} type="layout" number={idx} />
            ))}
        </div>
        <h2 className="jkl-h2">Component spacing</h2>
        <div className="demo-wrapper">
            {[...Array(9)].map((_, idx) => (
                <Box key={idx} type="component" number={idx} />
            ))}
        </div>
    </section>
);

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <DevExample component={LinkExample} knobs={{ boolProps: ["Invertert", "Ekstern"] }} />
        <DevExample component={NavLinkExample} knobs={{ boolProps: ["Invertert", "Aktiv", "Back"] }} />
        <Colors />
        <ComponentSpacingTable />
        <LayoutSpacingTable />
        <NormalExample />
        <SmallExample />
        <LargeExample />
        <Keyboard />
    </section>
);

export default Example;
