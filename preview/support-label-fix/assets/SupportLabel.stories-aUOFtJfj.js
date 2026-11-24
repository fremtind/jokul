import{j as t}from"./iframe-hSS_WXnS.js";import{S as p}from"./SupportLabel-BbXZpbcO.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BeSkaq0s.js";import"./Icon-BuFaYyJU.js";import"./types-BlFGa32c.js";import"./WarningIcon-B1-7Dyux.js";import"./Text-1wwFMnrK.js";const S={title:"Komponenter/SupportLabel",component:p,argTypes:{label:{control:"text"}}},r={name:"SupportLabel",args:{labelType:"help"},render:e=>t.jsx(p,{...e,label:e.label?e.label:`Dette er en ${e.labelType} label`})},d=["SupportLabelStory"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "SupportLabel",
  args: {
    labelType: "help"
  },
  render: props => <SupportLabel {...props} label={props.label ? props.label : \`Dette er en \${props.labelType} label\`} />
}`,...r.parameters?.docs?.source}}};export{r as SupportLabelStory,d as __namedExportsOrder,S as default};
