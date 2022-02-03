import React, { VFC } from "react";
import cn from "classnames";
import { withPrefix } from "gatsby";

import "./DownloadAsset.scss";

interface Props {
    asset: string;
    name: string;
    darkbg?: boolean;
}

export const DownloadAsset: VFC<Props> = ({ asset = "", name, darkbg = false }) => {
    const src = withPrefix(asset);

    return (
        <div
            className={cn("jkl-portal-downloadasset", {
                "jkl-portal-downloadasset--dark-bg": darkbg,
            })}
        >
            <a className="jkl-portal-downloadasset__button" href={src}>
                <img className="jkl-portal-downloadasset__image" src={src} alt="" />
                <span
                    className={cn("jkl-portal-downloadasset__name", {
                        "jkl-portal-downloadasset__name--dark": darkbg,
                    })}
                >
                    {name}
                </span>
            </a>
        </div>
    );
};
