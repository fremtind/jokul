import React, { useRef } from "react";
import "./colors.scss";

type colors =
    | "hvit"
    | "snohvit"
    | "sand"
    | "dis"
    | "varde"
    | "svaberg"
    | "stein"
    | "fjellgra"
    | "skifer"
    | "granitt"
    | "svart"
    | "suksess"
    | "info"
    | "advarsel"
    | "feil"
    | "suksess--darkbg"
    | "info--darkbg"
    | "advarsel--darkbg"
    | "feil--darkbg";

interface Props {
    color: colors;
    handleClick: (color: string) => void;
}

const ColorBox: React.FC<Props> = ({ color, handleClick }) => (
    <button type="button" onClick={() => handleClick(color)} className="jkl-color-box__wrapper">
        <span className="jkl-color-box__multi">
            <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${color}`}></span>
            <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${color}`}></span>
        </span>
        <span className="jkl-color-box__text jkl-body">${color}</span>
    </button>
);

interface MultiColorProps {
    colors: colors[];
    handleClick: (color: string) => void;
}

const MultiColorBox: React.FC<MultiColorProps> = ({ colors, handleClick }) => (
    <button type="button" onClick={() => handleClick(`${colors[0]}, $${colors[1]}`)} className="jkl-color-box__wrapper">
        <span className="jkl-color-box__multi">
            <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${colors[0]}`}></span>
            <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${colors[1]}`}></span>
        </span>
        <span className="jkl-color-box__text jkl-body">${colors[0]}</span>
        <span className="jkl-color-box__text jkl-body">${colors[1]}</span>
    </button>
);

interface ColorProps {
    title: string;
}

const ColorGroup: React.FC<ColorProps> = ({ title, children }) => (
    <section className="jkl-colors__section">
        <h2 className="jkl-title-small jkl-spacing--bottom-2">{title}</h2>
        {children}
    </section>
);

const Colors = () => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const copyCodeToClipboard = (color: string) => {
        if (ref.current) {
            ref.current.value = `$${color}`;
            ref.current.select();
            document.execCommand("copy");
        }
    };

    return (
        <section style={{ display: "flex", flexWrap: "wrap" }}>
            <textarea ref={ref} className="jkl-color__copy" />
            <ColorGroup title="Farger">
                <ColorBox handleClick={copyCodeToClipboard} color="hvit" />
                <ColorBox handleClick={copyCodeToClipboard} color="snohvit" />
                <ColorBox handleClick={copyCodeToClipboard} color="sand" />
                <ColorBox handleClick={copyCodeToClipboard} color="dis" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde" />
                <ColorBox handleClick={copyCodeToClipboard} color="svaberg" />
                <ColorBox handleClick={copyCodeToClipboard} color="stein" />
                <ColorBox handleClick={copyCodeToClipboard} color="fjellgra" />
                <ColorBox handleClick={copyCodeToClipboard} color="skifer" />
                <ColorBox handleClick={copyCodeToClipboard} color="granitt" />
                <ColorBox handleClick={copyCodeToClipboard} color="svart" />
            </ColorGroup>
            <ColorGroup title="Bruksfarger">
                <MultiColorBox handleClick={copyCodeToClipboard} colors={["suksess", "suksess--darkbg"]} />
                <MultiColorBox handleClick={copyCodeToClipboard} colors={["info", "info--darkbg"]} />
                <MultiColorBox handleClick={copyCodeToClipboard} colors={["advarsel", "advarsel--darkbg"]} />
                <MultiColorBox handleClick={copyCodeToClipboard} colors={["feil", "feil--darkbg"]} />
            </ColorGroup>
        </section>
    );
};

export default Colors;
