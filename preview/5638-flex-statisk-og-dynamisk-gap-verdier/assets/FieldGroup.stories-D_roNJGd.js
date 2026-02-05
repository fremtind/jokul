import{j as m,r as a}from"./iframe-CWu2Kwvd.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DGTn_DPu.js";import i from"./RadioButton.stories-DA4SB_Ij.js";import{P as s}from"./PopupTip-Dr432Es1.js";import c from"./Popuptip.stories-BXCYonxA.js";import{F as d}from"./FieldGroup-BSixKFHk.js";import{R as l}from"./RadioButton-3oKaMQB3.js";import{C as u}from"./Checkbox-DKYuvGba.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C59OS_Ef.js";import"./Label-BrAxKTUp.js";import"./SupportLabel-CmC-mqwy.js";import"./WarningIcon-B0bhMbMY.js";import"./Icon-se0NPqC9.js";import"./BaseRadioButton.stories-93BvNTqS.js";import"./BaseRadioButton-BB-R9tbW.js";import"./QuestionIcon-CDqWmXIZ.js";import"./TooltipTrigger-DU81WOKX.js";import"./floating-ui.react-DS24puLE.js";import"./index-BZdB7qbI.js";import"./index-fyMGA9iw.js";import"./TooltipContent-Bi_yyIzw.js";import"./useBrowserPreferences-CtSpRu2F.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
