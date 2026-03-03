import{j as m,r as a}from"./iframe-CH9XGqLt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-1ed7DEAh.js";import i from"./RadioButton.stories-BT1Em5aT.js";import{P as s}from"./PopupTip-WfUMqg7c.js";import c from"./Popuptip.stories-CUelVwr8.js";import{F as d}from"./FieldGroup-Btrq4W45.js";import{R as l}from"./RadioButton-2dUATE3X.js";import{C as u}from"./Checkbox-BJXLATXV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B4DNed72.js";import"./Label-BDEa5KhV.js";import"./SupportLabel-4ryjkqBd.js";import"./WarningIcon-C8udvh4c.js";import"./Icon-CE4Xg_O7.js";import"./BaseRadioButton.stories-CFhJUWNX.js";import"./BaseRadioButton-DSuKqyfk.js";import"./QuestionIcon-DuSzmO1t.js";import"./TooltipTrigger-hrn9Nmvf.js";import"./floating-ui.react-8rVHYFFO.js";import"./index-Bcp6PUyC.js";import"./index-DcywMsLs.js";import"./TooltipContent-CJVwV5L7.js";import"./useBrowserPreferences-Djrzv5RV.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
