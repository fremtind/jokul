import{j as t}from"./jsx-runtime-DqZpzl9T.js";import{c as m}from"./clsx-B-dksMZM.js";import"./index-siqcju79.js";import{f as i}from"./formatNumber-VUIDqav1.js";import{f as u}from"./formatKontonummer-BFsF3Y3e.js";import"./_commonjsHelpers-DaWZu8wl.js";const d=({className:e,terms:s,alwaysJustified:a=!1,...p})=>t.jsx("dl",{...p,className:m("jkl-description-list--beta",e),"data-always-justified":a,children:s.map(({title:n,value:c,description:o})=>t.jsxs("div",{className:"wrapper",children:[t.jsx("dt",{className:"title",children:n}),t.jsx("dd",{className:"value",children:c}),o&&t.jsx("dd",{className:"description",children:o})]},n))});d.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{terms:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string;
    value: string;
    description?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}}]}}],raw:`{
    title: string;
    value: string;
    description?: string;
}[]`},description:""},alwaysJustified:{required:!1,tsType:{name:"boolean"},description:`Alltid vis value til høyre
@default false`,defaultValue:{value:"false",computed:!1}}}};function l(e){const s=`${e.getDate()}`.padStart(2,"0"),a=`${e.getMonth()+1}`.padStart(2,"0");return`${s}.${a}.${e.getFullYear()}`}const j={title:"Beta/Description List",component:d,parameters:{layout:"padded"},args:{terms:[{title:"Supergavekort fra GoGift",value:`${i(100150)} kr`,description:`Gyldig til ${l(new Date)}`},{title:"Gavekort fra Power",value:`${i(1e3)} kr`,description:`Gyldig til ${l(new Date)}`},{title:"Penger på konto",value:`${i(12419)} kr`,description:`Utbetales til ${u("12345678901")}`}],alwaysJustified:!1},tags:["autodocs","grouping content"]},r={name:"DescriptionList"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "DescriptionList"
}`,...r.parameters?.docs?.source}}};const k=["DescriptionListStory"];export{r as DescriptionListStory,k as __namedExportsOrder,j as default};
