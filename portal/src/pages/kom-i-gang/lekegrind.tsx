import React, { FC, useState } from "react";
import { LiveEditor } from "../../components/interactive-code/LiveEditor";
import { LiveError } from "../../components/interactive-code/LiveError";
import { LivePreview } from "../../components/interactive-code/LivePreview";
import { LiveProvider } from "../../components/interactive-code/LiveProvider";
import { Seo } from "../../components/seo";
import { PageTitle } from "../../components/Typography";
import { MainContent } from "../../layout/MainContent";

const pageTitle = "Lekegrind";

const defaultCode = `
<h2 className="jkl-heading-2 jkl-spacing-s--bottom">Velkommen hit</h2>
<p className="jkl-portal-paragraph">Her kan du teste Jøkuls komponenter direkte i nettleseren.</p>
<p className="jkl-portal-paragraph">Bare finn komponenten du vil teste blant Jøkuls komponenter, og lim inn koden i tekstfeltet.</p>
<NavCard href="/komponenter/card" padding="l" target="_blank" title="Jøkul-komponenter" style={{maxWidth:"360px"}} />
`;

export const Head: FC = () => <Seo title={pageTitle} />;

const Lekegrind: FC = () => {
    const [code, setCode] = useState<string>(defaultCode);

    const handleChange = (newCode: string) => {
        setCode(newCode);
    };

    return (
        <MainContent>
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
        </MainContent>
    );
};

export default Lekegrind;
