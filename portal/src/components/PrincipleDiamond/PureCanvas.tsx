import React from "react";

export class PureCanvas extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.className !== this.props.className) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <canvas
                className={this.props.className}
                width={this.props.width}
                height={this.props.height}
                ref={(node) => (node ? this.props.contextRef(node.getContext("2d")) : null)}
            />
        );
    }
}
