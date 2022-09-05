import { NavCard } from "@fremtind/jkl-card-react";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { LivePreview, LiveError } from "react-live";
import { LiveEditor } from "../../components/interactive-code/LiveEditor";
import { LiveProvider } from "../../components/interactive-code/LiveProvider";
import { Seo } from "../../components/seo";
import { PageTitle } from "../../components/Typography";

const pageTitle = "Lekegrind";

const defaultCode = `
    <h2 className="jkl-heading-2 jkl-spacing-s--bottom">Velkommen hit</h2>
    <p>Her kan du teste Jøkuls komponenter direkte i nettleseren.</p>
    <p>Bare finn komponenten du vil teste blant Jøkuls komponenter, og lim inn koden i tekstfeltet.</p>
`;

export const Head: FC = () => <Seo title={pageTitle} />;

const Lekegrind: FC = () => {
    const [code, setCode] = useState<string>(defaultCode);

    const handleChange = (newCode: string) => {
        setCode(newCode);
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="jkl-portal__main"
        >
            <PageTitle>{pageTitle}</PageTitle>

            <LiveProvider code={code?.trim()}>
                <div className="jkl-spacing-l--bottom">
                    <LiveEditor onChange={handleChange} />
                </div>
                <LiveError />
                <div className="jkl-spacing-2xl--bottom">
                    <LivePreview />
                </div>
            </LiveProvider>
            <NavCard href="/komponenter/card" padding="l" target="_blank" title="Jøkul-komponenter" />
        </motion.main>
    );
};

export default Lekegrind;
