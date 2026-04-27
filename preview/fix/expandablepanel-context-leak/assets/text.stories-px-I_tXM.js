import{j as e}from"./iframe-B0o1t7H3.js";import{T as r}from"./_index-CxmV2pv0.js";/* empty css               *//* empty css               */import{L as k}from"./Link-COXcVPPI.js";import{L as g,a as c,O as x,b as p}from"./ListItem-CTWvzf5O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const y={title:"Komponenter/Typografi/Text",component:r,args:{bold:!1,srOnly:!1,short:!1,size:"m",children:"Fremtind er ett av Norges største forsikringsselskap og står for nær en femtedel av det totale skadeforsikringsmarkedet."},argTypes:{size:{control:"radio",options:["xs","s","m","l"],description:"Visuell størrelse.",table:{defaultValue:{summary:"m"},type:{summary:'"xs" | "s" | "m" | "l"'}}},bold:{control:"boolean",description:"Uthever teksten (font-weight: bold).",table:{defaultValue:{summary:"false"}}},short:{control:"boolean",description:"Tettere linjehøyde. Bruk når teksten i all hovedsak går over én linje (f.eks. i tabellceller eller knapper).",table:{defaultValue:{summary:"false"}}},srOnly:{control:"boolean",description:"Skjuler elementet visuelt, men beholder det for skjermlesere.",table:{defaultValue:{summary:"false"}}},as:{control:"select",options:["p","span","label","legend","small","strong","em","code","kbd","samp","var"],description:"Hvilket HTML-element Text rendres som. Begrenset til typografisk relevante inline-elementer, <p>, og skjema-elementene <label>/<legend>.",table:{defaultValue:{summary:"p"},type:{summary:'"p" | "span" | "label" | "legend" | "small" | "strong" | "em" | "code" | "kbd" | "samp" | "var"'}}},className:{control:"text",description:"Ekstra klassenavn som legges til i tillegg til `jkl-text`.",table:{type:{summary:"string"}}}},tags:["autodocs","grouping content"]},s={},t={parameters:{controls:{disable:!0},docs:{source:{code:`<Text size="xs">Fontstørrelse xs</Text>
<Text size="s">Fontstørrelse s</Text>
<Text size="m">Fontstørrelse m</Text>
<Text size="l">Fontstørrelse l</Text>`}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",children:"Fontstørrelse xs"}),e.jsx(r,{size:"s",children:"Fontstørrelse s"}),e.jsx(r,{size:"m",children:"Fontstørrelse m"}),e.jsx(r,{size:"l",children:"Fontstørrelse l"})]})},n={parameters:{controls:{disable:!0},docs:{source:{code:`<Text>
    Forsikringer kjøper du i banken din eller i forbundet ditt.
</Text>
<Text bold>
    Fremtind hjelper og motiverer folk til å ta vare på helsen, verdiene
    og omgivelsene sine.
</Text>
<Text short>
    Tett linjehøyde passer når det er begrenset plass.
</Text>`}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Forsikringer kjøper du i banken din eller i forbundet ditt."}),e.jsx(r,{bold:!0,children:"Fremtind hjelper og motiverer folk til å ta vare på helsen, verdiene og omgivelsene sine."}),e.jsx(r,{short:!0,children:"Tett linjehøyde passer når det er begrenset plass, for eksempel i en tabellcelle eller et lite kort. Linjene ligger tettere enn standard brødtekst."})]})},i={args:{children:"Livet skjer når vi aller minst venter det. Mens noens drømmer går i oppfyllelse, går andres i knas. Gledelige begivenheter skjer hver dag, det gjør også skader og ulykker. Og midt i disse øyeblikkene møter vi deg."}},a={parameters:{controls:{disable:!0},docs:{source:{type:"code",language:"tsx",code:`<Text as="label" htmlFor="fodselsnummer">
    Fødselsnummer
</Text>
<input id="fodselsnummer" type="text" placeholder="11 siffer" />`}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"label",htmlFor:"fodselsnummer",children:"Fødselsnummer"}),e.jsx("input",{id:"fodselsnummer",type:"text",placeholder:"11 siffer",style:{padding:"8px",width:240}})]})},o={parameters:{controls:{disable:!0},docs:{source:{code:`<Text>
    Husk at du må <Text as="strong">bekrefte endringen</Text> før den
    trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
    se{" "}
    <Link href="/forsikringsbevis.pdf">
        <Text as="code">forsikringsbevis.pdf</Text>
    </Link>{" "}
    som blir lastet ned til maskinen din.
</Text>`}}},render:()=>e.jsxs(r,{children:["Husk at du må ",e.jsx(r,{as:"strong",children:"bekrefte endringen"})," før den trer i kraft. Trykk ",e.jsx(r,{as:"kbd",children:"Ctrl + S"})," for å lagre, og se"," ",e.jsx(k,{href:"/forsikringsbevis.pdf",children:e.jsx(r,{as:"code",children:"forsikringsbevis.pdf"})})," ","som blir lastet ned til maskinen din."]})},l={parameters:{controls:{disable:!0},docs:{source:{code:`<Text>I arbeidet med bærekraft prioriterer Fremtind:</Text>
<List>
    <CheckListItem>
        <Text as="span">Klimagassutslipp og ressursbruk</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Fysisk klimarisiko og skadeforebygging</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Ansvarlighet i verdikjeden</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Helse og forebygging</Text>
    </CheckListItem>
</List>`}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"I arbeidet med bærekraft prioriterer Fremtind:"}),e.jsxs(g,{children:[e.jsx(c,{children:e.jsx(r,{as:"span",children:"Klimagassutslipp og ressursbruk"})}),e.jsx(c,{children:e.jsx(r,{as:"span",children:"Fysisk klimarisiko og skadeforebygging"})}),e.jsx(c,{children:e.jsx(r,{as:"span",children:"Ansvarlighet i verdikjeden"})}),e.jsx(c,{children:e.jsx(r,{as:"span",children:"Helse og forebygging"})})]})]})},d={parameters:{controls:{disable:!0},docs:{source:{code:`<Text>
    Last ned{" "}
    <Link href="/vilkaar.pdf" external>
        vilkårene
        <Text as="span" srOnly> (PDF, åpnes i ny fane)</Text>
    </Link>{" "}
    før du inngår avtalen.
</Text>`}}},render:()=>e.jsxs(r,{children:["Last ned"," ",e.jsxs(k,{href:"/vilkaar.pdf",external:!0,children:["vilkårene",e.jsxs(r,{as:"span",srOnly:!0,children:[" ","(PDF, åpnes i ny fane)"]})]})," ","før du inngår avtalen."]})},m={parameters:{controls:{disable:!0},docs:{source:{code:`<Text>Slik kommer du i gang:</Text>
<OrderedList>
    <ListItem>
        <Text as="span">Logg inn på Min side i banken din</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg Meld skade</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg forsikringen det gjelder</Text>
    </ListItem>
</OrderedList>`}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Slik kommer du i gang:"}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(r,{as:"span",children:"Logg inn på Min side i banken din"})}),e.jsx(p,{children:e.jsx(r,{as:"span",children:"Velg Meld skade fra menyen"})}),e.jsx(p,{children:e.jsx(r,{as:"span",children:"Velg forsikringen det gjelder og følg veiviseren"})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Default-tilstand. Lek gjerne med propsene i kontrollpanelet for å se\nhvordan `size`, `bold`, `short`, `srOnly` og `as` påvirker resultatet.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text size="xs">Fontstørrelse xs</Text>
<Text size="s">Fontstørrelse s</Text>
<Text size="m">Fontstørrelse m</Text>
<Text size="l">Fontstørrelse l</Text>\`
      }
    }
  },
  render: () => <>
            <Text size="xs">Fontstørrelse xs</Text>
            <Text size="s">Fontstørrelse s</Text>
            <Text size="m">Fontstørrelse m</Text>
            <Text size="l">Fontstørrelse l</Text>
        </>
}`,...t.parameters?.docs?.source},description:{story:"Text støtter fire størrelser: `xs` (14px), `s` (16px), `m` (18px) og\n`l` (24px). Hver størrelse bruker Jøkul sine tekst-stil-tokens, så både\nlinjehøyde og andre detaljer følger med.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text>
    Forsikringer kjøper du i banken din eller i forbundet ditt.
</Text>
<Text bold>
    Fremtind hjelper og motiverer folk til å ta vare på helsen, verdiene
    og omgivelsene sine.
</Text>
<Text short>
    Tett linjehøyde passer når det er begrenset plass.
</Text>\`
      }
    }
  },
  render: () => <>
            <Text>
                Forsikringer kjøper du i banken din eller i forbundet ditt.
            </Text>
            <Text bold>
                Fremtind hjelper og motiverer folk til å ta vare på helsen,
                verdiene og omgivelsene sine.
            </Text>
            <Text short>
                Tett linjehøyde passer når det er begrenset plass, for eksempel
                i en tabellcelle eller et lite kort. Linjene ligger tettere enn
                standard brødtekst.
            </Text>
        </>
}`,...n.parameters?.docs?.source},description:{story:"Bruk `bold` for å utheve tekst, og `short` for å komprimere linjehøyden\n(f.eks. i tett-pakkede lister eller kort-lignende oppsett).",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Livet skjer når vi aller minst venter det. Mens noens drømmer går i oppfyllelse, går andres i knas. Gledelige begivenheter skjer hver dag, det gjør også skader og ulykker. Og midt i disse øyeblikkene møter vi deg."
  }
}`,...i.parameters?.docs?.source},description:{story:`Typisk brødtekst i medium størrelse. Teksten under er hentet fra
forsiden til fremtind.no.`,...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: \`<Text as="label" htmlFor="fodselsnummer">
    Fødselsnummer
</Text>
<input id="fodselsnummer" type="text" placeholder="11 siffer" />\`
      }
    }
  },
  render: () => <>
            <Text as="label" htmlFor="fodselsnummer">
                Fødselsnummer
            </Text>
            <input id="fodselsnummer" type="text" placeholder="11 siffer" style={{
      padding: "8px",
      width: 240
    }} />
        </>
}`,...a.parameters?.docs?.source},description:{story:'`as="label"` rendrer et `<label>`-element og får blokk-nivå og bunnmarg\nautomatisk. Kombineres typisk med et form-element via `htmlFor`.\nSamme prop er tilgjengelig på `Title` når du trenger label-stil med\nheading-typografi.',...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text>
    Husk at du må <Text as="strong">bekrefte endringen</Text> før den
    trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
    se{" "}
    <Link href="/forsikringsbevis.pdf">
        <Text as="code">forsikringsbevis.pdf</Text>
    </Link>{" "}
    som blir lastet ned til maskinen din.
</Text>\`
      }
    }
  },
  render: () => <Text>
            Husk at du må <Text as="strong">bekrefte endringen</Text> før den
            trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
            se{" "}
            <Link href="/forsikringsbevis.pdf">
                <Text as="code">forsikringsbevis.pdf</Text>
            </Link>{" "}
            som blir lastet ned til maskinen din.
        </Text>
}`,...o.parameters?.docs?.source},description:{story:"Bruk `as` til å rendre Text som semantiske inline-elementer som\n`strong`, `em`, `kbd` og `code`.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text>I arbeidet med bærekraft prioriterer Fremtind:</Text>
<List>
    <CheckListItem>
        <Text as="span">Klimagassutslipp og ressursbruk</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Fysisk klimarisiko og skadeforebygging</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Ansvarlighet i verdikjeden</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Helse og forebygging</Text>
    </CheckListItem>
</List>\`
      }
    }
  },
  render: () => <>
            <Text>I arbeidet med bærekraft prioriterer Fremtind:</Text>
            <List>
                <CheckListItem>
                    <Text as="span">Klimagassutslipp og ressursbruk</Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">
                        Fysisk klimarisiko og skadeforebygging
                    </Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">Ansvarlighet i verdikjeden</Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">Helse og forebygging</Text>
                </CheckListItem>
            </List>
        </>
}`,...l.parameters?.docs?.source},description:{story:'Bruk `Text` sammen med liste-komponentene (`List`, `OrderedList`,\n`ListItem`, `CheckListItem`) fremfor å sende `as="ul"` til Text.\nTeksten er hentet fra fremtind.no sine bærekraftssider.',...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text>
    Last ned{" "}
    <Link href="/vilkaar.pdf" external>
        vilkårene
        <Text as="span" srOnly> (PDF, åpnes i ny fane)</Text>
    </Link>{" "}
    før du inngår avtalen.
</Text>\`
      }
    }
  },
  render: () => <Text>
            Last ned{" "}
            <Link href="/vilkaar.pdf" external>
                vilkårene
                <Text as="span" srOnly>
                    {" "}
                    (PDF, åpnes i ny fane)
                </Text>
            </Link>{" "}
            før du inngår avtalen.
        </Text>
}`,...d.parameters?.docs?.source},description:{story:"`srOnly` skjuler teksten visuelt, men beholder den for skjermlesere.\nTypisk brukt for å legge til kontekst til lenker, knapper og ikoner som\nellers ville vært uklare for brukere av assistive teknologier.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`<Text>Slik kommer du i gang:</Text>
<OrderedList>
    <ListItem>
        <Text as="span">Logg inn på Min side i banken din</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg Meld skade</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg forsikringen det gjelder</Text>
    </ListItem>
</OrderedList>\`
      }
    }
  },
  render: () => <>
            <Text>Slik kommer du i gang:</Text>
            <OrderedList>
                <ListItem>
                    <Text as="span">Logg inn på Min side i banken din</Text>
                </ListItem>
                <ListItem>
                    <Text as="span">Velg Meld skade fra menyen</Text>
                </ListItem>
                <ListItem>
                    <Text as="span">
                        Velg forsikringen det gjelder og følg veiviseren
                    </Text>
                </ListItem>
            </OrderedList>
        </>
}`,...m.parameters?.docs?.source},description:{story:"Nummerert liste med `OrderedList` — nyttig når rekkefølgen betyr noe.",...m.parameters?.docs?.description}}};const F=["Default","SizeScale","BoldOgShort","Brødtekst","SomLabel","InlineElementer","MedListe","KunForSkjermleser","NummerertListe"];export{n as BoldOgShort,i as Brødtekst,s as Default,o as InlineElementer,d as KunForSkjermleser,l as MedListe,m as NummerertListe,t as SizeScale,a as SomLabel,F as __namedExportsOrder,y as default};
