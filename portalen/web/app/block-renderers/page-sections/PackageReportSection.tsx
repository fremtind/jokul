import React, { type FC } from "react";
import {
    PackageReportCard,
    usePackageVersion,
    type PackageInfo,
} from "../../components/package-report-card";
import { PageSection } from "./PageSection";
import { type PageSectionProps } from "./types";
import { assertSectionIs } from "./types";

export const PackageReportSection: FC<
    PageSectionProps & { packages?: PackageInfo }
> = ({ pageSection, packages }) => {
    assertSectionIs("package-report-section", pageSection);

    const { installCode, usageCode, cssDocs, reactDocs, id, ...sectionProps } =
        pageSection;
    const { cssVersion, reactVersion } = usePackageVersion(packages);

    return (
        <PageSection key={id} {...sectionProps}>
            <PackageReportCard
                install={installCode}
                usage={usageCode}
                css={{ version: cssVersion, docs: cssDocs }}
                react={{ version: reactVersion, docs: reactDocs }}
            />
        </PageSection>
    );
};
