import React from "react";
import "./keyboard.scss";
import { initTabListener } from "../../src";

initTabListener();

export const Keyboard = () => (
    <div>
        <p className="jkl-body">
            Sjekk hover state med ved å navigere med tastatur, så klikk på knappen og se hoverstate
        </p>
        <button className="keyboard-demo">hest</button>
    </div>
);
