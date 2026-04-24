import{r as L,j as e}from"./iframe-RiSe5yph.js";/* empty css               *//* empty css               *//* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{L as k}from"./Link-DXUlGc0d.js";import{L as z,a as p,O as F,b as c}from"./ListItem-7c2zrLeu.js";import"./preload-helper-PPVm8Dsz.js";const r=L.forwardRef(function({as:u,className:g,size:x,bold:f,short:h,srOnly:b,...T},j){const y=u||"p";return e.jsx(y,{className:v("jkl-text",b&&"jkl-sr-only",g),"data-text-size":x,"data-bold":f||void 0,"data-short":h||void 0,ref:j,...T})});r.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""}}};const H={title:"Komponenter/Typografi/Text",component:r,args:{bold:!1,srOnly:!1,short:!1,children:"Fremtind leverer forsikringene til kundene i SpareBank 1, DNB og Eika-gruppen."},argTypes:{size:{control:"radio",options:["small","medium","large"],description:"Visuell størrelse. Utelat for å arve font-size fra parent.",table:{type:{summary:'"small" | "medium" | "large"'}}},bold:{control:"boolean",description:"Uthever teksten (font-weight: bold).",table:{defaultValue:{summary:"false"}}},short:{control:"boolean",description:"Tettere linjehøyde. Bruk når teksten i all hovedsak går over én linje (f.eks. i tabellceller eller knapper).",table:{defaultValue:{summary:"false"}}},srOnly:{control:"boolean",description:"Skjuler elementet visuelt, men beholder det for skjermlesere.",table:{defaultValue:{summary:"false"}}},as:{control:"select",options:["p","span","label","small","strong","em","code","kbd","samp","var"],description:"Hvilket HTML-element Text rendres som. Begrenset til typografisk relevante inline-elementer og <p>.",table:{defaultValue:{summary:"p"},type:{summary:'"p" | "span" | "label" | "small" | "strong" | "em" | "code" | "kbd" | "samp" | "var"'}}},className:{control:"text",description:"Ekstra klassenavn som legges til i tillegg til `jkl-text`.",table:{type:{summary:"string"}}}},tags:["autodocs","grouping content"]},s={},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",children:"Fontstørrelse small"}),e.jsx(r,{size:"medium",children:"Fontstørrelse medium"}),e.jsx(r,{size:"large",children:"Fontstørrelse large"})]})},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"medium",children:"Standard brødtekst fra Fremtind."}),e.jsxs(r,{size:"medium",bold:!0,children:["Uthevet brødtekst med ",e.jsx("code",{children:"bold"}),"."]}),e.jsx(r,{size:"medium",short:!0,children:"Tett linjehøyde passer når det er begrenset plass, for eksempel i en tabellcelle eller et lite kort. Linjene ligger tettere enn standard brødtekst."})]})},i={args:{size:"medium",children:"Bilforsikringen fra Fremtind dekker skader på bilen din, enten du kolliderer, parkerer feil eller blir påkjørt. Du velger selv mellom delkasko og kasko, og egenandelen starter på 4 000 kr."}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"label",size:"medium",htmlFor:"fodselsnummer",children:"Fødselsnummer"}),e.jsx("input",{id:"fodselsnummer",type:"text",placeholder:"11 siffer",style:{padding:"8px",width:240}})]})},l={render:()=>e.jsxs(r,{as:"p",size:"medium",children:["Husk at du må ",e.jsx(r,{as:"strong",children:"bekrefte endringen"})," før den trer i kraft. Trykk ",e.jsx(r,{as:"kbd",children:"Ctrl + S"})," for å lagre, og se"," ",e.jsx(k,{href:"/forsikringsbevis.pdf",children:e.jsx(r,{as:"code",children:"forsikringsbevis.pdf"})})," ","som blir lastet ned til maskinen din."]})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",size:"medium",children:"Kaskoforsikringen hos Fremtind inkluderer:"}),e.jsxs(z,{children:[e.jsx(p,{children:e.jsx(r,{as:"span",size:"medium",children:"Ansvar overfor andre trafikanter"})}),e.jsx(p,{children:e.jsx(r,{as:"span",size:"medium",children:"Brann, tyveri og hærverk"})}),e.jsx(p,{children:e.jsx(r,{as:"span",size:"medium",children:"Glasskader uten egenandel"})}),e.jsx(p,{children:e.jsx(r,{as:"span",size:"medium",children:"Leiebil i inntil 20 dager"})})]})]})},o={render:()=>e.jsxs(r,{as:"p",size:"medium",children:["Last ned"," ",e.jsxs(k,{href:"/vilkaar.pdf",external:!0,children:["vilkårene",e.jsxs(r,{as:"span",srOnly:!0,children:[" ","(PDF, åpnes i ny fane)"]})]})," ","før du inngår avtalen med Fremtind."]})},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",size:"medium",children:"Slik melder du skade til Fremtind:"}),e.jsxs(F,{children:[e.jsx(c,{children:e.jsx(r,{as:"span",size:"medium",children:"Logg inn på Min side hos SpareBank 1 eller DNB"})}),e.jsx(c,{children:e.jsx(r,{as:"span",size:"medium",children:"Velg forsikringen det gjelder"})}),e.jsx(c,{children:e.jsx(r,{as:"span",size:"medium",children:"Fyll ut skademeldingen og last opp bilder"})}),e.jsx(c,{children:e.jsx(r,{as:"span",size:"medium",children:"Skadebehandleren tar kontakt innen to virkedager"})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Default-tilstand. Lek gjerne med propsene i kontrollpanelet for å se\nhvordan `size`, `bold`, `short`, `srOnly` og `as` påvirker resultatet.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text size="small">Fontstørrelse small</Text>
            <Text size="medium">Fontstørrelse medium</Text>
            <Text size="large">Fontstørrelse large</Text>
        </>
}`,...n.parameters?.docs?.source},description:{story:"Text støtter tre størrelser: `small` (16px), `medium` (18px) og\n`large` (24px).",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text size="medium">Standard brødtekst fra Fremtind.</Text>
            <Text size="medium" bold>
                Uthevet brødtekst med <code>bold</code>.
            </Text>
            <Text size="medium" short>
                Tett linjehøyde passer når det er begrenset plass, for eksempel
                i en tabellcelle eller et lite kort. Linjene ligger tettere enn
                standard brødtekst.
            </Text>
        </>
}`,...t.parameters?.docs?.source},description:{story:"Bruk `bold` for å utheve tekst, og `short` for å komprimere linjehøyden\n(f.eks. i tett-pakkede lister eller kort-lignende oppsett).",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    children: "Bilforsikringen fra Fremtind dekker skader på bilen din, enten du kolliderer, parkerer feil eller blir påkjørt. Du velger selv mellom delkasko og kasko, og egenandelen starter på 4 000 kr."
  }
}`,...i.parameters?.docs?.source},description:{story:"Typisk brødtekst i medium størrelse.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text as="label" size="medium" htmlFor="fodselsnummer">
                Fødselsnummer
            </Text>
            <input id="fodselsnummer" type="text" placeholder="11 siffer" style={{
      padding: "8px",
      width: 240
    }} />
        </>
}`,...a.parameters?.docs?.source},description:{story:'`as="label"` rendrer et `<label>`-element og får label-typiske stiler\n(blokk-nivå, bunnmarg, tettere linjehøyde). Kombineres typisk med et\nform-element via `htmlFor`.',...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Text as="p" size="medium">
            Husk at du må <Text as="strong">bekrefte endringen</Text> før den
            trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
            se{" "}
            <Link href="/forsikringsbevis.pdf">
                <Text as="code">forsikringsbevis.pdf</Text>
            </Link>{" "}
            som blir lastet ned til maskinen din.
        </Text>
}`,...l.parameters?.docs?.source},description:{story:"Bruk `as` til å rendre Text som semantiske inline-elementer som\n`strong`, `em`, `kbd` og `code`.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text as="p" size="medium">
                Kaskoforsikringen hos Fremtind inkluderer:
            </Text>
            <List>
                <CheckListItem>
                    <Text as="span" size="medium">
                        Ansvar overfor andre trafikanter
                    </Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span" size="medium">
                        Brann, tyveri og hærverk
                    </Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span" size="medium">
                        Glasskader uten egenandel
                    </Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span" size="medium">
                        Leiebil i inntil 20 dager
                    </Text>
                </CheckListItem>
            </List>
        </>
}`,...d.parameters?.docs?.source},description:{story:'Bruk `Text` sammen med liste-komponentene (`List`, `OrderedList`,\n`ListItem`, `CheckListItem`) fremfor å sende `as="ul"` til Text.',...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Text as="p" size="medium">
            Last ned{" "}
            <Link href="/vilkaar.pdf" external>
                vilkårene
                <Text as="span" srOnly>
                    {" "}
                    (PDF, åpnes i ny fane)
                </Text>
            </Link>{" "}
            før du inngår avtalen med Fremtind.
        </Text>
}`,...o.parameters?.docs?.source},description:{story:"`srOnly` skjuler teksten visuelt, men beholder den for skjermlesere.\nTypisk brukt for å legge til kontekst til lenker, knapper og ikoner som\nellers ville vært uklare for brukere av assistive teknologier.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text as="p" size="medium">
                Slik melder du skade til Fremtind:
            </Text>
            <OrderedList>
                <ListItem>
                    <Text as="span" size="medium">
                        Logg inn på Min side hos SpareBank 1 eller DNB
                    </Text>
                </ListItem>
                <ListItem>
                    <Text as="span" size="medium">
                        Velg forsikringen det gjelder
                    </Text>
                </ListItem>
                <ListItem>
                    <Text as="span" size="medium">
                        Fyll ut skademeldingen og last opp bilder
                    </Text>
                </ListItem>
                <ListItem>
                    <Text as="span" size="medium">
                        Skadebehandleren tar kontakt innen to virkedager
                    </Text>
                </ListItem>
            </OrderedList>
        </>
}`,...m.parameters?.docs?.source},description:{story:"Nummerert liste med `OrderedList` — nyttig når rekkefølgen betyr noe.",...m.parameters?.docs?.description}}};const K=["Default","SizeScale","BoldOgShort","Brødtekst","SomLabel","InlineElementer","MedListe","KunForSkjermleser","NummerertListe"];export{t as BoldOgShort,i as Brødtekst,s as Default,l as InlineElementer,o as KunForSkjermleser,d as MedListe,m as NummerertListe,n as SizeScale,a as SomLabel,K as __namedExportsOrder,H as default};
