import * as buttonReact from "@fremtind/jkl-button-react";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { LivePreview, LiveProvider, LiveError } from "react-live";
import { LiveEditor } from "../../components/interactive-code/LiveEditor";
import { Seo } from "../../components/seo";
import { PageTitle } from "../../components/Typography";

const pageTitle = "Lekegrind";

const defaultCode = `<PrimaryButton
                        forceCompact={false}
                        loader={false}
                        className="jkl-spacing-l--right"

                    >
                        Lagre og send inn
                    </PrimaryButton>`;

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

            <LiveProvider code={code?.trim()} scope={buttonReact}>
                <LiveEditor onChange={handleChange} />
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </motion.main>
    );
};

export default Lekegrind;
