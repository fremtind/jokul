import React, { FC } from "react";
import ReactDOM from "react-dom";
import * as accordionReact from "../../packages/accordion-react/src";
import * as breadcrumbReact from "../../packages/breadcrumb-react/src";
import * as buttonReact from "../../packages/button-react/src";
import * as cardReact from "../../packages/card-react/src";
import * as checkboxReact from "../../packages/checkbox-react/src";
import * as comboboxReact from "../../packages/combobox-react/src";
import * as contactInformationReact from "../../packages/contact-information-react/src";
import * as contentToggleReact from "../../packages/content-toggle-react/src";
import * as contextualMenuReact from "../../packages/contextual-menu-react/src";
import * as coockieConsentReact from "../../packages/cookie-consent-react/src";
import * as coreReact from "../../packages/core/src";
import * as datepickerReact from "../../packages/datepicker-react/src";
import * as descriptionListReact from "../../packages/description-list-react/src";
import * as expandButtonReact from "../../packages/expand-button-react/src";
import * as feedbackReact from "../../packages/feedback-react/src";
import * as fileInputReact from "../../packages/file-input-react/src";
import * as footerReact from "../../packages/footer-react/src";
import * as formatters from "../../packages/formatters-util/src";
import * as iconButtonReact from "../../packages/icon-button-react/src";
import * as iconsReact from "../../packages/icons-react/src";
import * as imageReact from "../../packages/image-react/src";
import * as inputGroupReact from "../../packages/input-group-react/src";
import * as listReact from "../../packages/list-react/src";
import * as loaderReact from "../../packages/loader-react/src";
import * as logoReact from "../../packages/logo-react/src";
import * as messageReact from "../../packages/message-react/src";
import * as modalReact from "../../packages/modal-react/src";
import * as progressbarReact from "../../packages/progress-bar-react/src";
import * as radioButtonReact from "../../packages/radio-button-react/src";
import * as hooks from "../../packages/react-hooks/src";
import * as selectReact from "../../packages/select-react/src";
import * as summaryTableReact from "../../packages/summary-table-react/src";
import * as systemMessageReact from "../../packages/system-message-react/src";
import * as tableReact from "../../packages/table-react/src";
import * as tabsReact from "../../packages/tabs-react/src";
import * as tagReact from "../../packages/tag-react/src";
import * as textInputReact from "../../packages/text-input-react/src";
import * as toastReact from "../../packages/toast-react/src";
import * as toggleSwitchReact from "../../packages/toggle-switch-react/src";
import * as toolTipReact from "../../packages/tooltip-react/src";
import { columns, rows } from "./tableData";
import { useForm } from "react-hook-form";
import { LiveProvider as ReactLiveProvider, type LiveProviderProps as ReactLiveProviderProps } from "react-live";

const scope = {
    ...accordionReact,
    ...systemMessageReact,
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
    ...hooks,
    ...iconButtonReact,
    ...iconsReact,
    ...imageReact,
    ...inputGroupReact,
    ...listReact,
    ...loaderReact,
    ...logoReact,
    ...messageReact,
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

export const LiveProvider: FC<LiveProviderProps> = ({
    code,
    noInline,
    transformCode,
    scope: additionalScope,
    ...rest
}) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={{ ...scope, ...additionalScope }}
            transformCode={transformCode || noInline ? transformNoInlineCode : transformInlineCode}
            noInline={noInline}
            {...rest}
        />
    );
};
