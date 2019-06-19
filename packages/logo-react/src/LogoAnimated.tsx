import React, { useEffect, useState } from "react";
import { LogoMain, LogoSymbol } from ".";

export const LogoAnimated = () => {
    const [showSymbol, toggleSymbol] = useState(true);

    const handleScroll = () => {
        if ((window.scrollY === 0) !== showSymbol) {
            toggleSymbol(!showSymbol);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showSymbol]);

    return (
        <div className="jkl-logo__animated">
            <LogoSymbol
                width={65}
                className={`jkl-logo__animated--symbol jkl-logo__animated--symbol--${
                    !showSymbol ? "no-rotation" : "rotate"
                }`}
            />
            <LogoMain className={`jkl-logo__animated--main jkl-logo__animated--main-hide-${!showSymbol}`} />
        </div>
    );
};
