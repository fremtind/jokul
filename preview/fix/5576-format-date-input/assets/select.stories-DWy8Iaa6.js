import{j as t}from"./iframe-oHeCnMhI.js";import{S as l}from"./Select-D4niOlq3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-D30rSLAc.js";import"./useId-DQ0wHL7p.js";import"./Label-B8p4JncV.js";import"./SupportLabel-C_hkIReC.js";import"./WarningIcon-BLXcglJG.js";import"./Icon-DReADZtH.js";import"./ArrowDownIcon-Du63LP_h.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],b={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const f=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,f as __namedExportsOrder,b as default};
