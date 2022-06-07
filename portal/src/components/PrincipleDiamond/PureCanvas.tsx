import React, { FC } from "react";

interface Props {
    className?: string;
    width: number;
    height: number;
    contextRef: (context: CanvasRenderingContext2D | null) => void;
}

export const PureCanvas: FC<Props> = ({ className, width, height, contextRef }) => {
    return (
        <canvas
            className={className}
            width={width}
            height={height}
            ref={(node) => (node ? contextRef(node.getContext("2d")) : null)}
        />
    );
};
