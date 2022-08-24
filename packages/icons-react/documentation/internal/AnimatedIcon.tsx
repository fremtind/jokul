import { SecondaryButton } from "@fremtind/jkl-button-react";
import React from "react";

interface AnimatedIconProps {
    renderIcon: (arg0: boolean) => React.ReactNode;
    iconName?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ renderIcon, iconName }) => {
    const [state, setState] = React.useState(false);
    return (
        <>
            <div>
                {renderIcon(state)}
                <div className={`jkl-micro jkl-spacing-xs--top`}>{iconName || renderIcon.name}</div>
            </div>
            <SecondaryButton density="compact" className="jkl-spacing-2xl--left" onClick={() => setState(!state)}>
                Animér <span className="jkl-sr-only">{iconName}</span>
            </SecondaryButton>
        </>
    );
};
