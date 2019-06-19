import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "../src";
import "@fremtind/jkl-grid/build/css/grid.css";
import "@fremtind/jkl-core/build/css/typography/typography.css";
import "@fremtind/jkl-footer";

const FooterDemo = () => <Footer />;

var mountNode = document.getElementById("app");
ReactDOM.render(<FooterDemo />, mountNode);
