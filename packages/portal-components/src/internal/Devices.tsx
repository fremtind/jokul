import React from "react";
import { Ipad } from "./Ipad";
import { Iphone } from "./Iphone";

const DeviceContainer: React.FC = ({ children }) => <div className="jkl-device">{children}</div>;

export const Phone: React.FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-lead jkl-layout-spacing--small-top jkl-layout-spacing--small-bottom">{Phone.displayName}</p>
        <div data-testid="jkl-portal__iphone-view" className="jkl-device-iphone">
            <Iphone />
            <div className="jkl-device-iphone__content">{children}</div>
        </div>
    </DeviceContainer>
);
Phone.displayName = "iPhone X";

export const Tablet: React.FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-lead jkl-layout-spacing--small-top jkl-layout-spacing--small-bottom">{Tablet.displayName}</p>
        <div className="jkl-device-ipad">
            <Ipad />
            <div data-testid="jkl-portal__ipad-view" className="jkl-device-ipad__content">
                {children}
            </div>
        </div>
    </DeviceContainer>
);
Tablet.displayName = "iPad Pro";

export const Laptop: React.FC = ({ children }) => (
    <DeviceContainer>
        <p className="jkl-lead jkl-layout-spacing--small-top jkl-layout-spacing--small-bottom">{Laptop.displayName}</p>
        <div className="jkl-device-laptop">
            <div data-testid="jkl-portal__laptop-view" className="jkl-device-laptop__content">
                {children}
            </div>
        </div>
    </DeviceContainer>
);
Laptop.displayName = "Full HD";

export const devices = [Phone, Tablet, Laptop];
