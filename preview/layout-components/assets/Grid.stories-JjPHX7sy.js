import{R as e}from"./index-siqcju79.js";import{B as x}from"./Button-Dng0c-UK.js";import{F as v}from"./Flex-CB0XPCq0.js";import{I as s}from"./Icon-mINJCSxV.js";import{c as C}from"./clsx-B-dksMZM.js";import{t as d}from"./tokens-CmXyXTIM.js";import{C as w}from"./Card-fliJQsdw.js";import{C as I}from"./CardImage-Bg7krjsW.js";/* empty css               *//* empty css               *//* empty css               */import{M as G}from"./Menu-gw2tFKwu.js";import{M as c}from"./MenuItem-DjdHl0XH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./SlotComponent-CWN6EcE2.js";import"./getThemeAndDensity-Cbjmkdw-.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./ChevronRightIcon-DUrPUeX8.js";import"./OpenInNewIcon-BZd1ooy-.js";const p=e.forwardRef(function(r,t){const{as:i="div",className:a,minElementWidth:f="20ch",gap:h=16,padding:u,style:y,...E}=r,j=i;return e.createElement(j,{"data-testid":"jkl-grid",className:C("jkl-grid",a),style:{...y,"--min-element-width":f,"--gap":d.spacing[h],"--padding":u?d.spacing[u]:0},...E,ref:t})});p.__docgenInfo={description:`Grid lar deg vise elementer i et rutenett, der hvert element
tar opp samme bredde. Du kan sette minimumsbredden et
element kan ha, og komponenten vil automatisk tilpasse
antall kolonner basert på bredden til rutenettet. Dette gjør
at du kan vise flere elementer side om side på større
skjermer, og færre elementer på mindre skjermer.`,methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},minElementWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den minste bredden hvert element
i grid-et kan ha før Grid vil fjerne en kolonne for å gjøre
mer plass. F.eks. vil et grid med \`minElementWidth\` på 250px,
som er 750px bredt (pluss plass til spacing og padding), vise
3 elementer per rad. Hvis bredden reduseres under dette vil
grid-et bytte til å vise 2 elementer per rad, osv.
@default 20ch`},gap:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
Standard er spacing.16, som tilsvarer 16px.
@default 16`},padding:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som padding rundt innholdsblokkene.
@default 0`}}};const M="/images/breadcrumb.png",S="/images/button.png",B="/images/card.png",N="/images/checkbox.png",W="/images/chip.png",_="/images/combobox.png",D="/images/datepicker.png",T="/images/descriptionList.png",V="/images/expander.png",g="/images/placeholder.svg",k=[{title:"Autosuggest",image:g},{title:"Breadcrumb",image:M},{title:"Button",image:S},{title:"Card",image:B},{title:"Checkbox",image:N},{title:"Chip",image:W},{title:"Combobox",image:_},{title:"CookieConsent",image:g},{title:"Countdown",image:g},{title:"Datepicker",image:D},{title:"DescriptionList",image:T},{title:"Expander",image:V}],L=({title:n,image:r})=>e.createElement(v,{direction:"column",gap:16},e.createElement(w,{padding:"l",style:{"--image-aspect-ratio":1.5}},e.createElement(I,{src:r,alt:n,placement:"full"})),e.createElement("p",{className:"jkl-heading-4"},n)),b=Object.fromEntries(k.map((n,r)=>[r+1,k.slice(0,r+1).map(t=>e.createElement(L,{key:t.title,...t}))])),me={title:"Layout/Primitives/Grid",component:p,tags:["autodocs"],argTypes:{padding:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(d.spacing),control:{type:"select"}},gap:{table:{defaultValue:{summary:"16"}},options:Object.keys(d.spacing),control:{type:"select"}},minElementWidth:{table:{defaultValue:{summary:"30ch"}},control:{type:"text"}},ref:{table:{disable:!0}},children:{name:"Antall elementer",description:"Antall elementer som skal vises i Grid (kun for demoene i Storybook).",options:Object.keys(b),mapping:b,control:{type:"select"}},as:{table:{disable:!0}}},args:{children:"6",minElementWidth:"20ch",gap:16}},o={parameters:{layout:"fullscreen"},render:n=>(console.log("Switcher props:",n),e.createElement("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"}},e.createElement("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom"},"Grid"),e.createElement("p",{className:"jkl-body jkl-spacing-40--bottom"},"Grid lar deg vise elementer i et rutenett, der hvert element tar opp samme bredde. Du kan sette minimumsbredden et element kan ha, og komponenten vil automatisk tilpasse antall kolonner basert på bredden til rutenettet. Dette gjør at du kan vise flere elementer side om side på større skjermer, og færre elementer på mindre skjermer."),e.createElement(p,{...n})))},l={parameters:{layout:"fullscreen"},argTypes:{minElementWidth:{table:{disable:!0}}},render:n=>{const r={small:"175px",medium:"250px",large:"350px"},t={small:"background_grid_small",medium:"grid_on",large:"border_all"},[i,a]=e.useState("medium");return e.createElement("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"}},e.createElement("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom"},"Grid med brukervalg"),e.createElement(v,{wrap:!0,justifyContent:"space-between",alignItems:"center",gap:16,className:"jkl-spacing-40--bottom"},e.createElement("p",{className:"jkl-body"},"Bruk minElementWidth for å la brukeren velge hvordan de helst vil se innholdet."),e.createElement(G,{initialPlacement:"bottom-end",triggerElement:e.createElement(x,{variant:"secondary","data-testid":"open-menu",icon:e.createElement(s,{bold:!0},t[i])},"Velg visning")},e.createElement(c,{onClick:()=>a("large"),icon:e.createElement(s,null,t.large)},"Stor"),e.createElement(c,{onClick:()=>a("medium"),icon:e.createElement(s,null,t.medium)},"Medium"),e.createElement(c,{onClick:()=>a("small"),icon:e.createElement(s,null,t.small)},"Liten"))),e.createElement(p,{...n,minElementWidth:r[i]}))}},m={parameters:{layout:"fullscreen"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                <Grid {...props} />
            </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  }
}`,...m.parameters?.docs?.source}}};const de=["Demo","Brukervalg","Komponent"];export{l as Brukervalg,o as Demo,m as Komponent,de as __namedExportsOrder,me as default};
