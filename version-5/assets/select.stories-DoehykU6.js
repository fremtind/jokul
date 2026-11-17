import{j as t}from"./iframe-DP4uPROL.js";import{S as l}from"./Select-BdBbcMG8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B5bsiU6p.js";import"./useId-BKR7rdEV.js";import"./Label-CrjClzO8.js";import"./SupportLabel-Yuh3sYTS.js";import"./SuccessIcon-EzxEEpaW.js";import"./Icon-CSbOr9gQ.js";import"./WarningIcon-Bh0rJE6K.js";import"./ArrowDownIcon-B3ZttnLC.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]},k=["SelectStory","InvalidStory"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
