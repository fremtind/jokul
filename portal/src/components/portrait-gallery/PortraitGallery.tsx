import React, { FC, ReactNode } from "react";
import "./portrait-gallery.scss";

export interface PortraitGalleryProps {
    children?: ReactNode;
}

export const PortraitGallery: FC<PortraitGalleryProps> = ({ children }) => (
    <div className="jkl-portal-portrait-gallery">{children}</div>
);
