import { CheckmarkCircleIcon, CloseCircleIcon } from "@sanity/icons";
import type { BlockListDefinition } from "sanity";

import "./usageList.scss";

export const checkList: BlockListDefinition = {
    title: "Oppfordringsliste",
    value: "check",
    icon: CheckmarkCircleIcon,
};

export const crossList: BlockListDefinition = {
    title: "Frarådningsliste",
    value: "cross",
    icon: CloseCircleIcon,
};
