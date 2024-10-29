import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import React, { type FC } from 'react';
import { SearchResults } from '../page-templates/search-results';

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
    if (!data) {
        return [{ title: 'Søk i Jøkul' }];
    }
    return [
        { title: 'Søk i Jøkul' },
        {
            name: 'description',
            content: 'Jøkul er designsystemet til Fremtind',
        },
        { property: 'og:title', content: 'Søk i Jøkul' },
        {
            property: 'og:description',
            content: 'Jøkul er designsystemet til Fremtind',
        },
        { property: 'og:type', content: 'website' },
        {
            property: 'og:image',
            content: `${data.serverUrl}/social-preview?title=Søk i Jøkul`,
        },
        { property: 'og:url', content: `${data.serverUrl}/soek` },
    ];
};

export const loader = async ({ context }: LoaderArgs) => {
    const { serverUrl } = context;
    return json({ serverUrl }, { status: 200 });
};

export const SearchPage: FC = () => {
    return <SearchResults />;
};

export default SearchPage;
