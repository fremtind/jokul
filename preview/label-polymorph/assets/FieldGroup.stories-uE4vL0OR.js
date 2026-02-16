import{j as m,r as a}from"./iframe-CIZpS4cP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C-xi2x_0.js";import i from"./RadioButton.stories-BP0Dfm09.js";import{P as s}from"./PopupTip-Cr48tJJ2.js";import c from"./Popuptip.stories-BEsMd3_G.js";import{F as d}from"./FieldGroup-CYstD6lF.js";import{R as l}from"./RadioButton-U8G-CsWa.js";import{C as u}from"./Checkbox-DP2X7XdT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-8lUw8Qnc.js";import"./Label-OUfaaAH6.js";import"./SupportLabel-CuTQ7M1n.js";import"./WarningIcon-BkVkZst-.js";import"./Icon-DJ3rpN4W.js";import"./BaseRadioButton.stories-xKPHJita.js";import"./BaseRadioButton-CYNeHbcv.js";import"./QuestionIcon-CX7e1RTk.js";import"./TooltipTrigger-BkJOTj7K.js";import"./floating-ui.react-DRrDhCG6.js";import"./index-ColzIabF.js";import"./index-DiQD4GlM.js";import"./TooltipContent-90rLgkIV.js";import"./useBrowserPreferences-CxqBYsjM.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
