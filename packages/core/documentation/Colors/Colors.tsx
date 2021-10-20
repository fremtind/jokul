import React, { FC, useRef, VFC, useState, useEffect } from "react";
import { ContentToggle } from "../../../content-toggle-react";
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

const generateColorVariableName = (color: string) => `jkl.$color-${color}`;

const useTimedToggle = (): [boolean, () => void] => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (toggle) {
            timeoutId = setTimeout(() => {
                setToggle(false);
            }, 1500);
        }

        return () => clearTimeout(timeoutId);
    }, [toggle]);

    return [toggle, () => setToggle(true)];
};

const ColorBox: VFC<Props> = ({ color, handleClick }) => {
    const [copied, didCopy] = useTimedToggle();

    return (
        <button
            type="button"
            onClick={() => {
                didCopy();
                handleClick(generateColorVariableName(color));
            }}
            className="jkl-color-box__wrapper"
        >
            <span className="jkl-color-box__multi">
                <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${color}`}></span>
                <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${color}`}></span>
            </span>
            <ContentToggle
                secondary={<span className="jkl-color-box__text jkl-body">Kopiert!</span>}
                showSecondary={copied}
                className="jkl-color-box__content-toggle"
            >
                <span className="jkl-color-box__text jkl-body">${color}</span>
            </ContentToggle>
        </button>
    );
};

interface MultiColorProps {
    colors: colors[];
    handleClick: (color: string) => void;
}

const MultiColorBox: VFC<MultiColorProps> = ({ colors, handleClick }) => {
    const [copied, didCopy] = useTimedToggle();

    return (
        <button
            type="button"
            onClick={() => {
                didCopy();
                handleClick(`${generateColorVariableName(colors[0])}, $${generateColorVariableName(colors[1])}`);
            }}
            className="jkl-color-box__wrapper"
        >
            <span className="jkl-color-box__multi">
                <span className={`jkl-color-box jkl-color-box--left jkl-color-box--${colors[0]}`}></span>
                <span className={`jkl-color-box jkl-color-box--right jkl-color-box--${colors[1]}`}></span>
            </span>
            <ContentToggle
                secondary={<span className="jkl-color-box__text jkl-body">Kopiert!</span>}
                showSecondary={copied}
                className="jkl-color-box__content-toggle jkl-color-box__content-toggle--multi"
            >
                <div className="jkl-color-box__text-wrapper">
                    <span className="jkl-color-box__text jkl-body">${colors[0]}</span>
                    <span className="jkl-color-box__text jkl-body">${colors[1]}</span>
                </div>
            </ContentToggle>
        </button>
    );
};

interface ColorProps {
    title: string;
}

const ColorGroup: FC<ColorProps> = ({ title, children }) => (
    <section className="jkl-colors__section">
        <h2 className="jkl-title-small jkl-spacing-2xs--bottom">{title}</h2>
        {children}
    </section>
);

const Colors: VFC = () => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const copyCodeToClipboard = (color: string) => {
        if (ref.current) {
            ref.current.value = `${color}`;
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
