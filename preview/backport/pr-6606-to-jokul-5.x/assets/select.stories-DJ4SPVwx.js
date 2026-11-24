import{j as t}from"./iframe-DP8Xf_qW.js";import{S as l}from"./Select-CUiLpRdp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-RhmGcLKT.js";import"./useId-DCOUoPrx.js";import"./types-IsTkoTmK.js";import"./Label-DF5EMnl-.js";import"./SupportLabel-BKFe5kWx.js";import"./SuccessIcon-CbZ15OhW.js";import"./Icon-k8xo1fZn.js";import"./WarningIcon-1AHRTzaM.js";import"./ArrowDownIcon-Dnm97vJR.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],k={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]},x=["SelectStory","InvalidStory"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};export{a as InvalidStory,e as SelectStory,x as __namedExportsOrder,k as default};
