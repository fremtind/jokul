import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "../src";
import "@fremtind/jkl-grid/grid.css";
import "@fremtind/jkl-core/build/css/core.css";
import "@fremtind/jkl-footer/footer.css";

const FooterDemo = () => <Footer />;

var mountNode = document.getElementById("app");
ReactDOM.render(<FooterDemo />, mountNode);
