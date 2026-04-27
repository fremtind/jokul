import{r as b,j as e}from"./iframe-BoFEDEja.js";import{C as j}from"./Card-vk4wDUzZ.js";import{F as r}from"./Flex-BB8lb2z_.js";import{T as c}from"./_index-CgPf8is4.js";/* empty css               *//* empty css               */import{c as z}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BAQK90cg.js";import"./mergeRefs-zrFraTSY.js";const n=b.forwardRef(function({className:p,size:u="l",as:k,srOnly:h,...x},T){const f=k||"h2";return e.jsx(f,{className:z("jkl-title",h&&"jkl-sr-only",p),"data-text-size":u,ref:T,...x})});n.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},size:{defaultValue:{value:'"l"',computed:!1},required:!1}}};const g=["xs","s","m","l","xl"],E={title:"Komponenter/Typografi/Title",component:n,args:{srOnly:!1,size:"l",children:"Forsikringer kjøper du i banken din eller i forbundet ditt"},argTypes:{size:{control:"select",options:g,description:"Visuell størrelse på tittelen, frakoblet fra `as`-nivået.",table:{defaultValue:{summary:"l"},type:{summary:'"xs" | "s" | "m" | "l" | "xl"'}}},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","label","legend"],description:"Semantisk element. Standard er h2. Bruk h1–h6 for dokument-hierarki, eller label/legend for skjema-grupperinger.",table:{defaultValue:{summary:"h2"},type:{summary:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "legend"'}}},srOnly:{control:"boolean",description:"Skjuler tittelen visuelt, men beholder den i skjermlesere.",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"Innholdet i tittelen."},className:{control:"text",description:"Ekstra klassenavn som legges til i tillegg til `jkl-title`.",table:{type:{summary:"string"}}}},tags:["autodocs","grouping content"]},s={},i={parameters:{controls:{disable:!0},docs:{source:{code:`<Title size="xs">…</Title>
<Title size="s">…</Title>
<Title size="m">…</Title>
<Title size="l">…</Title>
<Title size="xl">…</Title>`}}},render:()=>e.jsx(r,{direction:"column",gap:"s",children:g.map(m=>e.jsxs(n,{size:m,children:["Markedsposisjon og eierforhold — ",m]},m))})},t={parameters:{controls:{disable:!0},docs:{source:{code:`{/* Samme element (h2), ulik visuell størrelse */}
<Title size="xl">Om oss</Title>
<Title size="m">Om oss</Title>
<Title size="xs">Om oss</Title>

{/* Samme visuelle størrelse (m), ulikt semantisk element */}
<Title as="h1" size="m">Bærekraft</Title>
<Title size="m">Bærekraft</Title>
<Title as="h3" size="m">Bærekraft</Title>`}}},render:()=>e.jsxs(r,{direction:"column",gap:"l",children:[e.jsxs(r,{direction:"column",gap:"xs",children:[e.jsx(n,{as:"h3",size:"xs",children:"Samme element, ulik stil"}),e.jsx(n,{size:"xl",children:"Om oss (h2, xl)"}),e.jsx(n,{size:"m",children:"Om oss (h2, m)"}),e.jsx(n,{size:"xs",children:"Om oss (h2, xs)"})]}),e.jsxs(r,{direction:"column",gap:"xs",children:[e.jsx(n,{as:"h3",size:"xs",children:"Samme stil, ulikt element"}),e.jsx(n,{as:"h1",size:"m",children:"Bærekraft (h1, m)"}),e.jsx(n,{size:"m",children:"Bærekraft (h2, m)"}),e.jsx(n,{as:"h3",size:"m",children:"Bærekraft (h3, m)"})]})]})},l={parameters:{controls:{disable:!0},docs:{source:{code:`<section aria-labelledby="forsikringer">
    <Title id="forsikringer" srOnly>
        Forsikringene dine
    </Title>
    {/* Visuelt innhold for seksjonen */}
</section>`}}},render:()=>e.jsxs(r,{direction:"column",gap:"xs",style:{maxWidth:560},children:[e.jsx(n,{srOnly:!0,children:"Forsikringene dine"}),e.jsxs(r,{direction:"row",gap:"s",style:{border:"1px dashed rgba(0,0,0,.3)",borderRadius:6,padding:16},children:[e.jsx("span",{children:"🚗 Bilforsikring"}),e.jsx("span",{children:"🏠 Husforsikring"}),e.jsx("span",{children:"✈️ Reiseforsikring"})]}),e.jsx("p",{children:'Over: et visuelt kortgitter. h2-en "Forsikringene dine" er usynlig, men tilgjengelig for skjermlesere slik at landemerket er beskrevet i hierarkiet.'})]})},o={parameters:{controls:{disable:!0},docs:{source:{type:"code",language:"tsx",code:`<Card variant="high" padding="l">
    <Flex direction="column" gap="m">
        <Flex as="hgroup" direction="column" gap="xs">
            <Title>Ambisjon og bærekraftsarbeid</Title>
            <Text>
                Fremtind hjelper og motiverer folk til å ta vare på helsen,
                verdiene og omgivelsene sine — og er der når det trengs.
            </Text>
        </Flex>
        <Text size="s">
            Vi tilbyr produkter og tjenester gjennom banker og LO i Norge
            som «forsikring i bank», og vi er til stede i hele landet.
        </Text>
    </Flex>
</Card>`}}},render:()=>e.jsx(j,{variant:"high",padding:"l",children:e.jsxs(r,{direction:"column",gap:"m",style:{maxWidth:560},children:[e.jsxs(r,{as:"hgroup",direction:"column",gap:"xs",children:[e.jsx(n,{children:"Ambisjon og bærekraftsarbeid"}),e.jsx(c,{children:"Fremtind hjelper og motiverer folk til å ta vare på helsen, verdiene og omgivelsene sine — og er der når det trengs."})]}),e.jsx(c,{size:"s",children:"Vi tilbyr produkter og tjenester gjennom banker og LO i Norge som «forsikring i bank», og vi er til stede i hele landet."})]})})},a={parameters:{controls:{disable:!0},docs:{type:"code",language:"tsx",source:{code:`<fieldset>
    <Title as="legend" size="xs">Kontaktinformasjon</Title>
    <Title as="label" size="xs" htmlFor="telefon">
        Telefonnummer
    </Title>
    <input id="telefon" type="tel" placeholder="8 siffer" />
</fieldset>`}}},render:()=>e.jsxs("fieldset",{style:{border:"1px solid rgba(0,0,0,.2)",borderRadius:6,padding:16,maxWidth:360},children:[e.jsx(n,{as:"legend",size:"xs",children:"Kontaktinformasjon"}),e.jsx(n,{as:"label",size:"xs",htmlFor:"telefon",children:"Telefonnummer"}),e.jsx("input",{id:"telefon",type:"tel",placeholder:"8 siffer",style:{padding:"8px",width:"100%",boxSizing:"border-box"}})]})},d={parameters:{controls:{disable:!0},docs:{source:{code:`<Title as="h1" size="m">
    Forsikringene dine
</Title>
<Title size="xs">
    Kundenummer 12345678
</Title>`}}},render:()=>e.jsxs(r,{direction:"column",gap:"2xs",children:[e.jsx(n,{as:"h1",size:"m",children:"Forsikringene dine"}),e.jsx(n,{size:"xs",children:"Kundenummer 12345678"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Default-tilstand. Prøv ulike kombinasjoner av `as` og `size` i\nkontrollpanelet for å se hvordan de fungerer uavhengig.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Title size="xs">…</Title>
<Title size="s">…</Title>
<Title size="m">…</Title>
<Title size="l">…</Title>
<Title size="xl">…</Title>\`
      }
    }
  },
  render: () => <Flex direction="column" gap="s">
            {SIZES.map(size => <Title key={size} size={size}>
                    Markedsposisjon og eierforhold — {size}
                </Title>)}
        </Flex>
}`,...i.parameters?.docs?.source},description:{story:"Title har fem størrelser, fra `xs` (minst) til `xl` (størst).",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`{/* Samme element (h2), ulik visuell størrelse */}
<Title size="xl">Om oss</Title>
<Title size="m">Om oss</Title>
<Title size="xs">Om oss</Title>

{/* Samme visuelle størrelse (m), ulikt semantisk element */}
<Title as="h1" size="m">Bærekraft</Title>
<Title size="m">Bærekraft</Title>
<Title as="h3" size="m">Bærekraft</Title>\`
      }
    }
  },
  render: () => <Flex direction="column" gap="l">
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme element, ulik stil
                </Title>
                <Title size="xl">Om oss (h2, xl)</Title>
                <Title size="m">Om oss (h2, m)</Title>
                <Title size="xs">Om oss (h2, xs)</Title>
            </Flex>
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme stil, ulikt element
                </Title>
                <Title as="h1" size="m">
                    Bærekraft (h1, m)
                </Title>
                <Title size="m">Bærekraft (h2, m)</Title>
                <Title as="h3" size="m">
                    Bærekraft (h3, m)
                </Title>
            </Flex>
        </Flex>
}`,...t.parameters?.docs?.source},description:{story:"`as` styrer semantikk (tilgjengelighet, heading-hierarki), `size` styrer\nvisuell størrelse. De to er frakoblet.\n\nFørst: samme semantiske element (`h2`) med ulik visuell størrelse.\nDeretter: samme visuelle størrelse (`m`) med ulikt semantisk element.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<section aria-labelledby="forsikringer">
    <Title id="forsikringer" srOnly>
        Forsikringene dine
    </Title>
    {/* Visuelt innhold for seksjonen */}
</section>\`
      }
    }
  },
  render: () => <Flex direction="column" gap="xs" style={{
    maxWidth: 560
  }}>
            <Title srOnly>Forsikringene dine</Title>
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
                Over: et visuelt kortgitter. h2-en &quot;Forsikringene
                dine&quot; er usynlig, men tilgjengelig for skjermlesere slik at
                landemerket er beskrevet i hierarkiet.
            </p>
        </Flex>
}`,...l.parameters?.docs?.source},description:{story:"Bruk `srOnly` når du trenger en semantisk overskrift for skjermlesere,\nmen hvor designet ikke skal vise tittelen visuelt. Nyttig for landemerker\n(navigation, main, complementary) som allerede har visuell kontekst.",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: \`<Card variant="high" padding="l">
    <Flex direction="column" gap="m">
        <Flex as="hgroup" direction="column" gap="xs">
            <Title>Ambisjon og bærekraftsarbeid</Title>
            <Text>
                Fremtind hjelper og motiverer folk til å ta vare på helsen,
                verdiene og omgivelsene sine — og er der når det trengs.
            </Text>
        </Flex>
        <Text size="s">
            Vi tilbyr produkter og tjenester gjennom banker og LO i Norge
            som «forsikring i bank», og vi er til stede i hele landet.
        </Text>
    </Flex>
</Card>\`
      }
    }
  },
  render: () => <Card variant="high" padding="l">
            <Flex direction="column" gap="m" style={{
      maxWidth: 560
    }}>
                <Flex as="hgroup" direction="column" gap="xs">
                    <Title>Ambisjon og bærekraftsarbeid</Title>
                    <Text>
                        Fremtind hjelper og motiverer folk til å ta vare på
                        helsen, verdiene og omgivelsene sine — og er der når det
                        trengs.
                    </Text>
                </Flex>
                <Text size="s">
                    Vi tilbyr produkter og tjenester gjennom banker og LO i
                    Norge som «forsikring i bank», og vi er til stede i hele
                    landet.
                </Text>
            </Flex>
        </Card>
}`,...o.parameters?.docs?.source},description:{story:"Typisk sammensetning av `Title` og `Text` inne i et `Card`: en\nseksjonstittel på toppen, en ingress i mellomstørrelse, og en liten\nsekundær linje. Teksten er hentet fra fremtind.no sine bærekraftssider.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      type: "code",
      language: "tsx",
      source: {
        code: \`<fieldset>
    <Title as="legend" size="xs">Kontaktinformasjon</Title>
    <Title as="label" size="xs" htmlFor="telefon">
        Telefonnummer
    </Title>
    <input id="telefon" type="tel" placeholder="8 siffer" />
</fieldset>\`
      }
    }
  },
  render: () => <fieldset style={{
    border: "1px solid rgba(0,0,0,.2)",
    borderRadius: 6,
    padding: 16,
    maxWidth: 360
  }}>
            <Title as="legend" size="xs">
                Kontaktinformasjon
            </Title>
            <Title as="label" size="xs" htmlFor="telefon">
                Telefonnummer
            </Title>
            <input id="telefon" type="tel" placeholder="8 siffer" style={{
      padding: "8px",
      width: "100%",
      boxSizing: "border-box"
    }} />
        </fieldset>
}`,...a.parameters?.docs?.source},description:{story:'Skjema-grupperinger: `as="legend"` gir en fieldset-tittel, og\n`as="label"` gir etikett for et enkeltfelt. Begge får automatisk\nnormal font-weight, relaxed linjehøyde og label får blokk-nivå +\nbunnmarg — uavhengig av valgt `size`.',...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Title as="h1" size="m">
    Forsikringene dine
</Title>
<Title size="xs">
    Kundenummer 12345678
</Title>\`
      }
    }
  },
  render: () => <Flex direction="column" gap="2xs">
            <Title as="h1" size="m">
                Forsikringene dine
            </Title>
            <Title size="xs">Kundenummer 12345678</Title>
        </Flex>
}`,...d.parameters?.docs?.source},description:{story:'Typisk brukstilfelle: en detaljside hos Fremtind trenger en `h1` for\nskjermlesere og SEO, men designet skal ikke ha en dominerende tittel.\nBehold `as="h1"` og velg en mindre `size`.',...d.parameters?.docs?.description}}};const I=["Default","Sizes","SemantikkOgStilFrakoblet","KunForSkjermleser","IKort","ISkjema","SemantiskH1MedLavVisuellVekt"];export{s as Default,o as IKort,a as ISkjema,l as KunForSkjermleser,t as SemantikkOgStilFrakoblet,d as SemantiskH1MedLavVisuellVekt,i as Sizes,I as __namedExportsOrder,E as default};
