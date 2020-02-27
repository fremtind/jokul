import React from "react";
import classNames from "classnames";
import { PureCanvas } from "./PureCanvas";
import "./princible-diamond.scss";

export enum States {
    None = 0,
    Elevated = 1,
    Movement = 2,
    Clarity = 3,
}

export class PrincipleDiamond extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.draw = this.draw.bind(this);
        this.generateClasses = this.generateClasses.bind(this);
    }

    componentDidUpdate() {
        this.draw();
    }

    saveContext(ctx) {
        this.ctx = ctx;
        this.size = [this.ctx.canvas.width, this.ctx.canvas.height];
        this.tileSize = this.size[0] / this.props.tiles;
        this.draw();
    }

    draw() {
        const { tileSize, ctx, size } = this;
        const { tiles, minScale, maxScale } = this.props;

        const width = size[0];
        const height = size[1];

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = "black";

        const time = Date.now();

        for (let x = 0; x < tiles; x++) {
            for (let y = 0; y < tiles; y++) {
                const baseScale = Math.abs(Math.sin(time * 0.001 + x * 50 + y * 50));

                const nBaseScale = baseScale * (maxScale - minScale) + minScale;
                const position = tileSize;
                const size = nBaseScale * tileSize;

                ctx.fillRect(
                    x * position - size / 2 + tileSize / 2,
                    y * position - size / 2 + tileSize / 2,
                    size,
                    size,
                );
            }
        }

        if (this.animationTimeout) {
            window.clearTimeout(this.animationTimeout);
        }

        this.animationTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(this.draw);
        }, 1000 / 30);
    }

    generateClasses = (baseClass: string) =>
        classNames(baseClass, {
            [baseClass + "--elevated"]: this.props.principleState === 1,
            [baseClass + "--movement"]: this.props.principleState === 2,
            [baseClass + "--clarity"]: this.props.principleState === 3,
        });

    render() {
        return (
            <PureCanvas
                className={this.generateClasses("jkl-portal-principle-diamond__" + this.props.type)}
                contextRef={this.saveContext}
                height="250"
                width="250"
            />
        );
    }

    static defaultProps = {
        tiles: 7,
        minScale: 0.2,
        maxScale: 0.8,
    };
}
