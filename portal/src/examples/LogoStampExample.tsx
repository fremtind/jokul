import React from "react";
import { Example } from "../components";
import {
    LogoStampDistributor,
    LogoStampInnovation,
    LogoStampInsurance,
    LogoStampTechnology,
} from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";

import logoStampDistributorType from "!raw-loader!@fremtind/jkl-logo-react/build/stamp/LogoStampDistributor.d.ts";
import logoStampInnovationType from "!raw-loader!@fremtind/jkl-logo-react/build/stamp/LogoStampInnovation.d.ts";
import logoStampInsuranceType from "!raw-loader!@fremtind/jkl-logo-react/build/stamp/LogoStampInsurance.d.ts";
import logoStampTechnologyType from "!raw-loader!@fremtind/jkl-logo-react/build/stamp/LogoStampTechnology.d.ts";

const example = `() => {
    const [showSymbol, toggleSymbol] = React.useState(false);
    const style = { 
        width: "300px",
        padding: "20px"
    };
    const negativeStyle = { 
        ...style,
        backgroundColor: "#000",
        color: "#fafafa"
    };
    const wrapperStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    };

    return (
        <>
            <div style={style}>
                <LogoStampDistributor />
                <LogoStampInnovation />
                <LogoStampInsurance />
                <LogoStampTechnology />
            </div>
            <div style={negativeStyle}>
                <LogoStampDistributor />
                <LogoStampInnovation />
                <LogoStampInsurance />
                <LogoStampTechnology />
            </div>
        </>
    );
};`;

const exampleImport = `import {
    LogoStampDistributor,
    LogoStampInnovation,
    LogoStampInsurance,
    LogoStampTechnology,
} from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";`;

const LogoExample = () => (
    <Example
        exampleComponents={{ LogoStampDistributor, LogoStampInnovation, LogoStampInsurance, LogoStampTechnology }}
        exampleCode={example}
        types={[
            { name: "Logostempel distributør", type: logoStampDistributorType },
            { name: "Logostempel innovasjon", type: logoStampInnovationType },
            { name: "Logostempel forsikring", type: logoStampInsuranceType },
            { name: "Logostempel teknologi", type: logoStampTechnologyType },
        ]}
        exampleImport={exampleImport}
    />
);

export default LogoExample;
