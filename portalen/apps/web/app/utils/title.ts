import { useMatches } from '@remix-run/react';
import type { RootLoaderData } from '~/root';

export const usePageTitle = () => {
    const [root] = useMatches();

    return (root.data as RootLoaderData).pageTitle;
};
