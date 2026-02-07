import{j as m,r as a}from"./iframe-BbA66hxY.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C7C3o-6c.js";import i from"./RadioButton.stories-DYRE5_VP.js";import{P as s}from"./PopupTip-DtRQScQ_.js";import c from"./Popuptip.stories-FNCKUDGO.js";import{F as d}from"./FieldGroup-DweYqpHS.js";import{R as l}from"./RadioButton-DfCXtnOt.js";import{C as u}from"./Checkbox-B7FX_374.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BHsnAaVl.js";import"./Label-BMkWsCkf.js";import"./SupportLabel-C5YmrpGL.js";import"./WarningIcon-9GvCJraG.js";import"./Icon-BpvHpecp.js";import"./BaseRadioButton.stories-C2ogYwot.js";import"./BaseRadioButton-NeMLQGGW.js";import"./QuestionIcon-KCxWVUrX.js";import"./TooltipTrigger-BS_GGHgV.js";import"./floating-ui.react-CHj2-bzZ.js";import"./index-C8VPE5p4.js";import"./index-C6u-X-Mz.js";import"./TooltipContent-k5OHMFZQ.js";import"./useBrowserPreferences-Cqopihhm.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
