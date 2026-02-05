import{j as m,r as a}from"./iframe-Bv39nkFP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DertLNqg.js";import i from"./RadioButton.stories-CFltoW98.js";import{P as s}from"./PopupTip-SQZnlMfc.js";import c from"./Popuptip.stories-DonTDQ9o.js";import{F as d}from"./FieldGroup-DCMX9Y-v.js";import{R as l}from"./RadioButton-Bj-_gjg1.js";import{C as u}from"./Checkbox-KDGLpvwp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B6ndXlWF.js";import"./Label-CAhqhc09.js";import"./SupportLabel-DqOSUboz.js";import"./WarningIcon-BdgEIBYS.js";import"./Icon-CPV6UyZy.js";import"./BaseRadioButton.stories-TDpy7Ywb.js";import"./BaseRadioButton-CoLLJ4uT.js";import"./QuestionIcon-DnvICtef.js";import"./TooltipTrigger-DWt0evJ_.js";import"./floating-ui.react-DYs7LzGC.js";import"./index-Ch3xrHWs.js";import"./index-BTSOUQEl.js";import"./TooltipContent-C4UJo6FO.js";import"./useBrowserPreferences-BlLg4B0T.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
