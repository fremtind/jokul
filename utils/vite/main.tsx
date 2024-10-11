import React from "react";
import ReactDOM from "react-dom/client";
import { initTabListener } from "../../..";
import Example from "./Example";

initTabListener();

ReactDOM.createRoot(document.getElementById("root")!).render(<Example />);
