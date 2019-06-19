import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../header.scss";

// eslint-disable-next-line
const Header = ({ start, center, end, withAnimation = true }: any) => {
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

const Head = () => (
    <div>
        <Header
            start={<p>Fremtind</p>}
            center={<p>Jøkul</p>}
            end={
                <span role="img" aria-label="burger" style={{ fontSize: "32px" }}>
                    🍔
                </span>
            }
        />
        <div style={{ height: "200vh", backgroundColor: "white" }} />
    </div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Head />, mountNode);
