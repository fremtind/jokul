import * as accordionReact from "@fremtind/jkl-accordion-react";
import * as alertMessageReact from "@fremtind/jkl-alert-message-react";
import * as breadcrumbReact from "@fremtind/jkl-breadcrumb-react";
import * as buttonReact from "@fremtind/jkl-button-react";
import * as cardReact from "@fremtind/jkl-card-react";
import * as checkboxReact from "@fremtind/jkl-checkbox-react";
import * as comboboxReact from "@fremtind/jkl-combobox-react";
import * as contactInformationReact from "@fremtind/jkl-contact-information-react";
import * as contentToggleReact from "@fremtind/jkl-content-toggle-react";
import * as contextualMenuReact from "@fremtind/jkl-contextual-menu-react";
import * as coockieConsentReact from "@fremtind/jkl-cookie-consent-react";
import * as coreReact from "@fremtind/jkl-core";
import * as datepickerReact from "@fremtind/jkl-datepicker-react";
import * as descriptionListReact from "@fremtind/jkl-description-list-react";
import * as expandButtonReact from "@fremtind/jkl-expand-button-react";
import * as feedbackReact from "@fremtind/jkl-feedback-react";
import * as fileInputReact from "@fremtind/jkl-file-input-react";
import * as footerReact from "@fremtind/jkl-footer-react";
import * as formatters from "@fremtind/jkl-formatters-util";
import * as hamburgerReact from "@fremtind/jkl-hamburger-react";
import * as iconButtonReact from "@fremtind/jkl-icon-button-react";
import * as iconsReact from "@fremtind/jkl-icons-react";
import * as imageReact from "@fremtind/jkl-image-react";
import * as inputGroupReact from "@fremtind/jkl-input-group-react";
import * as listReact from "@fremtind/jkl-list-react";
import * as loaderReact from "@fremtind/jkl-loader-react";
import * as logoReact from "@fremtind/jkl-logo-react";
import * as messageBoxReact from "@fremtind/jkl-message-box-react";
import * as modalReact from "@fremtind/jkl-modal-react";
import * as progressbarReact from "@fremtind/jkl-progress-bar-react";
import * as radioButtonReact from "@fremtind/jkl-radio-button-react";
import * as hooks from "@fremtind/jkl-react-hooks";
import * as selectReact from "@fremtind/jkl-select-react";
import * as summaryTableReact from "@fremtind/jkl-summary-table-react";
import * as tableReact from "@fremtind/jkl-table-react";
import * as tabsReact from "@fremtind/jkl-tabs-react";
import * as tagReact from "@fremtind/jkl-tag-react";
import * as textInputReact from "@fremtind/jkl-text-input-react";
import * as toastReact from "@fremtind/jkl-toast-react";
import * as toggleSwitchReact from "@fremtind/jkl-toggle-switch-react";
import * as toolTipReact from "@fremtind/jkl-tooltip-react";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { LiveProvider as ReactLiveProvider, type LiveProviderProps as ReactLiveProviderProps } from "react-live";
import { columns, rows } from "./tableData";

const scope = {
    ...accordionReact,
    ...alertMessageReact,
    ...breadcrumbReact,
    ...cardReact,
    ...checkboxReact,
    ...comboboxReact,
    ...contactInformationReact,
    ...contentToggleReact,
    ...contextualMenuReact,
    ...coockieConsentReact,
    ...coreReact,
    ...datepickerReact,
    ...descriptionListReact,
    ...expandButtonReact,
    ...feedbackReact,
    ...fileInputReact,
    ...footerReact,
    ...hamburgerReact,
    ...hooks,
    ...iconButtonReact,
    ...iconsReact,
    ...imageReact,
    ...inputGroupReact,
    ...listReact,
    ...loaderReact,
    ...logoReact,
    ...messageBoxReact,
    ...modalReact,
    ...progressbarReact,
    ...radioButtonReact,
    ...selectReact,
    ...summaryTableReact,
    ...tableReact,
    ...tabsReact,
    ...tagReact,
    ...textInputReact,
    ...toastReact,
    ...toggleSwitchReact,
    ...toolTipReact,
    ...buttonReact,
    ...formatters,
    ReactDOM,
    useForm,
    tableData: { rows, columns },
};

const transformInlineCode = (code: string) => {
    return `<React.Fragment>${code}</React.Fragment>`;
};

const transformNoInlineCode = (code: string) => {
    return `
  const Wrapper = () => {
    ${code}
  };
  render(<Wrapper />);
  `;
};

export interface LiveProviderProps extends Omit<ReactLiveProviderProps, "ref"> {
    code: string;
}

export const LiveProvider: FC<LiveProviderProps> = ({ code, noInline, transformCode, ...rest }) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={scope}
            transformCode={transformCode || noInline ? transformNoInlineCode : transformInlineCode}
            noInline={noInline}
            {...rest}
        />
    );
};
