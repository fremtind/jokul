import{j as m,r as a}from"./iframe-65_53G2O.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-8h17Xbc8.js";import i from"./RadioButton.stories-BA4w6E-Z.js";import{P as s}from"./PopupTip-DxrZWPdO.js";import c from"./Popuptip.stories-Bnrb0oGK.js";import{F as d}from"./FieldGroup-BwR_H70K.js";import{R as l}from"./RadioButton-CxrwcTpF.js";import{C as u}from"./Checkbox-DEZeQegX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dd4IzH3r.js";import"./Label-kY3ZdeLY.js";import"./SupportLabel-BraqNajC.js";import"./WarningIcon-CI4S85hX.js";import"./Icon-DB-f0CiP.js";import"./BaseRadioButton.stories-CHQuw6wt.js";import"./BaseRadioButton-DchNEqih.js";import"./QuestionIcon-5KF4PUvZ.js";import"./TooltipTrigger-atrNeWTh.js";import"./floating-ui.react-B1438zt-.js";import"./index-SVUOjuxJ.js";import"./index-E2gVFQrJ.js";import"./TooltipContent-xmtiaNC2.js";import"./useBrowserPreferences-Tpday_4j.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
