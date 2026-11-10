import{j as t}from"./iframe-BJ5WMK8C.js";import{S as p}from"./SupportLabel-BeG7wPmE.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Be1XBPhg.js";import"./Icon-FHNZc8Ax.js";import"./WarningIcon-68OCu3r9.js";const u={title:"Komponenter/SupportLabel",component:p,argTypes:{label:{control:"text"}}},r={name:"SupportLabel",args:{labelType:"help"},render:e=>t.jsx(p,{...e,label:e.label?e.label:`Dette er en ${e.labelType} label`})},c=["SupportLabelStory"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "SupportLabel",
  args: {
    labelType: "help"
  },
  render: props => <SupportLabel {...props} label={props.label ? props.label : \`Dette er en \${props.labelType} label\`} />
}`,...r.parameters?.docs?.source}}};export{r as SupportLabelStory,c as __namedExportsOrder,u as default};
