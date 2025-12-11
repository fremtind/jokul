import{R as i}from"./index-siqcju79.js";import{D as s,a as o}from"./_index-0P-d86MF.js";import{f as e}from"./formatNumber-C5i6XT6A.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const a=[{title:"Supergavekort fra GoGift",value:`${e(100150)} kr`},{title:"Gavekort fra Power",value:`${e(1e3)} kr`},{title:"Penger på konto",value:`${e(12419)} kr`}],d={title:"Beta/Description List",component:o,subcomponents:{DescriptionListItem:s},parameters:{layout:"padded"},args:{direction:"horizontal",showSeparators:!1},argTypes:{direction:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},t={name:"DescriptionList",args:{children:a.map(r=>i.createElement(o.Item,{key:r.title,...r}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "DescriptionList",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...t.parameters?.docs?.source}}};const u=["DescriptionListStory"];export{t as DescriptionListStory,u as __namedExportsOrder,d as default};
