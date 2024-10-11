import React from "react";

interface AnimatedIconProps {
    renderIcon: (arg0: boolean) => React.ReactNode;
    iconName?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ renderIcon, iconName }) => {
    const [state, setState] = React.useState(false);
    return (
        <>
            <div title={iconName || renderIcon.name}>{renderIcon(state)}</div>
            <div style={{ textAlign: "right" }}>
                <button
                    data-density="compact"
                    className="jkl-button jkl-button--tertiary jkl-spacing-2xl--left"
                    onClick={() => setState(!state)}
                >
                    Animér <span className="jkl-sr-only">{iconName}</span>
                </button>
            </div>
        </>
    );
};
