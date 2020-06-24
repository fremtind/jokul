import React, { useRef } from "react";
import "./colors.scss";

type colors =
    | "svart"
    | "hvit"
    | "gra-10"
    | "gra-20"
    | "gra-30"
    | "gra-40"
    | "gra-50"
    | "gra-60"
    | "gra-70"
    | "gra-80"
    | "gra-90"
    | "gra-100"
    | "varde-10"
    | "varde-20"
    | "varde-30"
    | "varde-40"
    | "varde-50"
    | "varde"
    | "varde-60"
    | "varde-70"
    | "varde-80"
    | "varde-90"
    | "varde-100"
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
        <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${color}`}></span>
        <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${color}`}></span>
        <span className="jkl-color-box__text jkl-body">${color}</span>
    </button>
);

interface MultiColorProps {
    colors: colors[];
    handleClick: (color: string) => void;
}

const MultiColorBox: React.FC<MultiColorProps> = ({ colors, handleClick }) => (
    <button type="button" onClick={() => handleClick(`${colors[0]}, $${colors[1]}`)} className="jkl-color-box__wrapper">
        <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${colors[0]}`}></span>
        <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${colors[1]}`}></span>
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
            <ColorGroup title="Gråtoner">
                <ColorBox handleClick={copyCodeToClipboard} color="hvit" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-10" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-20" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-30" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-40" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-50" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-60" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-70" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-80" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-90" />
                <ColorBox handleClick={copyCodeToClipboard} color="gra-100" />
                <ColorBox handleClick={copyCodeToClipboard} color="svart" />
            </ColorGroup>
            <ColorGroup title="Vardetoner">
                <ColorBox handleClick={copyCodeToClipboard} color="varde-10" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-20" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-30" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-40" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-50" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-60" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-70" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-80" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-90" />
                <ColorBox handleClick={copyCodeToClipboard} color="varde-100" />
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
