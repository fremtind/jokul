import{j as t}from"./iframe-BoySO9vG.js";import{S as l}from"./Select-Ckhzn8Xk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CO866E7p.js";import"./useId-D_DvuRgy.js";import"./types-IsTkoTmK.js";import"./Label-BVlwh3dl.js";import"./SupportLabel-BZUj3FHZ.js";import"./SuccessIcon-Dk2npwaL.js";import"./Icon-Dt181CIj.js";import"./WarningIcon-CUsEZ1Dk.js";import"./ArrowDownIcon-qYvKl6aS.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],k={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]},x=["SelectStory","InvalidStory"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};export{a as InvalidStory,e as SelectStory,x as __namedExportsOrder,k as default};
