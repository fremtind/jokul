import React from "react";
import ReactDOM from "react-dom";
import "../accordion.scss";

const App = () => (
    <>
        <div className="jkl-accordion" style={{ width: 700 }}>
            <div className="jkl-accordion-item jkl-accordion-item--expanded">
                <button className="jkl-accordion-item__title">
                    <span className="jkl-accordion-item__title-text">
                        Tekst som står her og er så lang at vi får flere linjer som er avhengig av display block
                    </span>
                    <span className="jkl-accordion-item__title-icon"></span>
                </button>
                <div className="jkl-accordion-item__content">
                    Now let&lsquo;s use some more properties. Consider a list of 6 items, all with a fixed dimensions in
                    a matter of aesthetics but they could be auto-sized. We want them to be evenly and nicely
                    distributed on the horizontal axis so that when we resize the browser, everything is fine (without
                    media queries!).
                </div>
            </div>
            <div className="jkl-accordion-item">
                <button className="jkl-accordion-item__title">
                    <span className="jkl-accordion-item__title-text">Second item</span>
                    <span className="jkl-accordion-item__title-icon"></span>
                </button>
                <div className="jkl-accordion-item__content">
                    <p>This is a paragraph</p>
                    <p>Another paragraph&hellip;</p>
                </div>
            </div>
            <div className="jkl-accordion-item">
                <button className="jkl-accordion-item__title">
                    <span className="jkl-accordion-item__title-text">Third item</span>
                    <span className="jkl-accordion-item__title-icon"></span>
                </button>
                <div className="jkl-accordion-item__content">
                    <p>This is a paragraph</p>
                    <p>Another paragraph&hellip;</p>
                </div>
            </div>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
