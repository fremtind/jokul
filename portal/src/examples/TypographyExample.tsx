import React from "react";
import { Example } from "../components";
import { H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph, Link } from "@fremtind/jkl-typography-react";

import typeDef from "!raw-loader!@fremtind/jkl-typography-react/build/Typography.d.ts";

const example = `<div>
    <H1 style={{width: "100%"}}>Heading1</H1>
    <H2 style={{width: "100%"}}>Heading2</H2>
    <H3 style={{width: "100%"}}>Heading3</H3>
    <H4 style={{width: "100%"}}>Heading4</H4>
    <LeadParagraph>
        LeadParagraph: In incididunt commodo esse velit elit incididunt elit id ut commodo ut. Laborum nulla ea fugiat et enim voluptate id incididunt veniam Lorem amet. Mollit aute do ut duis eu anim laboris eu nulla consectetur. Ex pariatur cillum pariatur esse.
    </LeadParagraph>
    <P>
        Paragraph: Mollit ut sunt id minim sit est enim ad proident do veniam. In ipsum deserunt tempor sunt reprehenderit labore Lorem Lorem ullamco adipisicing elit. Irure cillum minim amet ut mollit ullamco non quis duis elit. Labore aliqua sint nostrud et exercitation ut qui enim proident magna excepteur. Aute dolor consequat sit incididunt dolore in laborum eiusmod.
    </P>
    <SmallParagraph>
        SmallParagraph: Anim amet aliqua duis est duis ea elit deserunt laboris ut laborum dolor veniam.
    </SmallParagraph>
    <TinyParagraph>
        TinyParagraph: Ad do dolor elit est minim anim deserunt anim aliquip.
    </TinyParagraph>
    <P>
        Link (inline). Bruk denne om det kommer en linje med tekst under linken: <Link inline href="#">Mollit ut</Link> sunt id minim sit est enim ad proident do veniam. In ipsum <Link inline href="#">deserunt</Link> tempor sunt reprehenderit labore Lorem Lorem ullamco adipisicing elit. Irure cillum minim amet ut mollit ullamco non quis duis elit.
    </P>
    <P>Link: Alternativ stil for frittstående linjer har <Link href="#">mer luft</Link>.</P>
</div>;`;

const exampleImport = `import { H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph } from "@fremtind/jkl-typography-react";
import "@fremtind/jkl-core/core.min.css;`;

const TypographyExample = () => (
    <Example
        exampleComponents={{ H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph, Link }}
        exampleCode={example}
        type={typeDef}
        exampleImport={exampleImport}
    />
);

export default TypographyExample;
