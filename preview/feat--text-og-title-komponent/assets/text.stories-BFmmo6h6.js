import{r as b,j as e}from"./iframe-BXt9Ys4r.js";/* empty css               *//* empty css               *//* empty css               */import{c as z}from"./clsx-B-dksMZM.js";import{L as p}from"./Link-D8IPIA90.js";import{L as v,a as d,O as y,b as o}from"./ListItem-CGiNsNux.js";import"./preload-helper-PPVm8Dsz.js";const r=b.forwardRef(function({as:k,className:u,size:g,bold:x,short:h,srOnly:f,...T},j){const L=k||"p";return e.jsx(L,{className:z("jkl-text",f&&"jkl-sr-only",u),"data-text-size":g,"data-bold":x||void 0,"data-short":h||void 0,ref:j,...T})});r.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""}}};const R={title:"Komponenter/Text",component:r,argTypes:{size:{control:"radio",options:["small","medium","large"]},bold:{control:"boolean"},short:{control:"boolean"},srOnly:{control:"boolean"},as:{control:"select",options:["p","span","label","small","strong","em","code","kbd","samp","var"],description:"Som standard rendres Text som <p>. Støttede elementer er kun typografisk relevante inline-elementer og <p>.",table:{defaultValue:{summary:"p"}}}},tags:["autodocs","grouping content"]},l={args:{children:"Fremtind leverer forsikringene til kundene i SpareBank 1 og DNB."}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",children:"Fontstørrelse small"}),e.jsx(r,{size:"medium",children:"Fontstørrelse medium"}),e.jsx(r,{size:"large",children:"Fontstørrelse large"})]})},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"medium",children:"Standard brødtekst fra Fremtind."}),e.jsxs(r,{size:"medium",bold:!0,children:["Uthevet brødtekst med ",e.jsx("code",{children:"bold"}),"."]}),e.jsx(r,{size:"medium",short:!0,children:"Tett linjehøyde passer når det er begrenset plass, for eksempel i en tabellcelle eller et lite kort. Linjene ligger tettere enn standard brødtekst."})]})},c={args:{size:"medium",children:"Bilforsikringen fra Fremtind dekker skader på bilen din, enten du kolliderer, parkerer feil eller blir påkjørt. Du velger selv mellom delkasko og kasko, og egenandelen starter på 4 000 kr."}},s={render:()=>e.jsxs(r,{as:"p",size:"medium",children:["Husk at du må ",e.jsx(r,{as:"strong",children:"bekrefte endringen"})," før den trer i kraft. Trykk ",e.jsx(r,{as:"kbd",children:"Ctrl + S"})," for å lagre, og se"," ",e.jsx(p,{href:"/forsikringsbevis.pdf",children:e.jsx(r,{as:"code",children:"forsikringsbevis.pdf"})})," ","som blir lastet ned til maskinen din."]})},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",size:"medium",children:"Kaskoforsikringen hos Fremtind inkluderer:"}),e.jsxs(v,{children:[e.jsx(d,{children:e.jsx(r,{as:"span",size:"medium",children:"Ansvar overfor andre trafikanter"})}),e.jsx(d,{children:e.jsx(r,{as:"span",size:"medium",children:"Brann, tyveri og hærverk"})}),e.jsx(d,{children:e.jsx(r,{as:"span",size:"medium",children:"Glasskader uten egenandel"})}),e.jsx(d,{children:e.jsx(r,{as:"span",size:"medium",children:"Leiebil i inntil 20 dager"})})]})]})},i={render:()=>e.jsxs(r,{as:"p",size:"medium",children:["Last ned"," ",e.jsxs(p,{href:"/vilkaar.pdf",external:!0,children:["vilkårene",e.jsxs(r,{as:"span",srOnly:!0,children:[" ","(PDF, åpnes i ny fane)"]})]})," ","før du inngår avtalen med Fremtind."]})},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",size:"medium",children:"Slik melder du skade til Fremtind:"}),e.jsxs(y,{children:[e.jsx(o,{children:e.jsx(r,{as:"span",size:"medium",children:"Logg inn på Min side hos SpareBank 1 eller DNB"})}),e.jsx(o,{children:e.jsx(r,{as:"span",size:"medium",children:"Velg forsikringen det gjelder"})}),e.jsx(o,{children:e.jsx(r,{as:"span",size:"medium",children:"Fyll ut skademeldingen og last opp bilder"})}),e.jsx(o,{children:e.jsx(r,{as:"span",size:"medium",children:"Skadebehandleren tar kontakt innen to virkedager"})})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Fremtind leverer forsikringene til kundene i SpareBank 1 og DNB."
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text size="small">Fontstørrelse small</Text>
            <Text size="medium">Fontstørrelse medium</Text>
            <Text size="large">Fontstørrelse large</Text>
        </>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Text size="medium">Standard brødtekst fra Fremtind.</Text>
            <Text size="medium" bold>
                Uthevet brødtekst med <code>bold</code>.
            </Text>
            <Text size="medium" short>
                Tett linjehøyde passer når det er begrenset plass, for eksempel
                i en tabellcelle eller et lite kort. Linjene ligger tettere
                enn standard brødtekst.
            </Text>
        </>
}`,...n.parameters?.docs?.source},description:{story:"Bruk `bold` for å utheve tekst, og `short` for å komprimere linjehøyden\n(f.eks. i tett-pakkede lister eller kort-lignende oppsett).",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    children: "Bilforsikringen fra Fremtind dekker skader på bilen din, enten du kolliderer, parkerer feil eller blir påkjørt. Du velger selv mellom delkasko og kasko, og egenandelen starter på 4 000 kr."
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Text as="p" size="medium">
            Husk at du må <Text as="strong">bekrefte endringen</Text> før den
            trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
            se{" "}
            <Link href="/forsikringsbevis.pdf">
                <Text as="code">forsikringsbevis.pdf</Text>
            </Link>{" "}
            som blir lastet ned til maskinen din.
        </Text>
}`,...s.parameters?.docs?.source},description:{story:"Bruk `as` til å rendre Text som semantiske inline-elementer som\n`strong`, `em`, `kbd` og `code`.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:'Bruk `Text` sammen med liste-komponentene (`List`, `OrderedList`,\n`ListItem`, `CheckListItem`) fremfor å sende `as="ul"` til Text.',...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"`srOnly` skjuler teksten visuelt, men beholder den for skjermlesere.\nTypisk brukt for å legge til kontekst til lenker, knapper og ikoner som\nellers ville vært uklare for brukere av assistive teknologier.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Nummerert liste med `OrderedList` — nyttig når rekkefølgen betyr noe.",...a.parameters?.docs?.description}}};const K=["Default","SizeScale","BoldOgShort","Brødtekst","InlineElementer","MedListe","KunForSkjermleser","NummerertListe"];export{n as BoldOgShort,c as Brødtekst,l as Default,s as InlineElementer,i as KunForSkjermleser,t as MedListe,a as NummerertListe,m as SizeScale,K as __namedExportsOrder,R as default};
