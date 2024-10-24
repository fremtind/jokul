import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
    isRouteErrorResponse,
    useLoaderData,
    useRouteError,
} from '@remix-run/react';
import type {
    Blog,
    Component,
    Foundation,
    General,
    Pattern,
} from 'payload/generated-types';
import React, { type FC } from 'react';
import {
    BlogPageTemplate,
    GeneralPageTemplate,
    TopicPageTemplate,
} from '~/page-templates';
import { GeneralError } from '~/page-templates/errors/GeneralError';
import { PageNotFound } from '~/page-templates/errors/PageNotFound';

// TODO: Finn en bedre måte å dele disse på
const allPageCollectionSlugs = [
    'components',
    'patterns',
    'foundations',
    'general',
    'blog',
] as const;

export const loader = async ({ context, params }: LoaderArgs) => {
    const { payload, user } = context;
    const { collection, id, tab } = params;

    if (!user || user.role === 'user') {
        // Payload viser publisert side dersom man ikke har tilgang til å se drafts,
        // derfor håndterer vi tilgang eksplisitt her.
        throw new Response('Du har ikke tilgang til å se denne siden', {
            status: 403,
            statusText: 'Forbidden',
        });
    }

    try {
        const page = await payload.findByID({
            collection: collection as (typeof allPageCollectionSlugs)[number],
            id: id as string,
            user,
            draft: true,
            overrideAccess: false,
        });

        return json({ page, collection, id, tab }, { status: 200 });
    } catch {
        throw new Response('Fant ingen side å forhåndsvise', {
            status: 404,
            statusText: 'NotFound',
        });
    }
};

export const Preview: FC = () => {
    const { page, collection, id, tab } = useLoaderData<typeof loader>();

    const pagePath = ['preview', collection, id, tab].filter(Boolean).join('/');

    // TODO: Skill ut logikk for å rendre ut sider (brukes både her og i $.tsx)
    switch (collection) {
        case 'components':
            const topicPage = page as Component;
            return (
                <TopicPageTemplate
                    path={pagePath}
                    heading={topicPage.title}
                    ingress={topicPage.ingress}
                    tabs={topicPage.tabs}
                    packages={{
                        react: topicPage.reactPackageName ?? undefined,
                        css: topicPage.cssPackageName ?? undefined,
                    }}
                />
            );

        case 'patterns':
            const patternPage = page as Pattern;
            return (
                <TopicPageTemplate
                    path={pagePath}
                    heading={patternPage.title}
                    ingress={patternPage.ingress}
                    tabs={patternPage.tabs}
                />
            );

        case 'foundations':
            const foundationPage = page as Foundation;
            return (
                <TopicPageTemplate
                    path={pagePath}
                    heading={foundationPage.title}
                    ingress={foundationPage.ingress}
                    tabs={foundationPage.tabs}
                />
            );

        case 'blog':
            const blogPage = page as Blog;
            return <BlogPageTemplate {...blogPage} />;

        case 'general':
            return <GeneralPageTemplate {...(page as General)} />;

        default:
            return <PageNotFound />;
    }
};

export function ErrorBoundary() {
    let error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <PageNotFound />;
        }

        return <GeneralError />;
    } else if (error instanceof Error) {
        console.error(error);
        return <GeneralError />;
    } else {
        return <GeneralError />;
    }
}

export default Preview;
