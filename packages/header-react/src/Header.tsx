import React, { ReactNode, useState, useEffect } from "react";

interface HeaderProps {
    start?: ReactNode;
    center?: ReactNode;
    end?: ReactNode;
    withAnimation?: boolean;
}

export const Header = ({ start, center, end, withAnimation = true }: HeaderProps) => {
    const [isTop, setIsTop] = useState(window.scrollY === 0);

    useEffect(() => {
        const setScrollStatus = () => {
            if ((window.scrollY === 0) !== isTop) {
                setIsTop(!isTop);
            }
        };
        if (!withAnimation) {
            return () => null;
        }
        window.addEventListener("scroll", setScrollStatus);
        return () => {
            window.removeEventListener("scroll", setScrollStatus);
        };
    }, [isTop]);

    const showLarge = !(!isTop || !withAnimation);

    return (
        <>
            <header className={`jkl-header ${showLarge ? "jkl-header--large" : ""}`}>
                <div className={`jkl-header__content ${showLarge ? "jkl-header__content--large" : ""}`}>{start}</div>
                <div className={`jkl-header__content ${showLarge ? "jkl-header__content--large" : ""}`}>{center}</div>
                <div className={`jkl-header__content ${showLarge ? "jkl-header__content--large" : ""}`}>{end}</div>
            </header>
            <aside className="jkl-header__padding" />
        </>
    );
};
