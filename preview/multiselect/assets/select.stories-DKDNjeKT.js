import{j as l}from"./iframe-IeXOE1xG.js";import{S as t}from"./Select-BV981z98.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-BhABk7VZ.js";import"./InputGroup-Dht4EBu6.js";import"./useId-DY4OQRGl.js";import"./Label-RbnQIPKB.js";import"./SupportLabel-BjeGjqaX.js";import"./SuccessIcon-BsnM87L1.js";import"./Icon-Co9uLyg7.js";import"./WarningIcon-BP9ZIQ-G.js";import"./ArrowDownIcon-BjHz1E_W.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"},{value:"langt",label:"Et veldig langt valg for å sjekke field-sizing"}],x={title:"Beta/Select",component:t,parameters:{layout:"padded"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,multiple:!1,children:o.map(r=>l.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select",args:{size:1}},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select",
  args: {
    size: 1
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const y=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,y as __namedExportsOrder,x as default};
