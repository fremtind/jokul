import{j as o}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{D as n,a as s}from"./_index-CoGdtGMU.js";import{f as r}from"./formatNumber-C5i6XT6A.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const a=[{title:"Supergavekort fra GoGift",value:`${r(100150)} kr`},{title:"Gavekort fra Power",value:`${r(1e3)} kr`},{title:"Penger på konto",value:`${r(12419)} kr`}],u={title:"Beta/Description List",component:s,subcomponents:{DescriptionListItem:n},parameters:{layout:"padded"},args:{alignment:"horizontal",showSeparators:!1},argTypes:{alignment:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},t={name:"Description List",args:{children:a.map(e=>o.jsx(s.Item,{...e},e.title))}},i={name:"Description List med hjelpetekst",args:{children:a.map(e=>o.jsx(s.Item,{...e,supportText:"Hei, Heidi og Jonas, jeg er en veldig lang beskrivende tekst for feltene over."},e.title))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Description List",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Description List med hjelpetekst",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} supportText="Hei, Heidi og Jonas, jeg er en veldig lang beskrivende tekst for feltene over." />)
  }
}`,...i.parameters?.docs?.source}}};const D=["DescriptionListStory","DescriptionListWithDescription"];export{t as DescriptionListStory,i as DescriptionListWithDescription,D as __namedExportsOrder,u as default};
