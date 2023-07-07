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
                    <h1 className="title mb-40">{title}</h1>
                    <p className="body">{children}</p>
                    <div className="jkl-portal-hero__card__arrow title-small mt-24">↓</div>
                </button>
            </div>
        </div>
    );
};

export default HeroImage;
