import{j as m,r as a}from"./iframe-DRZpUSIF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Dw_7uePn.js";import i from"./RadioButton.stories-DdrZ66Xv.js";import{P as s}from"./PopupTip-CJcSQWYl.js";import c from"./Popuptip.stories-D8zGfE7w.js";import{F as d}from"./FieldGroup-DxfraM4e.js";import{R as l}from"./RadioButton-C2Wt5HE6.js";import{C as u}from"./Checkbox-sHRsL7b-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BeBY11Pk.js";import"./Label-BtzT9AQL.js";import"./SupportLabel-CGF2sf2B.js";import"./WarningIcon-C5fXNYYi.js";import"./Icon-DnVQNuXa.js";import"./BaseRadioButton.stories-Bc9luQgb.js";import"./BaseRadioButton-CdDcABVF.js";import"./QuestionIcon-BJCTkdr0.js";import"./TooltipTrigger-B0XRFOBI.js";import"./floating-ui.react-Di4iAWje.js";import"./index-Bt5Rw9nZ.js";import"./index-A3cJLOE8.js";import"./TooltipContent-BJIrMxqe.js";import"./useBrowserPreferences-WdZeDYD1.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
