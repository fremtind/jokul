import{j as m,r as a}from"./iframe-CQxc51jJ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CnV2Dakk.js";import i from"./RadioButton.stories-BJwMTB2o.js";import{P as s}from"./PopupTip-Cgr-XGmn.js";import c from"./Popuptip.stories-DOkM0D7a.js";import{F as d}from"./FieldGroup-Ch5eQfUt.js";import{R as l}from"./RadioButton-XWSQ3qmv.js";import{C as u}from"./Checkbox-56yMng_3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ljCz2mpr.js";import"./Label-CaD_wrdR.js";import"./SupportLabel-Cp1D5hPQ.js";import"./WarningIcon-BbRKRIuT.js";import"./Icon-D72rwEyv.js";import"./BaseRadioButton.stories--SFUJbfE.js";import"./BaseRadioButton-C-7n-fAm.js";import"./QuestionIcon--fXkNvZr.js";import"./TooltipTrigger-BH3n4XFk.js";import"./floating-ui.react-Hp4s0tOW.js";import"./index-B1KNnpu9.js";import"./index-BXtrknhU.js";import"./TooltipContent-B65uLBBn.js";import"./useBrowserPreferences-BExBslGo.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
