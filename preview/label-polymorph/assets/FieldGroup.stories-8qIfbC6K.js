import{j as m,r as a}from"./iframe-C4VmJh-M.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DLpKlDFU.js";import i from"./RadioButton.stories-9x2lA3cR.js";import{P as s}from"./PopupTip-DnL_4UBF.js";import c from"./Popuptip.stories-Ds2HAJn1.js";import{F as d}from"./FieldGroup-AB7eahu5.js";import{R as l}from"./RadioButton-CEvTbEt9.js";import{C as u}from"./Checkbox-Cdgk-dwG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ppIOnC0U.js";import"./Label-D3lHObBt.js";import"./SupportLabel-Cu38Wsjh.js";import"./WarningIcon-DSMcIOAT.js";import"./Icon-B9hwpPzO.js";import"./BaseRadioButton.stories-CcJHSich.js";import"./BaseRadioButton-M43x9JP2.js";import"./QuestionIcon-KfAQ8wWl.js";import"./TooltipTrigger-DXX6lmpY.js";import"./floating-ui.react-Dn4EU8p7.js";import"./index-DRKm1ZBO.js";import"./index-CbD9R3jQ.js";import"./TooltipContent-CU4bZmZy.js";import"./useBrowserPreferences-IJ0s3tVj.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
