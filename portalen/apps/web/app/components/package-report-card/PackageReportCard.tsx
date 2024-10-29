import { Link as FremtindLink } from "@fremtind/jkl-core";
import { DescriptionDetail, DescriptionList, DescriptionTerm } from "@fremtind/jkl-description-list-react";
import cn from "classnames";
import React, { type FC } from "react";
import { CodeSnippet } from "../code-snippet";

export interface PackageReportCardProps {
    install: string;
    usage: string;
    react?: {
        version: string;
        docs:
            | Array<{
                  title: string;
                  href: string;
              }>
            | undefined
            | null;
    };
    css?: {
        version: string;
        docs:
            | Array<{
                  title: string;
                  href: string;
              }>
            | undefined
            | null;
    };
}

export const PackageReportCard: FC<PackageReportCardProps> = ({ install, usage, react, css }) => {
    const hasCss = css && css.version;

    return (
        <div className="package-report-card">
            <div className="package-report-card__title package-report-card__title-install">Installer</div>
            <CodeSnippet
                className="package-report-card__details package-report-card__details--code package-report-card__details-install"
                language="bash"
                code={install}
            />
            <div className="package-report-card__title package-report-card__title-use">Bruk</div>
            <CodeSnippet
                className="package-report-card__details package-report-card__details--code package-report-card__details-use"
                language="tsx"
                code={usage}
            />
            {react && (
                <>
                    <div className="package-report-card__title package-report-card__title-react">React</div>
                    <div
                        className={cn("package-report-card__details", "package-report-card__details-react", {
                            "package-report-card__details-react--no-css": !hasCss,
                        })}
                    >
                        <DescriptionList>
                            <DescriptionTerm>Versjon</DescriptionTerm>
                            <DescriptionDetail>{react.version}</DescriptionDetail>
                            {react.docs && (
                                <>
                                    <DescriptionTerm>Dokumentasjon</DescriptionTerm>
                                    {react.docs.map((doc) => (
                                        <DescriptionDetail key={doc.href}>
                                            <FremtindLink external href={doc.href}>
                                                {doc.title}
                                            </FremtindLink>
                                        </DescriptionDetail>
                                    ))}
                                </>
                            )}
                        </DescriptionList>
                    </div>
                </>
            )}
            {hasCss && (
                <>
                    <div className="package-report-card__title package-report-card__title-css">CSS</div>
                    <div className="package-report-card__details package-report-card__details-css">
                        <DescriptionList>
                            <DescriptionTerm>Versjon</DescriptionTerm>
                            <DescriptionDetail>{css.version}</DescriptionDetail>
                            {css.docs && (
                                <>
                                    <DescriptionTerm>Dokumentasjon</DescriptionTerm>
                                    {css.docs.map((doc) => (
                                        <DescriptionDetail key={doc.href}>
                                            <FremtindLink external href={doc.href}>
                                                {doc.title}
                                            </FremtindLink>
                                        </DescriptionDetail>
                                    ))}
                                </>
                            )}
                        </DescriptionList>
                    </div>
                </>
            )}
        </div>
    );
};
