import{D as i,a as o}from"./_index-0P-d86MF.js";import{f as e}from"./formatNumber-C5i6XT6A.js";import"./clsx-B-dksMZM.js";import"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";const s=[{title:"Supergavekort fra GoGift",value:`${e(100150)} kr`},{title:"Gavekort fra Power",value:`${e(1e3)} kr`},{title:"Penger på konto",value:`${e(12419)} kr`}],l={title:"Beta/Description List",component:o,subcomponents:{DescriptionListItem:i},parameters:{layout:"padded"},args:{direction:"horizontal",showSeparators:!1},argTypes:{direction:{options:["horizontal","vertical","justified"]}},tags:["autodocs","grouping content"]},t={name:"DescriptionList",args:{children:s.map(r=>React.createElement(o.Item,{key:r.title,...r}))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "DescriptionList",
  args: {
    children: listItems.map(item => <DescriptionList.Item key={item.title} {...item} />)
  }
}`,...t.parameters?.docs?.source}}};const d=["DescriptionListStory"];export{t as DescriptionListStory,d as __namedExportsOrder,l as default};
