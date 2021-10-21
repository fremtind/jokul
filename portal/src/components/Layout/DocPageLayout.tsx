import React, { FC, ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { DataTable } from "@fremtind/jkl-table-react";
import { Frontmatter, FrontmatterTypeProp } from "../Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "./components";
import { a11yContext } from "../../contexts/a11yContext";
import { useLocation } from "../../contexts/locationContext";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: Frontmatter;
    };
}

const getRows = (data: FrontmatterTypeProp[]) =>
    data.map((prop) => [
        prop.name ? `${prop.name}` : "",
        prop?.defaultValue?.value ? `${prop.defaultValue.value}` : "ingen",
        prop.required ? "Påkrevd" : "Ikke påkrevd",
        prop.type?.name ?? "",
    ]);

export const DocPageLayout: FC<Props> = ({ children, location, pageContext: { frontmatter } }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const { isCypress } = useLocation();

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: isCypress ? 0 : 0.35 }}
            className={`jkl-portal__main ${
                location.pathname === "/profil/bildebruk" ? "jkl-portal__main--no-margin" : ""
            }`}
            id="innhold"
        >
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            {children}
            {frontmatter.type && (
                <section className="jkl-spacing-3xl--bottom jkl-portal-paragraph">
                    <h2 className="jkl-heading-3 jkl-spacing-3xl--top">PropTypes</h2>
                    <Accordion className="jkl-spacing-xl--top">
                        {frontmatter.type.map(({ displayName, props }) => (
                            <AccordionItem title={`${displayName}`} key={displayName}>
                                <DataTable
                                    columns={["Prop", "DefaultValue", "Required", "Type"]}
                                    rows={getRows(Object.values(props))}
                                />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            )}
        </motion.main>
    );
};

export default DocPageLayout;
