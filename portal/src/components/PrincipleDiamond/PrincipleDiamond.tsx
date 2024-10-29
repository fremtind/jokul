import { tokens, ColorScheme } from "@fremtind/jkl-core";
import classNames from "classnames";
import React from "react";
import { PureCanvas } from "./PureCanvas";
import "./princible-diamond.scss";

export enum States {
    None = 0,
    Elevated = 1,
    Movement = 2,
    Clarity = 3,
}

interface Props {
    minScale: number;
    maxScale: number;
    colorScheme: ColorScheme;
    forcedColors: boolean;
    principleState?: number;
    type?: string;
    tiles: number;
}

export class PrincipleDiamond extends React.Component<Props> {
    lastMinScale: number;
    lastMaxScale: number;
    updatedScaleAt: number;
    animationTimeout?: number;
    tileSize: number;
    tiles: number;
    ctx: CanvasRenderingContext2D | null;
    size: number[];

    constructor(props: Props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.draw = this.draw.bind(this);
        this.generateClasses = this.generateClasses.bind(this);
        this.getScale = this.getScale.bind(this);

        this.lastMinScale = 0;
        this.lastMaxScale = 0;
        this.updatedScaleAt = 0;
        this.tileSize = 0;
        this.tiles = 7;
        this.ctx = null;
        this.size = [250, 250];
    }

    componentDidMount(): void {
        this.lastMinScale = this.props.minScale;
        this.lastMaxScale = this.props.maxScale;
        this.updatedScaleAt = 0;
    }

    componentDidUpdate(nextProps: Props): void {
        if (this.props.minScale !== nextProps.minScale) {
            // console.log("updating minScale", this.lastMinScale, this.props.minScale, nextProps.minScale);
            this.lastMinScale = this.props.minScale;
            this.updatedScaleAt = Date.now();
        }

        if (this.props.maxScale !== nextProps.maxScale) {
            // console.log("updating minScale", this.lastMaxScale, this.props.maxScale, nextProps.maxScale);
            this.lastMaxScale = this.props.maxScale;
            this.updatedScaleAt = Date.now();
        }

        this.draw();
    }

    componentWillUnmount(): void {
        if (this.animationTimeout) {
            window.clearTimeout(this.animationTimeout);
        }
    }

    saveContext(ctx: CanvasRenderingContext2D | null): void {
        if (!ctx) {
            return;
        }
        this.ctx = ctx;
        this.size = [this.ctx.canvas.width, this.ctx.canvas.height];
        this.tileSize = this.size[0] / this.props.tiles;
        this.draw();
    }

    getScale(): [number, number] {
        const t = (Date.now() - this.updatedScaleAt) / 150;

        let amount = t < 0 ? 0 : t;
        amount = t > 1 ? 1 : t;

        const lerpMin =
            this.lastMinScale +
            (this.props.minScale - this.lastMinScale) * amount;
        const lerpMax =
            this.lastMaxScale +
            (this.props.maxScale - this.lastMaxScale) * amount;

        return [lerpMin, lerpMax];
    }

    draw(): void {
        const { tileSize, ctx, size } = this;
        const { tiles } = this.props;

        const width = size[0];
        const height = size[1];

        if (ctx) {
            ctx.clearRect(0, 0, width, height);
            if (this.props.forcedColors) {
                ctx.fillStyle = "CanvasText";
            } else {
                ctx.fillStyle =
                    this.props.colorScheme === "dark"
                        ? tokens.color.hvit
                        : tokens.color.svart;
            }
        }

        const time = Date.now();

        const scale = this.getScale();

        for (let x = 0; x < tiles; x++) {
            for (let y = 0; y < tiles; y++) {
                const baseScale = Math.abs(
                    Math.sin(time * 0.001 + x * 50 + y * 50),
                );

                const nBaseScale = baseScale * (scale[1] - scale[0]) + scale[0];
                const position = tileSize;
                const size = nBaseScale * tileSize;

                ctx &&
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

    generateClasses(baseClass: string): string {
        return classNames(baseClass, {
            [baseClass + "--elevated"]: this.props.principleState === 1,
            [baseClass + "--movement"]: this.props.principleState === 2,
            [baseClass + "--clarity"]: this.props.principleState === 3,
        });
    }

    render(): JSX.Element {
        return (
            <PureCanvas
                className={this.generateClasses(
                    "jkl-portal-principle-diamond__" + this.props.type,
                )}
                contextRef={this.saveContext}
                height={250}
                width={250}
            />
        );
    }

    static defaultProps = {
        tiles: 7,
        minScale: 0.2,
        maxScale: 0.8,
    };
}
