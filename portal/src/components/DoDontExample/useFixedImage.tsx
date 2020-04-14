import { graphql, useStaticQuery } from "gatsby";

export interface FixedImage {
    base64: string;
    src: string;
    srcSet: string;
    height: number;
    width: number;
}

interface ImageNode {
    name: string;
    imageData: {
        fixed: FixedImage;
    };
}

interface QueryResponse {
    response: {
        images: ImageNode[];
    };
}

export function useFixedImage(name: string) {
    const {
        response: { images },
    }: QueryResponse = useStaticQuery(graphql`
        {
            response: allFile {
                images: nodes {
                    name
                    imageData: childImageSharp {
                        fixed(width: 395) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);
    const image = images.filter((node: ImageNode) => node.name === name)[0];

    return image.imageData.fixed;
}
