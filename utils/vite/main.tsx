import ReactDOM from "react-dom/client";
import { initTabListener } from "../../../utilities/tabListener.js";
import Example from "./Example.js";

initTabListener();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Example />,
);
