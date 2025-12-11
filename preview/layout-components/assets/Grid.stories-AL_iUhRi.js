import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{R as I}from"./index-C6mWTJJr.js";import{B as P}from"./Button-V_7JZhcr.js";import{S as Y,F as v}from"./Flex-Bxl3x-bI.js";import{I as a}from"./Icon-CZwjvlw8.js";import{c as x}from"./clsx-B-dksMZM.js";import{t as m}from"./tokens-DyQL8Q6a.js";import{C as R}from"./Card-DcDzLGVS.js";/* empty css               *//* empty css               *//* empty css               */import{M as W}from"./Menu-BiLSdoNb.js";import{M as B}from"./MenuItem-O6UCCD1G.js";import"./_commonjsHelpers-BosuxZz1.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";import"./getThemeAndDensity-BFFxI1sw.js";import"./index-zunobDwC.js";import"./index-DcfIKM1A.js";import"./useId-Cim48cX5.js";import"./useBrowserPreferences-Cx8DRHte.js";import"./ChevronRightIcon-BRebPSul.js";import"./OpenInNewIcon-CtTg2px0.js";const c=I.forwardRef(function(t,A){const{as:i="div",className:r,minElementWidth:d="20ch",gap:p=20,padding:s,style:y,...H}=t,O=i;return e.jsx(O,{"data-testid":"jkl-grid",className:x("jkl-grid",r),style:{...y,"--min-element-width":d,"--gap":m.unit[p],"--padding":s?m.unit[s]:0},...H,ref:A})});c.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},minElementWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den minste bredden hvert element
i grid-et kan ha før Grid vil fjerne en kolonne for å gjøre
mer plass. F.eks. vil et grid med \`minElementWidth\` på 250px,
som er 750px bredt (pluss plass til spacing og padding), vise
3 elementer per rad. Hvis bredden reduseres under dette vil
grid-et bytte til å vise 2 elementer per rad, osv.
@default 20ch`},gap:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
Standard er unit.20, som tilsvarer 16px.
@default 20`},padding:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som padding rundt innholdsblokkene.
@default 0`}}};const G=I.forwardRef(function({as:t,asChild:A,className:i,placement:r="top",...d},p){const s=A?Y:t||"img";return e.jsx(s,{ref:p,className:x("jkl-card-image",`jkl-card-image--${r}`,i),...d})});G.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const N=""+new URL("breadcrumb-CM9SrZvD.png",import.meta.url).href,z=""+new URL("button-BJwKuOYy.png",import.meta.url).href,X=""+new URL("card-lzA51f9z.png",import.meta.url).href,F="data:image/png;base64,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MQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHABAj4AAAYgQcAECMgAMAiBFwAAAxAg4AIEbAAQDECDgAgBgBBwAQI+AAAGIEHABAjIADAIgRcAAAMQIOACBGwAEAxAg4AIAYAQcAECPgAABiBBwAQIyAAwCIEXAAADECDgAgRsABAMQIOACAGAEHAPCi5T8ZeAYqiEBi/gAAAABJRU5ErkJggg==",V=""+new URL("chip-C7g0TwR2.png",import.meta.url).href,T=""+new URL("combobox-f1Vvizvg.png",import.meta.url).href,L=""+new URL("datepicker-DXQL9fiw.png",import.meta.url).href,Z=""+new URL("description-list-CUpkhioo.png",import.meta.url).href,J=""+new URL("expander-AUB-c3Pf.png",import.meta.url).href,u="data:image/svg+xml,%3csvg%20width='1248'%20height='864'%20viewBox='0%200%201248%20864'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='312'%20height='216'%20transform='scale(4)'%20fill='white'/%3e%3crect%20x='434.121'%20y='432.333'%20width='125'%20height='125'%20transform='rotate(-45%20434.121%20432.333)'%20stroke='%231B1917'%20stroke-width='3'/%3e%3crect%20width='32'%20height='32'%20transform='translate(533.823%20330.51)%20scale(4)%20rotate(-45)'%20fill='%231B1917'/%3e%3crect%20width='32'%20height='32'%20transform='translate(533.823%20534.156)%20scale(4)%20rotate(-45)'%20fill='%231B1917'/%3e%3crect%20width='32'%20height='32'%20transform='translate(635.647%20432.333)%20scale(4)%20rotate(-45)'%20fill='%231B1917'/%3e%3c/svg%3e",E=[{title:"Autosuggest",image:u},{title:"Breadcrumb",image:N},{title:"Button",image:z},{title:"Card",image:X},{title:"Checkbox",image:F},{title:"Chip",image:V},{title:"Combobox",image:T},{title:"CookieConsent",image:u},{title:"Countdown",image:u},{title:"Datepicker",image:L},{title:"DescriptionList",image:Z},{title:"Expander",image:J}],S=({title:n,image:t})=>e.jsxs(v,{direction:"column",gap:16,children:[e.jsx(R,{padding:"l",style:{"--image-aspect-ratio":1.5},children:e.jsx(G,{src:t,alt:n,placement:"full"})}),e.jsx("p",{className:"jkl-heading-4",children:n})]}),C=Object.fromEntries(E.map((n,t)=>[t+1,E.slice(0,t+1).map(A=>e.jsx(S,{...A},A.title))])),Ce={title:"Layout/Primitives/Grid",component:c,tags:["autodocs"],argTypes:{padding:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(m.unit),control:{type:"select"}},gap:{table:{defaultValue:{summary:"20"}},options:Object.keys(m.unit),control:{type:"select"}},minElementWidth:{table:{defaultValue:{summary:"30ch"}},control:{type:"text"}},ref:{table:{disable:!0}},children:{name:"Antall elementer",description:"Antall elementer som skal vises i Grid (kun for demoene i Storybook).",options:Object.keys(C),mapping:C,control:{type:"select"}},as:{table:{disable:!0}}},args:{children:"6",minElementWidth:"20ch",gap:20}},o={parameters:{layout:"fullscreen"},render:n=>(console.log("Switcher props:",n),e.jsxs("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"},children:[e.jsx("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom",children:"Grid"}),e.jsx("p",{className:"jkl-body jkl-spacing-40--bottom",children:"Grid lar deg vise elementer i et rutenett, der hvert element tar opp samme bredde. Du kan sette minimumsbredden et element kan ha, og komponenten vil automatisk tilpasse antall kolonner basert på bredden til rutenettet. Dette gjør at du kan vise flere elementer side om side på større skjermer, og færre elementer på mindre skjermer."}),e.jsx(c,{style:{border:"2px dashed var(--jkl-color-border-subdued)"},...n})]}))},l={parameters:{layout:"fullscreen"},argTypes:{minElementWidth:{table:{disable:!0}}},render:n=>{const t={small:"175px",medium:"250px",large:"350px"},A={small:"background_grid_small",medium:"grid_on",large:"border_all"},[i,r]=I.useState("medium");return e.jsxs("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"},children:[e.jsx("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom",children:"Grid med brukervalg"}),e.jsxs(v,{wrap:!0,justifyContent:"space-between",alignItems:"center",gap:16,className:"jkl-spacing-40--bottom",children:[e.jsx("p",{className:"jkl-body",children:"Bruk minElementWidth for å la brukeren velge hvordan de helst vil se innholdet."}),e.jsxs(W,{initialPlacement:"bottom-end",triggerElement:e.jsx(P,{variant:"secondary","data-testid":"open-menu",icon:e.jsx(a,{bold:!0,children:A[i]}),children:"Velg visning"}),children:[e.jsx(B,{onClick:()=>r("large"),icon:e.jsx(a,{children:A.large}),children:"Stor"}),e.jsx(B,{onClick:()=>r("medium"),icon:e.jsx(a,{children:A.medium}),children:"Medium"}),e.jsx(B,{onClick:()=>r("small"),icon:e.jsx(a,{children:A.small}),children:"Liten"})]})]}),e.jsx(c,{...n,minElementWidth:t[i]})]})}},g={parameters:{layout:"fullscreen"}};var w,b,h;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: props => {
    console.log("Switcher props:", props);
    return <div style={{
      paddingInline: "var(--jkl-unit-90)",
      paddingBlock: "var(--jkl-unit-130)"
    }}>
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">Grid</h2>
                <p className="jkl-body jkl-spacing-40--bottom">
                    Grid lar deg vise elementer i et rutenett, der hvert element
                    tar opp samme bredde. Du kan sette minimumsbredden et
                    element kan ha, og komponenten vil automatisk tilpasse
                    antall kolonner basert på bredden til rutenettet. Dette gjør
                    at du kan vise flere elementer side om side på større
                    skjermer, og færre elementer på mindre skjermer.
                </p>
                <Grid style={{
        border: "2px dashed var(--jkl-color-border-subdued)"
      }} {...props} />
            </div>;
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,f,Q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
    minElementWidth: {
      table: {
        disable: true
      }
    }
  },
  render: props => {
    const views = {
      small: "175px",
      medium: "250px",
      large: "350px"
    };
    const icons = {
      small: "background_grid_small",
      medium: "grid_on",
      large: "border_all"
    };
    const [view, setView] = React.useState<keyof typeof views>("medium");
    return <div style={{
      paddingInline: "var(--jkl-unit-90)",
      paddingBlock: "var(--jkl-unit-130)"
    }}>
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">
                    Grid med brukervalg
                </h2>
                <Flex wrap justifyContent="space-between" alignItems="center" gap={16} className="jkl-spacing-40--bottom">
                    <p className="jkl-body">
                        Bruk minElementWidth for å la brukeren velge hvordan de
                        helst vil se innholdet.
                    </p>
                    <Menu initialPlacement="bottom-end" triggerElement={<Button variant="secondary" data-testid="open-menu"
        // iconPosition="right"
        icon={<Icon bold>{icons[view]}</Icon>}>
                                Velg visning
                            </Button>}>
                        <MenuItem onClick={() => setView("large")} icon={<Icon>{icons.large}</Icon>}>
                            Stor
                        </MenuItem>
                        <MenuItem onClick={() => setView("medium")} icon={<Icon>{icons.medium}</Icon>}>
                            Medium
                        </MenuItem>
                        <MenuItem onClick={() => setView("small")} icon={<Icon>{icons.small}</Icon>}>
                            Liten
                        </MenuItem>
                    </Menu>
                </Flex>
                <Grid {...props} minElementWidth={views[view]} />
            </div>;
  }
}`,...(Q=(f=l.parameters)==null?void 0:f.docs)==null?void 0:Q.source}}};var j,D,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  }
}`,...(M=(D=g.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const we=["Demo","Brukervalg","Komponent"];export{l as Brukervalg,o as Demo,g as Komponent,we as __namedExportsOrder,Ce as default};
