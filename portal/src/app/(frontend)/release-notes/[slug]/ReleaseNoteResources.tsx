"use client";

import { LinkList } from "@fremtind/jokul/link-list";

type Resource = {
    key: string;
    title: string;
    url: string;
};

export const ReleaseNoteResources = ({
    resources,
}: { resources: Resource[] }) => {
    if (resources.length === 0) return null;

    return (
        <LinkList label="Ressurser" hideLabel>
            {resources.map((resource) => (
                <LinkList.Link
                    key={resource.key}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {resource.title}
                </LinkList.Link>
            ))}
        </LinkList>
    );
};
