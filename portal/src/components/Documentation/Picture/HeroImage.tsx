import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import "./HeroImage.scss";

interface Props {
    title: string;
}

const HeroImage: React.FC<Props> = ({ title, children }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "Picture/Assets/mountain.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 4096, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <div className="jkl-portal-fullView">
            <div className="jkl-portal-hero">
                {data && <Img className="" fluid={data.file.childImageSharp.fluid} alt="Fjellandskap" />}
                <button
                    onClick={() =>
                        window?.scrollBy({
                            top: window.innerHeight,
                            behavior: "smooth",
                        })
                    }
                    className="jkl-portal-hero__card"
                >
                    <h1 className="jkl-title-large jkl-spacing--bottom-2">{title}</h1>
                    <p className="jkl-body">{children}</p>
                    <div className="jkl-portal-hero__card__arrow jkl-title-small jkl-spacing--top-1">↓</div>
                </button>
            </div>
        </div>
    );
};

export default HeroImage;
