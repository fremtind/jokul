import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./HeroImage.scss";

interface Props {
    title: string;
}

const HeroImage: React.FC<Props> = ({ title, children }) => {
    return (
        <div className="jkl-portal-fullView">
            <div className="jkl-portal-hero">
                <StaticImage src="./Assets/mountain.jpg" placeholder="blurred" className="" alt="Fjellandskap" />
                <button
                    onClick={() =>
                        window?.scrollBy({
                            top: window.innerHeight,
                            behavior: "smooth",
                        })
                    }
                    className="jkl-portal-hero__card"
                >
                    <h1 className="jkl-title jkl-spacing--bottom-2">{title}</h1>
                    <p className="jkl-body">{children}</p>
                    <div className="jkl-portal-hero__card__arrow jkl-title-small jkl-spacing--top-1">↓</div>
                </button>
            </div>
        </div>
    );
};

export default HeroImage;
