import { WithChildren } from "@fremtind/jkl-core";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import "./HeroImage.scss";

interface Props extends WithChildren {
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
                    <h1 className="jkl-title jkl-spacing-xl--bottom">{title}</h1>
                    <p className="jkl-body">{children}</p>
                    <div className="jkl-portal-hero__card__arrow jkl-title-small jkl-spacing-l--top">↓</div>
                </button>
            </div>
        </div>
    );
};

export default HeroImage;
