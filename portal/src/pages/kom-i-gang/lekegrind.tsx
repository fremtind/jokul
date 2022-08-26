import * as accordionReact from "@fremtind/jkl-accordion-react";
import * as alertMessageReact from "@fremtind/jkl-alert-message-react";
import * as breadcrumbReact from "@fremtind/jkl-breadcrumb-react";
import * as buttonReact from "@fremtind/jkl-button-react";
import * as cardReact from "@fremtind/jkl-card-react";
import * as checkboxReact from "@fremtind/jkl-checkbox-react";
import * as contentToggleReact from "@fremtind/jkl-content-toggle-react";
import * as coockieConsentReact from "@fremtind/jkl-cookie-consent-react";
import * as datepickerReact from "@fremtind/jkl-datepicker-react";
import * as descriptionListReact from "@fremtind/jkl-description-list-react";
import * as expandButtonReact from "@fremtind/jkl-expand-button-react";
import * as feedbackReact from "@fremtind/jkl-feedback-react";
import * as fieldGroupReact from "@fremtind/jkl-field-group-react";
import * as footerReact from "@fremtind/jkl-footer-react";
import * as hamburgerReact from "@fremtind/jkl-hamburger-react";
import * as iconButtonReact from "@fremtind/jkl-icon-button-react";
import * as iconsReact from "@fremtind/jkl-icons-react";
import * as imageReact from "@fremtind/jkl-image-react";
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
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { LivePreview, LiveProvider, LiveError } from "react-live";
import { LiveEditor } from "../../components/interactive-code/LiveEditor";
import { Seo } from "../../components/seo";
import { PageTitle } from "../../components/Typography";

const pageTitle = "Lekegrind";

const scope = {
    ...accordionReact,
    ...alertMessageReact,
    ...breadcrumbReact,
    ...cardReact,
    ...checkboxReact,
    ...contentToggleReact,
    ...coockieConsentReact,
    ...datepickerReact,
    ...descriptionListReact,
    ...expandButtonReact,
    ...feedbackReact,
    ...fieldGroupReact,
    ...footerReact,
    ...hamburgerReact,
    ...iconButtonReact,
    ...iconsReact,
    ...imageReact,
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

const defaultCode = `<PrimaryButton
                        forceCompact={false}
                        loader={false}
                        className="jkl-spacing-l--right"

                    >
                        Lagre og send inn
                    </PrimaryButton>`;

export const Head: FC = () => <Seo title={pageTitle} />;

const Lekegrind: FC = () => {
    const [code, setCode] = useState<string>(defaultCode);

    const handleChange = (newCode: string) => {
        setCode(newCode);
    };
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="jkl-portal__main"
        >
            <PageTitle>{pageTitle}</PageTitle>

            <LiveProvider code={code?.trim()} scope={scope}>
                <LiveEditor onChange={handleChange} />
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </motion.main>
    );
};

export default Lekegrind;
