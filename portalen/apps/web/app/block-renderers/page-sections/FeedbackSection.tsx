import { Feedback, PRESETS } from "@fremtind/jkl-feedback-react";
import { type FeedbackType } from "@fremtind/jkl-feedback-react/build/types";
import React, { type FC, useCallback } from "react";
import { assertSectionIs, type PageSectionProps } from "~/block-renderers/page-sections/types";

export const FeedbackSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs("feedback-section", pageSection);

    const onSubmit = useCallback((data: FeedbackType) => {
        fetch("/api/user-feedback", {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({ ...data, page: window.location.pathname }),
        });
    }, []);

    return (
        <Feedback
            label={pageSection.label}
            type={"smiley"}
            addOnQuestion={{ label: pageSection.addOnQuestion }}
            options={PRESETS["Smileys"].options}
            onSubmit={onSubmit}
            counter={{ maxLength: 900 }}
        />
    );
};
