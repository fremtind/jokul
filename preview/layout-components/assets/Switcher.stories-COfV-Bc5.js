import{R as n}from"./index-siqcju79.js";import{c as b}from"./clsx-B-dksMZM.js";import{t as o}from"./tokens-CmXyXTIM.js";import{F as S}from"./Flex-CB0XPCq0.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CWN6EcE2.js";const i=n.forwardRef(function(a,d){const{as:c="div",className:p,treshold:u="30rem",gap:v=16,padding:m,maxElements:k=3,justifyContent:g,style:h,...f}=a,y=c;return n.createElement(y,{"data-testid":"jkl-switcher",className:b("jkl-switcher",p),"data-max-elements":k,"data-justify-content":g,style:{...h,"--treshold":u,"--gap":o.spacing[v],"--padding":m?o.spacing[m]:0},...f,ref:d})});i.__docgenInfo={description:`Switcher er en komponent som lar deg vise elementer ved
siden av hverandre, frem til en gitt bredde hvor alle
elementene vil brekke til å vises i en kolonne.

Du kan også velge hvor mange elementer som maksimalt kan
vises ved siden av hverandre. Sendes det inn flere elementer
enn dette, vil alle elementene vises i en kolonne uavhengig
av bredde.`,methods:[],displayName:"Switcher",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},treshold:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den minste bredden Switcher
kan ha før innholdet brytes til vertikal layout.
Standard er 65ch, eller omtrent anbefalt linjelengde for
vanlige avsnitt.
@default 65ch`},gap:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
Standard er unit.20, som tilsvarer 16px.
@default 20`},padding:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som padding rundt innholdsblokkene.
@default 0`},maxElements:{required:!1,tsType:{name:"number"},description:`Maksimalt antall elementer som vil vises ved siden av hverandre.
Hvis det er fler elementer enn dette, vil alle elementene vises i en kolonne.
Du kan velge mellom 2, 3 eller 4 elementer.
@default 3`},justifyContent:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:`Lar elementene ta opp plassen de trenger, i stedet for å vokse til å
fylle sin del av bredden, og justerer innholdet til starten eller
slutten av beholderen. Hvis du lar denne står tom tar elementene opp
like store deler av beholderen.`}}};const r=({title:e,content:a})=>n.createElement(S,{direction:"column",gap:12},n.createElement("h3",{className:"jkl-heading-3"},e),n.createElement("p",{className:"jkl-body"},a)),t=[{title:"Guiding",content:"Breadcrumbs help wayfinding no matter how many layers."},{title:"Hierarchal",content:"Breadcrumbs show a user's current location within the hierarchy of a site."},{title:"Contextual",content:"Breadcrumbs help users understand what screen they're on relative to the information architecture."},{title:"Supportive",content:"Dividers separate groups of content when white space isn’t clear enough."},{title:"Subtle",content:"Dividers are just noticeable enough to be effective and not interruptive."},{title:"Seldom",content:"Dividers are used sparingly to group content, not separate multiple list items."}],j={1:t.slice(0,1).map(e=>n.createElement(r,{key:e.title,...e})),2:t.slice(0,2).map(e=>n.createElement(r,{key:e.title,...e})),3:t.slice(0,3).map(e=>n.createElement(r,{key:e.title,...e})),4:t.slice(0,4).map(e=>n.createElement(r,{key:e.title,...e})),5:t.slice(0,5).map(e=>n.createElement(r,{key:e.title,...e})),6:t.slice(0,6).map(e=>n.createElement(r,{key:e.title,...e}))},D={title:"Layout/Primitives/Switcher",component:i,tags:["autodocs"],argTypes:{padding:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(o.spacing),control:{type:"select"}},gap:{table:{defaultValue:{summary:"20"}},options:Object.keys(o.spacing),control:{type:"select"}},treshold:{table:{defaultValue:{summary:"30ch"}},control:{type:"text"}},maxElements:{table:{defaultValue:{summary:"3"}},options:[2,3,4],control:{type:"select"}},ref:{table:{disable:!0}},children:{name:"Antall elementer",description:"Antall elementer som skal vises i switcheren (kun for demoene i Storybook).",options:t.map((e,a)=>a+1),mapping:j,control:{type:"select"}},as:{table:{disable:!0}}},args:{children:3,treshold:"30rem",gap:16,maxElements:3}},l={parameters:{layout:"fullscreen"},decorators:[e=>n.createElement("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"}},n.createElement(e,null))],render:e=>(console.log("Switcher props:",e),n.createElement(n.Fragment,null,n.createElement("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom"},"Switcher"),n.createElement("p",{className:"jkl-body jkl-spacing-12--bottom"},"Switcher er en komponent som lar deg vise elementer ved siden av hverandre, frem til en gitt bredde hvor alle elementene vil brekke til å vises i en kolonne."),n.createElement("p",{className:"jkl-body jkl-spacing-40--bottom"},"Du kan også velge hvor mange elementer som maksimalt kan vises ved siden av hverandre. Sendes det inn flere elementer enn dette, vil alle elementene vises i en kolonne uavhengig av bredde."),n.createElement(i,{...e})))},s={parameters:{layout:"fullscreen"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    paddingInline: "var(--jkl-unit-90)",
    paddingBlock: "var(--jkl-unit-130)"
  }}>
                <Story />
            </div>],
  render: props => {
    console.log("Switcher props:", props);
    return <>
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">
                    Switcher
                </h2>
                <p className="jkl-body jkl-spacing-12--bottom">
                    Switcher er en komponent som lar deg vise elementer ved
                    siden av hverandre, frem til en gitt bredde hvor alle
                    elementene vil brekke til å vises i en kolonne.
                </p>
                <p className="jkl-body jkl-spacing-40--bottom">
                    Du kan også velge hvor mange elementer som maksimalt kan
                    vises ved siden av hverandre. Sendes det inn flere elementer
                    enn dette, vil alle elementene vises i en kolonne uavhengig
                    av bredde.
                </p>
                <Switcher {...props} />
            </>;
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  }
}`,...s.parameters?.docs?.source}}};const q=["Demo","Komponent"];export{l as Demo,s as Komponent,q as __namedExportsOrder,D as default};
