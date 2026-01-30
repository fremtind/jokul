import{j as m,r as a}from"./iframe-DvHJceUm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Che6Md3G.js";import i from"./RadioButton.stories-Day1blL0.js";import{P as s}from"./PopupTip-DJ5wSjMy.js";import c from"./Popuptip.stories-CQ73JJTk.js";import{F as d}from"./FieldGroup-DPUfNz6A.js";import{R as l}from"./RadioButton-DRyOMEMO.js";import{C as u}from"./Checkbox-DXTUQsZN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CcMKzRJ1.js";import"./Label-BkBeRW7F.js";import"./SupportLabel-BYI-LRjT.js";import"./WarningIcon-D5eXDcBq.js";import"./Icon-CNufFYUx.js";import"./BaseRadioButton.stories-oVAidFAa.js";import"./BaseRadioButton-DERTWiW5.js";import"./QuestionIcon-BhOoiTXW.js";import"./TooltipTrigger-BfBGQpxs.js";import"./floating-ui.react-BZV4hll6.js";import"./index-DlvbsQv7.js";import"./index-BYoNU442.js";import"./TooltipContent-Cee01Du-.js";import"./useBrowserPreferences-wnv2dkeS.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
