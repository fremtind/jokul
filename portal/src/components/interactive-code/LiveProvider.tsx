import * as accordionReact from "@fremtind/jkl-accordion-react";
import * as breadcrumbReact from "@fremtind/jkl-breadcrumb-react";
import * as buttonReact from "@fremtind/jkl-button-react";
import * as cardReact from "@fremtind/jkl-card-react";
import * as checkboxReact from "@fremtind/jkl-checkbox-react";
import * as contentToggleReact from "@fremtind/jkl-content-toggle-react";
import * as coockieConsentReact from "@fremtind/jkl-cookie-consent-react";
import { WithChildren } from "@fremtind/jkl-core";
import * as datepickerReact from "@fremtind/jkl-datepicker-react";
import * as descriptionListReact from "@fremtind/jkl-description-list-react";
import * as expandButtonReact from "@fremtind/jkl-expand-button-react";
import * as feedbackReact from "@fremtind/jkl-feedback-react";
import * as footerReact from "@fremtind/jkl-footer-react";
import * as iconButtonReact from "@fremtind/jkl-icon-button-react";
import * as iconsReact from "@fremtind/jkl-icons-react";
import * as imageReact from "@fremtind/jkl-image-react";
import * as inputGroupReact from "@fremtind/jkl-input-group-react";
import * as listReact from "@fremtind/jkl-list-react";
import * as loaderReact from "@fremtind/jkl-loader-react";
import * as logoReact from "@fremtind/jkl-logo-react";
import * as messageBoxReact from "@fremtind/jkl-message-box-react";
import * as radioButtonReact from "@fremtind/jkl-radio-button-react";
import * as selectReact from "@fremtind/jkl-select-react";
import * as summaryTableReact from "@fremtind/jkl-summary-table-react";
import * as tableReact from "@fremtind/jkl-table-react";
import * as tabsReact from "@fremtind/jkl-tabs-react";
import * as tagReact from "@fremtind/jkl-tag-react";
import * as textInputReact from "@fremtind/jkl-text-input-react";
import * as toggleSwitchReact from "@fremtind/jkl-toggle-switch-react";
import * as systemMessageReact from "packages/system-message-react/build";
import React, { FC } from "react";
import { LiveProvider as ReactLiveProvider } from "react-live";

const scope = {
    ...accordionReact,
    ...systemMessageReact,
    ...breadcrumbReact,
    ...cardReact,
    ...checkboxReact,
    ...contentToggleReact,
    ...coockieConsentReact,
    ...datepickerReact,
    ...descriptionListReact,
    ...expandButtonReact,
    ...feedbackReact,
    ...footerReact,
    ...iconButtonReact,
    ...iconsReact,
    ...imageReact,
    ...inputGroupReact,
    ...listReact,
    ...loaderReact,
    ...logoReact,
    ...messageBoxReact,
    ...radioButtonReact,
    ...selectReact,
    ...summaryTableReact,
    ...tableReact,
    ...tabsReact,
    ...tagReact,
    ...textInputReact,
    ...toggleSwitchReact,
    ...buttonReact,
};

const transformCode = (code: string) => {
    return `<div>${code}</div>`;
};

export interface LiveProviderProps extends WithChildren {
    code: string;
}

export const LiveProvider: FC<LiveProviderProps> = (props) => {
    return (
        <ReactLiveProvider code={props.code.trim()} scope={scope} transformCode={transformCode}>
            {props.children}
        </ReactLiveProvider>
    );
};
