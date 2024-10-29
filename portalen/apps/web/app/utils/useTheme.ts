import type { ColorScheme } from '@fremtind/jkl-core';
import { useBrowserPreferences } from '@fremtind/jkl-react-hooks';
import { useGlobalPreferences } from '../components/navigation/GlobalContextualMenu';

export function useTheme(): ColorScheme {
    const { colorScheme } = useGlobalPreferences();
    const { prefersColorScheme } = useBrowserPreferences();

    // Om brukeren har overstyrt temaet i menyen, bruk det.
    // Ellers, bruk det som er satt i systemet.
    const currentColor = colorScheme || prefersColorScheme;
    return currentColor;
}
