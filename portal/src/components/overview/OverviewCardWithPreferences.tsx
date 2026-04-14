"use client";

import {
    type UserPreferences,
    useUserPreferences,
} from "@/utils/user-preferences";
import type { OverviewCardProps } from "./card";
import { OverviewCard } from "./card";

type OverviewCardWithPreferencesProps = OverviewCardProps & {
    initialPreferences?: UserPreferences;
};

export function OverviewCardWithPreferences({
    description,
    image,
    initialPreferences,
    ...props
}: OverviewCardWithPreferencesProps) {
    const { preferences } = useUserPreferences(initialPreferences);

    return (
        <OverviewCard
            {...props}
            description={
                preferences.showComponentDescription ? description : undefined
            }
            image={preferences.showComponentImage ? image : undefined}
        />
    );
}
