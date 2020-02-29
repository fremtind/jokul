import React from "react";

interface Props {
    className?: string;
    width: number;
    height: number;
    contextRef: (context: CanvasRenderingContext2D | null) => void;
}

export function PureCanvas({ className, width, height, contextRef }: Props) {
    return (
        <canvas
            className={className}
            width={width}
            height={height}
            ref={(node) => (node ? contextRef(node.getContext("2d")) : null)}
        />
    );
}
