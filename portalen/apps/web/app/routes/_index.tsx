import type { LoaderArgs, ActionArgs } from '@remix-run/node';
import { json, Response } from '@remix-run/node';
import {
    isRouteErrorResponse,
    useLoaderData,
    useRouteError,
} from '@remix-run/react';
import React, { type FC } from 'react';
import { GeneralError } from '~/page-templates/errors/GeneralError';
import { PageNotFound } from '~/page-templates/errors/PageNotFound';
import { HomePageTemplate } from '~/page-templates/home-page-template/HomePageTemplate';

export const action = ({ request }: ActionArgs) => {
    // Vi får innimellom POST-requests på rot-urlen, som vi ikke vil ha
    // Nekt dem, og gi oss selv litt info i loggene
    console.log(request.headers);

    return new Response('Not allowed', {
        status: 405 /* Method Not Allowed */,
        headers: {
            Allow: 'GET',
        },
    });
};

export const loader = async ({ context: { payload, user } }: LoaderArgs) => {
    try {
        const homePage = await payload.findGlobal({
            slug: 'home-page',
            user,
        });

        return json(homePage, { status: 200 });
    } catch {
        throw new Response('Kunne ikke finne hjemmesiden', { status: 404 });
    }
};

export const HomePage: FC = () => {
    const homePage = useLoaderData<typeof loader>();

    return <HomePageTemplate {...homePage} />;
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

export default HomePage;
