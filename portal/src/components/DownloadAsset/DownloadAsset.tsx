import React, { VFC } from "react";
import downloadjs from "downloadjs";
import classNames from "classnames";
import { withPrefix } from "gatsby";

import "./DownloadAsset.scss";

interface Props {
    asset: string;
    name: string;
    darkbg?: boolean;
}

export const DownloadAsset: VFC<Props> = ({ asset = "", name, darkbg = false }) => {
    const componentClassName = classNames({
        "jkl-portal-downloadasset": true,
        "jkl-portal-downloadasset--dark-bg": darkbg,
    });
    const textClassName = classNames({
        "jkl-portal-downloadasset__name": true,
        "jkl-portal-downloadasset__name--dark": darkbg,
    });
    const clickDownload = (event: React.MouseEvent) => {
        event.preventDefault();
        if (confirm("Vil du laste ned " + name + "?")) {
            downloadjs(asset);
        }
    };
    return (
        <div className={componentClassName}>
            <button className="jkl-portal-downloadasset__button" onClick={clickDownload}>
                <img className="jkl-portal-downloadasset__image" src={withPrefix(asset)} alt={"Fil " + name} />
                <span className={textClassName}>{name}</span>
            </button>
        </div>
    );
};
