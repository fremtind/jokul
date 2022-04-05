import React from "react";
import { hydrateRoot } from "react-dom/client";
import Example from "./Example";

const root = document.getElementById("app");

if (!root) {
    throw new Error("Document has no element with ID app for us to attach to");
}

hydrateRoot(root, <Example />);
