import{j as s}from"./iframe-ZCfryuvU.js";import{D as d,a as r}from"./DescriptionList-AKFz_022.js";/* empty css               */import{f as t}from"./formatNumber-Davy0grG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const p=[{terms:"Supergavekort fra GoGift",details:`${t(100150)} kr`},{terms:"Gavekort fra Power",details:`${t(1e3)} kr`},{terms:"Penger på konto",details:`${t(12419)} kr`}],c=[{terms:"Forsikring",details:"Innboforsikring"},{terms:"Skadenummer",details:"350005600006"},{terms:"Egenandel?",details:`${t(1500)} kr`}],l=[{terms:"Pris per år",details:`${t(1025)} kr`},{terms:"Kontor",details:"2,5 årsverk"},{terms:"Ikke-kontor?",details:"3 årsverk"}],L={title:"Komponenter/Description List",component:r,subcomponents:{DescriptionListItem:d},parameters:{layout:"padded"},args:{alignment:"horizontal",showSeparators:!1},argTypes:{alignment:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},i={name:"Default",args:{children:c.map(e=>s.jsx(r.Item,{...e},e.terms))}},a={name:"Skadesak",args:{children:c.map(e=>s.jsx(r.Item,{...e},e.terms))}},o={name:"Produktkjøp",args:{children:l.map(e=>s.jsx(r.Item,{...e},e.terms))}},n={name:"Oppgjør",args:{alignment:"justified",showSeparators:!0,children:p.map(e=>s.jsx(r.Item,{...e},e.terms))}},m={name:"Description List med hjelpetekst",args:{alignment:"justified",showSeparators:!0,children:p.map(e=>s.jsx(r.Item,{...e,supportText:"Hjelpeteksten bør være kort"},e.terms))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    children: claimsCase.map(item => <DescriptionList.Item key={item.terms} {...item} />)
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Skadesak",
  args: {
    children: claimsCase.map(item => <DescriptionList.Item key={item.terms} {...item} />)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Produktkjøp",
  args: {
    children: productPurchase.map(item => <DescriptionList.Item key={item.terms} {...item} />)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Oppgjør",
  args: {
    alignment: "justified",
    showSeparators: true,
    children: oppgjor.map(item => <DescriptionList.Item key={item.terms} {...item} />)
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Description List med hjelpetekst",
  args: {
    alignment: "justified",
    showSeparators: true,
    children: oppgjor.map(item => <DescriptionList.Item key={item.terms} {...item} supportText="Hjelpeteksten bør være kort" />)
  }
}`,...m.parameters?.docs?.source}}};const f=["_DescriptionList","DescriptionListClaim","DescriptionListProduct","DescriptionListStory","DescriptionListWithDescription"];export{a as DescriptionListClaim,o as DescriptionListProduct,n as DescriptionListStory,m as DescriptionListWithDescription,i as _DescriptionList,f as __namedExportsOrder,L as default};
