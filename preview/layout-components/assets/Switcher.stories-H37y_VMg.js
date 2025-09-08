import{j as n}from"./jsx-runtime-D9p_MChh.js";import{R as N}from"./index-CRL2yuNo.js";import{c as D}from"./clsx-B-dksMZM.js";import{t as o}from"./tokens-NmszT_nq.js";import{F as E}from"./Flex-C2kqvdXP.js";import"./_commonjsHelpers-gnU0ypJ3.js";const i=N.forwardRef(function(s,g){const{as:k="div",className:f,treshold:b="30rem",gap:y=20,padding:d,maxElements:j=3,style:x,...S}=s,w=k;return n.jsx(w,{"data-testid":"jkl-switcher",className:D("jkl-switcher",f),"data-max-elements":j,style:{...x,"--treshold":b,"--gap":o.unit[y],"--padding":d?o.unit[d]:0},...S,ref:g})});i.__docgenInfo={description:`Switcher er en komponent som lar deg vise elementer ved
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
@default 3`}}};const r=({title:e,content:s})=>n.jsxs(E,{direction:"column",gap:12,children:[n.jsx("h3",{className:"jkl-heading-3",children:e}),n.jsx("p",{className:"jkl-body",children:s})]}),t=[{title:"Guiding",content:"Breadcrumbs help wayfinding no matter how many layers."},{title:"Hierarchal",content:"Breadcrumbs show a user's current location within the hierarchy of a site."},{title:"Contextual",content:"Breadcrumbs help users understand what screen they're on relative to the information architecture."},{title:"Supportive",content:"Dividers separate groups of content when white space isn’t clear enough."},{title:"Subtle",content:"Dividers are just noticeable enough to be effective and not interruptive."},{title:"Seldom",content:"Dividers are used sparingly to group content, not separate multiple list items."}],T={1:t.slice(0,1).map(e=>n.jsx(r,{...e},e.title)),2:t.slice(0,2).map(e=>n.jsx(r,{...e},e.title)),3:t.slice(0,3).map(e=>n.jsx(r,{...e},e.title)),4:t.slice(0,4).map(e=>n.jsx(r,{...e},e.title)),5:t.slice(0,5).map(e=>n.jsx(r,{...e},e.title)),6:t.slice(0,6).map(e=>n.jsx(r,{...e},e.title))},P={title:"Layout/Primitives/Switcher",component:i,tags:["autodocs"],argTypes:{padding:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(o.unit),control:{type:"select"}},gap:{table:{defaultValue:{summary:"20"}},options:Object.keys(o.unit),control:{type:"select"}},treshold:{table:{defaultValue:{summary:"30ch"}},control:{type:"text"}},maxElements:{table:{defaultValue:{summary:"3"}},options:[2,3,4],control:{type:"select"}},ref:{table:{disable:!0}},children:{name:"Antall elementer",description:"Antall elementer som skal vises i switcheren (kun for demoene i Storybook).",options:t.map((e,s)=>s+1),mapping:T,control:{type:"select"}},as:{table:{disable:!0}}},args:{children:3,treshold:"30rem",gap:20,maxElements:3}},a={parameters:{layout:"fullscreen"},decorators:[e=>n.jsx("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"},children:n.jsx(e,{})})],render:e=>(console.log("Switcher props:",e),n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"jkl-heading-3 jkl-spacing-24--bottom",children:"Switcher"}),n.jsx("p",{className:"jkl-body jkl-spacing-12--bottom",children:"Switcher er en komponent som lar deg vise elementer ved siden av hverandre, frem til en gitt bredde hvor alle elementene vil brekke til å vises i en kolonne."}),n.jsx("p",{className:"jkl-body jkl-spacing-40--bottom",children:"Du kan også velge hvor mange elementer som maksimalt kan vises ved siden av hverandre. Sendes det inn flere elementer enn dette, vil alle elementene vises i en kolonne uavhengig av bredde."}),n.jsx(i,{...e})]}))},l={parameters:{layout:"fullscreen"}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,v,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const V=["Demo","Komponent"];export{a as Demo,l as Komponent,V as __namedExportsOrder,P as default};
