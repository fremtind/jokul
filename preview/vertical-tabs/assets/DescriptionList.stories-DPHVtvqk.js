import{j as s}from"./iframe-Ddrx5a8p.js";import{D as l,a as t}from"./_index-CNsakkPL.js";import{f as r}from"./formatNumber-Davy0grG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const m=[{title:"Supergavekort fra GoGift",value:`${r(100150)} kr`},{title:"Gavekort fra Power",value:`${r(1e3)} kr`},{title:"Penger på konto",value:`${r(12419)} kr`}],c=[{title:"Forsikring",value:"Innboforsikring"},{title:"Skadenummer",value:"350005600006"},{title:"Egenandel?",value:`${r(1500)} kr`}],u=[{title:"Pris per år",value:`${r(1025)} kr`},{title:"Kontor",value:"2,5 årsverk"},{title:"Ikke-kontor?",value:"3 årsverk"}],h={title:"Beta/Description List",component:t,subcomponents:{DescriptionListItem:l},parameters:{layout:"padded"},argTypes:{alignment:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},i={name:"Default",args:{children:c.map(e=>s.jsx(t.Item,{...e},e.title))}},a={name:"Skadesak",args:{children:c.map(e=>s.jsx(t.Item,{...e},e.title))}},o={name:"Produktkjøp",args:{children:u.map(e=>s.jsx(t.Item,{...e},e.title))}},n={name:"Oppgjør",args:{alignment:"justified",showSeparators:!0,children:m.map(e=>s.jsx(t.Item,{...e},e.title))}},p={name:"Description List med hjelpetekst",args:{alignment:"justified",showSeparators:!0,children:m.map(e=>s.jsx(t.Item,{...e,supportText:"Hjelpeteksten bør være kort"},e.title))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    children: claimsCase.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Skadesak",
  args: {
    children: claimsCase.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Produktkjøp",
  args: {
    children: productPurchase.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Oppgjør",
  args: {
    alignment: "justified",
    showSeparators: true,
    children: oppgjor.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Description List med hjelpetekst",
  args: {
    alignment: "justified",
    showSeparators: true,
    children: oppgjor.map(item => <DescriptionList.Item key={item.title} {...item} supportText="Hjelpeteksten bør være kort" />)
  }
}`,...p.parameters?.docs?.source}}};const L=["_DescriptionList","DescriptionListClaim","DescriptionListProduct","DescriptionListStory","DescriptionListWithDescription"];export{a as DescriptionListClaim,o as DescriptionListProduct,n as DescriptionListStory,p as DescriptionListWithDescription,i as _DescriptionList,L as __namedExportsOrder,h as default};
