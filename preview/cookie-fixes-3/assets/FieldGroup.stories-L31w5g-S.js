import{j as m,r as a}from"./iframe-DRA65XaS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BQcsve2X.js";import i from"./RadioButton.stories-BIQL8TuB.js";import{P as s}from"./PopupTip-B91gCY9A.js";import c from"./Popuptip.stories-BknWneOm.js";import{F as d}from"./FieldGroup-BnDvIO0l.js";import{R as l}from"./RadioButton-Dy9GUjrR.js";import{C as u}from"./Checkbox-DTXx6JDM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BR-C5CEM.js";import"./Label-DzhGSsL3.js";import"./SupportLabel-BMJHAe2r.js";import"./WarningIcon-D7PcdRhZ.js";import"./Icon-DSodIIq8.js";import"./BaseRadioButton.stories-DZfPzDnn.js";import"./BaseRadioButton-CkpT0aXu.js";import"./QuestionIcon-XgyfCy7e.js";import"./TooltipTrigger-DUEdbABz.js";import"./floating-ui.react-BIBXwusX.js";import"./index-_w-LL4P_.js";import"./index-ekoIhJlR.js";import"./TooltipContent-BCvgmWD7.js";import"./useBrowserPreferences-CPNOsgZH.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
