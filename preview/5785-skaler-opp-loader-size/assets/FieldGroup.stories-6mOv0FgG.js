import{j as m,r as a}from"./iframe-2TS5MlSI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CbHsuTLQ.js";import i from"./RadioButton.stories-DZL-gfWi.js";import{P as s}from"./PopupTip-B-OV964o.js";import c from"./Popuptip.stories-D9GhIWnF.js";import{F as d}from"./FieldGroup-QLA8j5kH.js";import{R as l}from"./RadioButton-DgM37rLG.js";import{C as u}from"./Checkbox-BCXYmXW-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BXEwY_v3.js";import"./Label-OScPrxH1.js";import"./SupportLabel-DR0ikMBG.js";import"./WarningIcon-ChJbFFP0.js";import"./Icon-DjLTz21q.js";import"./BaseRadioButton.stories-Bnj2VRnr.js";import"./BaseRadioButton-DgsNJ2qY.js";import"./QuestionIcon-CqETzcRO.js";import"./TooltipTrigger-BeFccKiz.js";import"./floating-ui.react-B1w4H27_.js";import"./index-BrM9k73K.js";import"./index-Dk6kct5I.js";import"./TooltipContent-Ih-5znkG.js";import"./useBrowserPreferences-DTNwiHx9.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <PopupTip {...PopuptipStories.args} content="Du kan bare velge en metode" />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,z as __namedExportsOrder,w as default};
