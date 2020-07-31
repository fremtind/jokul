import React from "react";
import MediaBox from "./MediaBox";
import { withPrefix } from "gatsby";
interface Props {
    src: string;
    placeholder: string;
    rightAlign?: boolean;
    caption?: string;
}

const VideoBox: React.FC<Props> = ({ src, placeholder, ...rest }) => {
    return (
        <MediaBox
            media={
                <video
                    className="jkl-portal-media-box__video"
                    src={withPrefix(src)}
                    poster={withPrefix(placeholder)}
                    autoPlay
                    muted
                    loop
                    tabIndex={-1}
                />
            }
            {...rest}
        />
    );
};

export default VideoBox;
