import React, { useState, ReactNode, useCallback } from "react";
import classNames from "classnames";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { ExampleContext } from "./ExampleContext";

type darkMode = "light" | "dark";

export const FlowExample: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<darkMode>("light");
    const [isCompact, setIsCompact] = useState(false);
    const [knobs, setKnobs] = useState<ReactNode[]>([]);
    const toggleTheme = () => (theme === "light" ? setTheme("dark") : setTheme("light"));
    const toggleIsCompact = () => setIsCompact(!isCompact);

    const registerKnobs = useCallback(setKnobs, [setKnobs]);

    const wrapperClassName = classNames({
        "jkl-portal-component-example__example-wrapper": true,
        "jkl-portal-component-example__example-wrapper--dark": theme === "dark",
    });
    return (
        <ExampleContext.Provider value={{ registerKnobs, darkMode: theme === "dark", isCompact }}>
            <section className="jkl-portal-component-example">
                <div data-theme={theme} className={wrapperClassName} data-example-text="Eksempel">
                    {children}
                </div>

                <div data-compactlayout={true} className="jkl-portal-component-example__example-options">
                    <Checkbox
                        name="dark-mode"
                        className="jkl-spacing--top-1"
                        value="dark-mode"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    >
                        Dark mode
                    </Checkbox>
                    <Checkbox
                        name="compact-mode"
                        className="jkl-spacing--top-1"
                        value="compact-mode"
                        checked={isCompact}
                        onChange={toggleIsCompact}
                    >
                        Kompakt
                    </Checkbox>
                    {knobs.map((knob, idx) => (
                        <div key={idx} className="jkl-spacing--top-1">
                            {knob}
                        </div>
                    ))}
                </div>
            </section>
        </ExampleContext.Provider>
    );
};
