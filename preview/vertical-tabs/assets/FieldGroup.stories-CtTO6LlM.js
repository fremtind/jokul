import{j as m,r as a}from"./iframe-Z7U5_4Wx.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DN2hWbnA.js";import i from"./RadioButton.stories-bq5iu0Fb.js";import{P as s}from"./PopupTip-BDnsROaH.js";import c from"./Popuptip.stories-DMD3nbRj.js";import{F as d}from"./FieldGroup-BnW9gdvL.js";import{R as l}from"./RadioButton-D49KBCBz.js";import{C as u}from"./Checkbox-AspY24HT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DS_XmcWE.js";import"./Label-D8cVr8IA.js";import"./SupportLabel-Co1SijlC.js";import"./WarningIcon-Ce9lP_OC.js";import"./Icon-BR1N4Lbi.js";import"./BaseRadioButton.stories-yO31KtYH.js";import"./BaseRadioButton-JBnUkCPX.js";import"./QuestionIcon-CUNFvvgx.js";import"./TooltipTrigger-BUHSpTpa.js";import"./floating-ui.react-D-rIfi7e.js";import"./index-l-b4ZHtM.js";import"./index-DvY2A2aA.js";import"./TooltipContent-B61rFQOM.js";import"./useBrowserPreferences-C6mMvl2j.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
