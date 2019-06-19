import React from "react";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
}

export function Tab(props: Props) {
    return (
        <>
            <button onClick={props.onClick} className={`jkl-tab ${props.active && "jkl-tab--active"}`}>
                <div className="jkl-tab__label">{props.children}</div>
            </button>
        </>
    );
}
