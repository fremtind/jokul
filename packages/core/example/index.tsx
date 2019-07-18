import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../core.scss";
import "./style.scss";

interface BoxProps {
    type: "color" | "component" | "layout";
    number: number;
}

const Box = ({ type, number }: BoxProps) => <div className={`demo-${type}--${number + 1}`} />;

Box.propTypes = {
    type: PropTypes.string,
    number: PropTypes.number,
};

const Core = () => (
    <main>
        <section>
            <h1 className="jkl-h1">Colors</h1>
            <div className="demo-wrapper">
                {[...Array(14)].map((_, idx) => (
                    <Box key={idx} type="color" number={idx} />
                ))}
            </div>
        </section>
        <section>
            <h1 className="jkl-h1">Heading1</h1>
            <h2 className="jkl-h2">Heading2</h2>
            <h3 className="jkl-h3">Heading3</h3>
            <h4 className="jkl-h4">Heading4</h4>

            <p className="jkl-lead">Lead paragraph</p>
            <p className="jkl-body">Paragraph</p>
            <p className="jkl-small-text">Small paragraph</p>
        </section>
        <section>
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
    </main>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Core />, mountNode);
