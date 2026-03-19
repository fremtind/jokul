import {
    FrontPageImageStrip,
    FrontPageLogo,
    FrontPageNewsSection,
    FrontPagePortalSections,
} from "@/components/frontpage";
import styles from "@/components/frontpage/frontpagePage.module.scss";
import { sanityFetch } from "@/sanity/lib/live";
import { frontpageQuery } from "@/sanity/queries/frontpage";
import type { FrontpageQueryResult } from "@/sanity/types";

const DEFAULT_HERO_TEXT = "Jøkul Designsystem";

const getHeroText = (frontpage?: FrontpageQueryResult["frontpage"]) => {
    if (frontpage?.hero?.useCustomText && frontpage.hero.text) {
        return frontpage.hero.text;
    }

    return DEFAULT_HERO_TEXT;
};

export default async function FrontPage() {
    const { data } = await sanityFetch({
        query: frontpageQuery,
        requestTag: "frontpage",
        tags: [
            "jokul_frontpage",
            "jokul_component",
            "jokul_fundamentals",
            "jokul_blog_post",
        ],
    });
    const frontpageData = data as FrontpageQueryResult | null;
    const frontpage = frontpageData?.frontpage || null;
    const latestUpdatedDocuments = frontpageData?.latestUpdatedDocuments || [];

    return (
        <div className={styles.frontPage}>
            <section>
                <h1 className="jkl-sr-only">Jøkul Designsystem</h1>
                <FrontPageLogo text={getHeroText(frontpage)} delay={100} />
            </section>
            <FrontPagePortalSections links={frontpage?.portalLinks} />
            <FrontPageImageStrip images={frontpage?.gridImages} />
            <FrontPageNewsSection
                featuredDocument={frontpage?.highlightedEntry}
                documents={latestUpdatedDocuments}
            />
        </div>
    );
}
