import{j as t}from"./iframe-C6DTywqF.js";import{S as l}from"./Select-PLQo7NCy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-TAdcGlW5.js";import"./useId-BfXdyA4N.js";import"./Label-C_-5UMTv.js";import"./SupportLabel-HYh5rth2.js";import"./WarningIcon-CjwG_voP.js";import"./Icon-DtMNsZn9.js";import"./ArrowDownIcon-BkNQLAWw.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],b={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const f=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,f as __namedExportsOrder,b as default};
