import{j as m,r as a}from"./iframe-D59NJKqy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DQlh00hp.js";import i from"./RadioButton.stories-C88qjGA0.js";import{P as s}from"./PopupTip-BJa5MzrM.js";import c from"./Popuptip.stories-CbYKo4P4.js";import{F as d}from"./FieldGroup-BImkV6su.js";import{R as l}from"./RadioButton-BEuygqFI.js";import{C as u}from"./Checkbox-CAoXGAL2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-686O8784.js";import"./Label-CAy7cakq.js";import"./SupportLabel-DWsMGi0f.js";import"./WarningIcon-Cwp7Fm-X.js";import"./Icon-Dqb6vLJj.js";import"./BaseRadioButton.stories-Ch--lKHo.js";import"./BaseRadioButton-BCxTRMxK.js";import"./QuestionIcon-DEbPFP1-.js";import"./TooltipTrigger-DefQX44F.js";import"./floating-ui.react-BYKf2cOj.js";import"./index-1KokshOd.js";import"./index-DNEQkL9K.js";import"./TooltipContent-D0GNZjn7.js";import"./useBrowserPreferences-kW4pwfWf.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
