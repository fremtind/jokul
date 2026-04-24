import{r as g,j as e}from"./iframe-BJKLVHBW.js";import{F as i}from"./Flex-4eM3vTsZ.js";/* empty css               *//* empty css               */import{c as u}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BBo_3h2G.js";import"./mergeRefs-PO4j1EW7.js";const s=g.forwardRef(function({className:o,size:m="xl",as:c,srOnly:x,...h},p){const k=c||"h2";return e.jsx(k,{className:u("jkl-title",x&&"jkl-sr-only",o),"data-text-size":m,ref:p,...h})});s.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},size:{defaultValue:{value:'"xl"',computed:!1},required:!1}}};const b={title:"Komponenter/Title",component:s,argTypes:{size:{control:"select",options:["xxs","xs","s","m","l","xl","body"],table:{defaultValue:{summary:"xl"}},description:"Styrer visuell størrelse på tittelen."},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],table:{defaultValue:{summary:"h2"}},description:"Som standard rendres Title som h2. Endre for å beholde riktig semantisk heading-hierarki."},children:{control:"text",description:"React.ReactNode"},srOnly:{control:"boolean"}},args:{children:"Velkommen til Fremtind",size:"xl"},tags:["autodocs","grouping content"]},a={},d={args:{size:"l",children:"Forsikring fra Fremtind"},render:({children:r,...o})=>e.jsxs(i,{direction:"column",gap:"s",children:[e.jsxs(s,{size:"xl",children:[r," — xl"]}),e.jsxs(s,{...o,children:[r," — ",o.size]}),e.jsxs(s,{size:"m",children:[r," — m"]}),e.jsxs(s,{size:"s",children:[r," — s"]}),e.jsxs(s,{size:"xs",children:[r," — xs"]}),e.jsxs(s,{size:"body",children:[r," — body"]}),e.jsxs(s,{size:"xxs",children:[r," — xxs"]})]})},n={render:()=>e.jsxs(i,{direction:"column",gap:"l",children:[e.jsxs(i,{direction:"column",gap:"xs",children:[e.jsx(s,{as:"h3",size:"xs",children:"Samme element, ulik stil"}),e.jsx(s,{as:"h2",size:"xl",children:"Bilforsikring (h2, xl)"}),e.jsx(s,{as:"h2",size:"m",children:"Bilforsikring (h2, m)"}),e.jsx(s,{as:"h2",size:"xxs",children:"Bilforsikring (h2, xxs)"})]}),e.jsxs(i,{direction:"column",gap:"xs",children:[e.jsx(s,{as:"h3",size:"xs",children:"Samme stil, ulikt element"}),e.jsx(s,{as:"h1",size:"m",children:"Reiseforsikring (h1, m)"}),e.jsx(s,{as:"h2",size:"m",children:"Reiseforsikring (h2, m)"}),e.jsx(s,{as:"h3",size:"m",children:"Reiseforsikring (h3, m)"})]})]})},t={render:()=>e.jsxs(i,{direction:"column",gap:"xs",style:{maxWidth:560},children:[e.jsx(s,{as:"h2",srOnly:!0,children:"Produktoversikt"}),e.jsxs(i,{direction:"row",gap:"s",style:{border:"1px dashed rgba(0,0,0,.3)",borderRadius:6,padding:16},children:[e.jsx("span",{children:"🚗 Bilforsikring"}),e.jsx("span",{children:"🏠 Husforsikring"}),e.jsx("span",{children:"✈️ Reiseforsikring"})]}),e.jsx("p",{children:'Over: et visuelt kortgitter. h2-en "Produktoversikt" er usynlig, men tilgjengelig for skjermlesere slik at landemerket er beskrevet i hierarkiet.'})]})},l={render:()=>e.jsxs(i,{direction:"column",gap:"2xs",children:[e.jsx(s,{as:"h1",size:"s",children:"Mine forsikringer — Detaljer"}),e.jsx(s,{as:"h2",size:"xxs",children:"Kundenummer 12345678"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "l",
    children: "Forsikring fra Fremtind"
  },
  render: ({
    children,
    ...args
  }) => <Flex direction="column" gap="s">
            <Title size="xl">{children} — xl</Title>
            <Title {...args}>
                {children} — {args.size}
            </Title>
            <Title size="m">{children} — m</Title>
            <Title size="s">{children} — s</Title>
            <Title size="xs">{children} — xs</Title>
            <Title size="body">{children} — body</Title>
            <Title size="xxs">{children} — xxs</Title>
        </Flex>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="l">
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme element, ulik stil
                </Title>
                <Title as="h2" size="xl">
                    Bilforsikring (h2, xl)
                </Title>
                <Title as="h2" size="m">
                    Bilforsikring (h2, m)
                </Title>
                <Title as="h2" size="xxs">
                    Bilforsikring (h2, xxs)
                </Title>
            </Flex>
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme stil, ulikt element
                </Title>
                <Title as="h1" size="m">
                    Reiseforsikring (h1, m)
                </Title>
                <Title as="h2" size="m">
                    Reiseforsikring (h2, m)
                </Title>
                <Title as="h3" size="m">
                    Reiseforsikring (h3, m)
                </Title>
            </Flex>
        </Flex>
}`,...n.parameters?.docs?.source},description:{story:"`as` styrer semantikk (tilgjengelighet, heading-hierarki), `size` styrer\nvisuell størrelse. De to er frakoblet.\n\nFørst: samme semantiske element (`h2`) med ulik visuell størrelse.\nDeretter: samme visuelle størrelse (`m`) med ulikt semantisk element.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="xs" style={{
    maxWidth: 560
  }}>
            <Title as="h2" srOnly>
                Produktoversikt
            </Title>
            <Flex direction="row" gap="s" style={{
      border: "1px dashed rgba(0,0,0,.3)",
      borderRadius: 6,
      padding: 16
    }}>
                <span>🚗 Bilforsikring</span>
                <span>🏠 Husforsikring</span>
                <span>✈️ Reiseforsikring</span>
            </Flex>
            <p>
                Over: et visuelt kortgitter. h2-en &quot;Produktoversikt&quot;
                er usynlig, men tilgjengelig for skjermlesere slik at
                landemerket er beskrevet i hierarkiet.
            </p>
        </Flex>
}`,...t.parameters?.docs?.source},description:{story:"Bruk `srOnly` når du trenger en semantisk overskrift for skjermlesere,\nmen hvor designet ikke skal vise tittelen visuelt. Nyttig for landemerker\n(navigation, main, complementary) som allerede har visuell kontekst.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2xs">
            <Title as="h1" size="s">
                Mine forsikringer — Detaljer
            </Title>
            <Title as="h2" size="xxs">
                Kundenummer 12345678
            </Title>
        </Flex>
}`,...l.parameters?.docs?.source},description:{story:'Typisk brukstilfelle: en detaljside hos Fremtind trenger en `h1` for\nskjermlesere og SEO, men designet skal ikke ha en dominerende tittel.\nBehold `as="h1"` og velg en mindre `size`.',...l.parameters?.docs?.description}}};const R=["Default","Sizes","SemantikkOgStilFrakoblet","KunForSkjermleser","SemantiskH1MedLavVisuellVekt"];export{a as Default,t as KunForSkjermleser,n as SemantikkOgStilFrakoblet,l as SemantiskH1MedLavVisuellVekt,d as Sizes,R as __namedExportsOrder,b as default};
