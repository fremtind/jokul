import{R as o}from"./index-siqcju79.js";import{D as n,a as s}from"./_index-CY8tygbx.js";import{f as i}from"./formatNumber-C5i6XT6A.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const a=[{title:"Supergavekort fra GoGift",value:`${i(100150)} kr`},{title:"Gavekort fra Power",value:`${i(1e3)} kr`},{title:"Penger på konto",value:`${i(12419)} kr`}],g={title:"Beta/Description List",component:s,subcomponents:{DescriptionListItem:n},parameters:{layout:"padded"},args:{alignment:"horizontal",showSeparators:!1},argTypes:{alignment:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},t={name:"Description List",args:{children:a.map(e=>o.createElement(s.Item,{key:e.title,...e}))}},r={name:"Description List med hjelpetekst",args:{children:a.map(e=>o.createElement(s.Item,{key:e.title,...e,supportText:"Hei, Heidi og Jonas, jeg er en veldig lang beskrivende tekst for feltene over."}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Description List",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Description List med hjelpetekst",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} supportText="Hei, Heidi og Jonas, jeg er en veldig lang beskrivende tekst for feltene over." />)
  }
}`,...r.parameters?.docs?.source}}};const u=["DescriptionListStory","DescriptionListWithDescription"];export{t as DescriptionListStory,r as DescriptionListWithDescription,u as __namedExportsOrder,g as default};
