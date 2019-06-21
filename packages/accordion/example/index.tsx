import React from "react";
import ReactDOM from "react-dom";
import "../accordion.scss";

const App = () => (
    <>
        <div className="jkl-accordion" style={{ width: 700 }}>
            <div className="jkl-accordion__item jkl-accordion__item--expanded">
                <button className="jkl-accordion__item-title">
                    <div className="jkl-accordion__item-title-text">Tekst som står her</div>
                    <div className="jkl-accordion__item-title-icon" />
                </button>
                <div className="jkl-accordion__item-content">
                    Now let&lsquo;s use some more properties. Consider a list of 6 items, all with a fixed dimensions in
                    a matter of aesthetics but they could be auto-sized. We want them to be evenly and nicely
                    distributed on the horizontal axis so that when we resize the browser, everything is fine (without
                    media queries!).
                </div>
            </div>
            <div className="jkl-accordion__item">
                <button className="jkl-accordion__item-title">
                    <div className="jkl-accordion__item-title-text">Second item</div>
                    <div className="jkl-accordion__item-title-icon" />
                </button>
                <div className="jkl-accordion__item-content">
                    <p>This is a paragraph</p>
                    <p>Another paragraph&hellip;</p>
                </div>
            </div>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
