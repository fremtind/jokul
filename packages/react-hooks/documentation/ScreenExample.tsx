import React, { FC } from "react";
import { unicode } from "../../constants-util/src";
import { useScreen } from "../src";

export const ScreenExample: FC = () => {
    const screen = useScreen();

    const getDeviceName = () => {
        switch (true) {
            case screen.isSmallDevice:
                return "liten";
            case screen.isMediumDevice:
                return "medium";
            case screen.isLargeDevice:
                return "stor";
            case screen.isXlDevice:
                return "veldig stor";
            default:
                return "";
        }
    };

    const getOrientation = () => {
        switch (true) {
            case screen.isLandscape:
                return ` i landskaps${unicode.shy}modus`;
            case screen.isPortrait:
                return ` i portrett${unicode.shy}modus`;
            default:
                return "";
        }
    };

    return (
        <p className="jkl-heading-3 jkl-spacing-xl--bottom">{`Din dings har en ${getDeviceName()} skjerm${getOrientation()}`}</p>
    );
};

export const screenExampleCode = `const screen = useScreen();

const getDeviceName = () => {
    switch (true) {
        case screen.isSmallDevice:
            return "liten";
        case screen.isMediumDevice:
            return "medium";
        case screen.isLargeDevice:
            return "stor";
        case screen.isXlDevice:
            return "veldig stor";
        default:
            return "";
    }
};

const getOrientation = () => {
    switch (true) {
        case screen.isLandscape:
            return \` i landskapsmodus\`;
        case screen.isPortrait:
            return \` i portrettmodus\`;
        default:
            return "";
    }
};

return (
    <p className="jkl-heading-3 jkl-spacing-xl--bottom">
        {\`Din dings har en \${getDeviceName()} skjerm\${getOrientation()}\`}
    </p>
);`;
