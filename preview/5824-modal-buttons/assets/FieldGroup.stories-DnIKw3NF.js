import{j as m,r as a}from"./iframe-C6DTywqF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-5XE7oSTs.js";import i from"./RadioButton.stories-DTfDXc73.js";import{P as s}from"./PopupTip-MOKx-txR.js";import c from"./Popuptip.stories-df6dhZg8.js";import{F as d}from"./FieldGroup-ilHXTpHD.js";import{R as l}from"./RadioButton-DeOxf3W5.js";import{C as u}from"./Checkbox-CBc2jNT0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BfXdyA4N.js";import"./Label-C_-5UMTv.js";import"./SupportLabel-HYh5rth2.js";import"./WarningIcon-CjwG_voP.js";import"./Icon-DtMNsZn9.js";import"./BaseRadioButton.stories-h6i5_Vq9.js";import"./BaseRadioButton-eC0K7CqX.js";import"./QuestionIcon-DV-AG-Z5.js";import"./TooltipTrigger-DYqJWZZx.js";import"./floating-ui.react-fLs9JwFA.js";import"./index-Dmupfc4V.js";import"./index-Cp-T8hMa.js";import"./TooltipContent-B7a_l4Yz.js";import"./useBrowserPreferences-D79YsSgE.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
