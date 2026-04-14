"use client";

import {
    type UserPreferences,
    useUserPreferences,
} from "@/utils/user-preferences";
import type { OverviewGridProps } from "./grid";
import { OverviewGrid } from "./grid";

type OverviewGridWithPreferencesProps = Omit<OverviewGridProps, "size"> & {
    initialPreferences?: UserPreferences;
};

export function OverviewGridWithPreferences({
    initialPreferences,
    ...props
}: OverviewGridWithPreferencesProps) {
    const { preferences } = useUserPreferences(initialPreferences);

    return <OverviewGrid {...props} size={preferences.componentGridSize} />;
}
