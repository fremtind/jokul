import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
    isRouteErrorResponse,
    useLoaderData,
    useParams,
    useRouteError,
} from "@remix-run/react";
import type {
    Blog,
    Component,
    Foundation,
    General,
    Media,
    Pattern,
} from "payload/generated-types";
import React from "react";
import { PageNotFound } from "../page-templates/errors/PageNotFound";
import { getPageFromPath } from "~/components/navigation/utils";
import type { RichTextChildren } from "~/components/rich-text";
import { richTextToString } from "~/components/rich-text";
import {
    BlogPageTemplate,
    GeneralPageTemplate,
    TopicPageTemplate,
} from "~/page-templates";
import { GeneralError } from "~/page-templates/errors/GeneralError";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
    if (!data) {
        return [
            { title: "Jøkul Designsystem" },
            { property: "og:site_name", content: "Jøkul designsystem" },
        ];
    }

    const title =
        data.page.meta?.title || data?.page?.title || "Jøkul Designsystem";

    const image: {
        url: string;
        type?: string;
        width?: number;
        height?: number;
    } = {
        url: data.page.meta?.figma
            ? `/api/figma/images?url=${encodeURIComponent(
                  data?.page.meta.figma,
              )}`
            : `/social-preview?title=${title}`,
    };

    if (data.page.meta?.imageLight) {
        image.url = (data.page.meta?.imageLight as Media).url || image.url;
        image.type =
            (data.page.meta?.imageLight as Media).mimeType ?? undefined;
    }

    let description =
        data.page.meta?.description ||
        (data.page.ingress as unknown as RichTextChildren)?.[0]?.children
            ? richTextToString(data.page.ingress as unknown as RichTextChildren)
            : "";

    return [
        { title },
        { name: "description", content: description },
        { name: "keywords", dontent: data.page.meta?.keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:image", content: (data.serverUrl || "") + image.url },
        { property: "og:image:type", content: image.type },
        { property: "og:url", content: (data.serverUrl || "") + data.path },
        { property: "og:locale", content: "nb_NO" },
        { property: "og:site_name", content: "Jøkul designsystem" },
    ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
    let { "*": path } = params;
    const { payload, user, serverUrl } = context;

    const mainMenu = await payload.findGlobal({
        slug: "main-menu",
        user,
        depth: 10,
    });

    let pageInfo = getPageFromPath(mainMenu, path);

    if (!pageInfo) {
        // Sjekk om vi skal til en tab på en side
        const parentPath = path?.split("/").slice(0, -1).join("/");
        const potentialTabSlug = path?.split("/").slice(-1)[0];
        const parentPageInfo = getPageFromPath(mainMenu, parentPath);

        if (
            parentPageInfo &&
            (parentPageInfo.collection === "components" ||
                parentPageInfo.collection === "patterns" ||
                parentPageInfo.collection == "foundations")
        ) {
            const { collection, id } = parentPageInfo;
            try {
                const parentPage = await payload.findByID({
                    collection,
                    id,
                    user,
                    overrideAccess: false,
                });

                if (
                    parentPage.tabs.some(
                        (tab: { slug: string }) =>
                            tab.slug === potentialTabSlug,
                    )
                ) {
                    return json(
                        { page: parentPage, collection, serverUrl, path },
                        { status: 200 },
                    );
                }
            } catch {}
        }
    }

    if (pageInfo) {
        try {
            const { id, collection } = pageInfo;
            const page = await payload.findByID({
                collection,
                id: id,
                user,
                overrideAccess: false,
            });

            return json({ page, collection, serverUrl, path }, { status: 200 });
        } catch {}
    }

    throw new Response("Side ikke funnet", {
        status: 404,
        statusText: "Kunne ikke finne denne siden",
    });
};

export default function Index() {
    let { "*": path } = useParams();
    const { page, collection } = useLoaderData<typeof loader>();

    switch (collection) {
        case "components":
            const topicPage = page as Component;
            return (
                <TopicPageTemplate
                    key={page.id}
                    path={path || "/"}
                    heading={topicPage.title}
                    ingress={topicPage.ingress}
                    tabs={topicPage.tabs}
                    packages={{
                        react: topicPage.reactPackageName ?? undefined,
                        css: topicPage.cssPackageName ?? undefined,
                    }}
                />
            );

        case "patterns":
            const patternPage = page as Pattern;
            return (
                <TopicPageTemplate
                    key={page.id}
                    path={path || "/"}
                    heading={patternPage.title}
                    ingress={patternPage.ingress}
                    tabs={patternPage.tabs}
                />
            );

        case "foundations":
            const foundationPage = page as Foundation;
            return (
                <TopicPageTemplate
                    key={page.id}
                    path={path || "/"}
                    heading={foundationPage.title}
                    ingress={foundationPage.ingress}
                    tabs={foundationPage.tabs}
                />
            );

        case "general":
            return <GeneralPageTemplate {...(page as General)} />;

        case "blog":
            return <BlogPageTemplate {...(page as Blog)} />;

        default:
            return <PageNotFound />;
    }
}

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
