import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./HeroImage.scss";

interface Props {
    title: string;
}

const HeroImage: React.FC<Props> = ({ title, children }) => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "Picture/Assets/mountain.jpg" }) {
                childImageSharp {
                    gatsbyImageData(quality: 80, layout: FULL_WIDTH)
                }
            }
        }
    `);

    return (
        <div className="jkl-portal-fullView">
            <div className="jkl-portal-hero">
                {data && (
                    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} className="" alt="Fjellandskap" />
                )}
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
