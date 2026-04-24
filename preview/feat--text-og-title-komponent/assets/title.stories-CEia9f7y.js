import{r as x,j as e}from"./iframe-NfZ23ZEj.js";import{F as s}from"./Flex-DXZqSlXQ.js";/* empty css               *//* empty css               */import{c as f}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BXVrj7Ue.js";import"./mergeRefs-CzypiQxR.js";const r=x.forwardRef(function({className:d,size:c="2xlarge",as:u,srOnly:p,...g},k){const h=u||"h2";return e.jsx(h,{className:f("jkl-title",p&&"jkl-sr-only",d),"data-text-size":c,ref:k,...g})});r.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},size:{defaultValue:{value:'"2xlarge"',computed:!1},required:!1}}};const m=["2xsmall","xsmall","small","medium","large","xlarge","2xlarge"],R={title:"Komponenter/Typografi/Title",component:r,args:{srOnly:!1,size:"2xlarge",children:"Fremtind Forsikring leverer forsikringene til kundene i SpareBank 1, DNB og Eika-gruppen."},argTypes:{size:{control:"select",options:m,description:"Visuell størrelse på tittelen, frakoblet fra `as`-nivået.",table:{defaultValue:{summary:"2xlarge"},type:{summary:'"2xsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "2xlarge"'}}},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Semantisk heading-nivå. Som standard rendres Title som h2 — endre for å beholde riktig heading-hierarki.",table:{defaultValue:{summary:"h2"},type:{summary:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"'}}},srOnly:{control:"boolean",description:"Skjuler tittelen visuelt, men beholder den i skjermlesere.",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"Innholdet i tittelen."},className:{control:"text",description:"Ekstra klassenavn som legges til i tillegg til `jkl-title`.",table:{type:{summary:"string"}}}},tags:["autodocs","grouping content"]},i={},n={render:()=>e.jsx(s,{direction:"column",gap:"s",children:m.map(o=>e.jsxs(r,{size:o,children:["Forsikring fra Fremtind — ",o]},o))})},t={render:()=>e.jsxs(s,{direction:"column",gap:"l",children:[e.jsxs(s,{direction:"column",gap:"xs",children:[e.jsx(r,{as:"h3",size:"xsmall",children:"Samme element, ulik stil"}),e.jsx(r,{as:"h2",size:"2xlarge",children:"Bilforsikring (h2, 2xlarge)"}),e.jsx(r,{as:"h2",size:"medium",children:"Bilforsikring (h2, medium)"}),e.jsx(r,{as:"h2",size:"2xsmall",children:"Bilforsikring (h2, 2xsmall)"})]}),e.jsxs(s,{direction:"column",gap:"xs",children:[e.jsx(r,{as:"h3",size:"xsmall",children:"Samme stil, ulikt element"}),e.jsx(r,{as:"h1",size:"medium",children:"Reiseforsikring (h1, medium)"}),e.jsx(r,{as:"h2",size:"medium",children:"Reiseforsikring (h2, medium)"}),e.jsx(r,{as:"h3",size:"medium",children:"Reiseforsikring (h3, medium)"})]})]})},l={render:()=>e.jsxs(s,{direction:"column",gap:"xs",style:{maxWidth:560},children:[e.jsx(r,{as:"h2",srOnly:!0,children:"Produktoversikt"}),e.jsxs(s,{direction:"row",gap:"s",style:{border:"1px dashed rgba(0,0,0,.3)",borderRadius:6,padding:16},children:[e.jsx("span",{children:"🚗 Bilforsikring"}),e.jsx("span",{children:"🏠 Husforsikring"}),e.jsx("span",{children:"✈️ Reiseforsikring"})]}),e.jsx("p",{children:'Over: et visuelt kortgitter. h2-en "Produktoversikt" er usynlig, men tilgjengelig for skjermlesere slik at landemerket er beskrevet i hierarkiet.'})]})},a={render:()=>e.jsxs(s,{direction:"column",gap:"2xs",children:[e.jsx(r,{as:"h1",size:"medium",children:"Mine forsikringer — Detaljer"}),e.jsx(r,{as:"h2",size:"2xsmall",children:"Kundenummer 12345678"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"Default-tilstand. Prøv ulike kombinasjoner av `as` og `size` i\nkontrollpanelet for å se hvordan de fungerer uavhengig.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="s">
            {SIZES.map(size => <Title key={size} size={size}>
                    Forsikring fra Fremtind — {size}
                </Title>)}
        </Flex>
}`,...n.parameters?.docs?.source},description:{story:"Title har syv størrelser, fra `2xsmall` (minst) til `2xlarge` (størst).",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="l">
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xsmall">
                    Samme element, ulik stil
                </Title>
                <Title as="h2" size="2xlarge">
                    Bilforsikring (h2, 2xlarge)
                </Title>
                <Title as="h2" size="medium">
                    Bilforsikring (h2, medium)
                </Title>
                <Title as="h2" size="2xsmall">
                    Bilforsikring (h2, 2xsmall)
                </Title>
            </Flex>
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xsmall">
                    Samme stil, ulikt element
                </Title>
                <Title as="h1" size="medium">
                    Reiseforsikring (h1, medium)
                </Title>
                <Title as="h2" size="medium">
                    Reiseforsikring (h2, medium)
                </Title>
                <Title as="h3" size="medium">
                    Reiseforsikring (h3, medium)
                </Title>
            </Flex>
        </Flex>
}`,...t.parameters?.docs?.source},description:{story:"`as` styrer semantikk (tilgjengelighet, heading-hierarki), `size` styrer\nvisuell størrelse. De to er frakoblet.\n\nFørst: samme semantiske element (`h2`) med ulik visuell størrelse.\nDeretter: samme visuelle størrelse (`medium`) med ulikt semantisk element.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Bruk `srOnly` når du trenger en semantisk overskrift for skjermlesere,\nmen hvor designet ikke skal vise tittelen visuelt. Nyttig for landemerker\n(navigation, main, complementary) som allerede har visuell kontekst.",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2xs">
            <Title as="h1" size="medium">
                Mine forsikringer — Detaljer
            </Title>
            <Title as="h2" size="2xsmall">
                Kundenummer 12345678
            </Title>
        </Flex>
}`,...a.parameters?.docs?.source},description:{story:'Typisk brukstilfelle: en detaljside hos Fremtind trenger en `h1` for\nskjermlesere og SEO, men designet skal ikke ha en dominerende tittel.\nBehold `as="h1"` og velg en mindre `size`.',...a.parameters?.docs?.description}}};const B=["Default","Sizes","SemantikkOgStilFrakoblet","KunForSkjermleser","SemantiskH1MedLavVisuellVekt"];export{i as Default,l as KunForSkjermleser,t as SemantikkOgStilFrakoblet,a as SemantiskH1MedLavVisuellVekt,n as Sizes,B as __namedExportsOrder,R as default};
