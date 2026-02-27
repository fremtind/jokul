import{j as m,r as a}from"./iframe-AUQY5g5s.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Cmyp1tIH.js";import i from"./RadioButton.stories-B4j4tNgG.js";import{P as s}from"./PopupTip-Dcp3E3-P.js";import c from"./Popuptip.stories-D5ZIqGEG.js";import{F as d}from"./FieldGroup-C8AkCAD1.js";import{R as l}from"./RadioButton-B2PjdXpJ.js";import{C as u}from"./Checkbox-DC_Rdsc8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BB6yxEih.js";import"./Label-Dn-i0mza.js";import"./SupportLabel-DCAxcSxr.js";import"./WarningIcon-Dujrq7gf.js";import"./Icon-B1xm-cyd.js";import"./BaseRadioButton.stories-m5wWNyHT.js";import"./BaseRadioButton-Cj2xYreS.js";import"./QuestionIcon-788qLXhk.js";import"./TooltipTrigger-Bchb3QtH.js";import"./floating-ui.react-j__mMMB_.js";import"./index-NfCVMSiB.js";import"./index-DXKPINax.js";import"./TooltipContent-hnuf9tx0.js";import"./useBrowserPreferences-DA50Eey_.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
