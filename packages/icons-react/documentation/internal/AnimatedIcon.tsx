import React from "react";
import { SecondaryButton } from "@fremtind/jkl-button-react";

interface AnimatedIconProps {
    renderIcon: (arg0: boolean) => React.ReactNode;
    iconName?: string;
    inverted: boolean;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ renderIcon, iconName, inverted }) => {
    const [state, setState] = React.useState(false);
    return (
        <>
            <div>
                {renderIcon(state)}
                <div className={`jkl-micro jkl-spacing-xs--top jkl-color-${inverted ? "hvit" : "svart"}`}>
                    {iconName || renderIcon.name}
                </div>
            </div>
            <SecondaryButton inverted={inverted} className="jkl-spacing-2xl--left" onClick={() => setState(!state)}>
                Animer
            </SecondaryButton>
        </>
    );
};
