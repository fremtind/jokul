import React, { FC } from "react";

const DeviceContainer: FC = ({ children }) => <div className="jkl-device">{children}</div>;

export const Phone: FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-heading-2 jkl-spacing-l--top jkl-spacing-l--bottom">{Phone.displayName}</p>
        <div data-testid="jkl-portal__iphone-view" className="jkl-device-iphone">
            <div className="jkl-device-iphone__content">{children}</div>
        </div>
    </DeviceContainer>
);
Phone.displayName = "Phone";

export const Tablet: FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-heading-2 jkl-spacing-l--top jkl-spacing-l--bottom">{Tablet.displayName}</p>
        <div className="jkl-device-ipad">
            <div data-testid="jkl-portal__ipad-view" className="jkl-device-ipad__content">
                {children}
            </div>
        </div>
    </DeviceContainer>
);
Tablet.displayName = "Tablet";

export const Laptop: FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-heading-2 jkl-spacing-l--top jkl-spacing-l--bottom">{Laptop.displayName}</p>
        <div className="jkl-device-laptop">
            <div data-testid="jkl-portal__laptop-view" className="jkl-device-laptop__content">
                {children}
            </div>
        </div>
    </DeviceContainer>
);
Laptop.displayName = "Full HD";

export const devices = [Phone, Tablet, Laptop];
