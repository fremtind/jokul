import{j as m,r as a}from"./iframe-DicxysLi.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D4ejjORU.js";import i from"./RadioButton.stories-DowgFoKV.js";import{P as s}from"./PopupTip-DGxSFc3m.js";import c from"./Popuptip.stories-6uFc1Ota.js";import{F as d}from"./FieldGroup-Cn8HrE2K.js";import{R as l}from"./RadioButton-OyySjS0R.js";import{C as u}from"./Checkbox-Cv-SQKcD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CvjfBmxc.js";import"./Label-Boi6ApQd.js";import"./SupportLabel-C9OcwY2C.js";import"./WarningIcon-BG_8itxf.js";import"./Icon-B_jRdtEs.js";import"./BaseRadioButton.stories-BNDQMdJ8.js";import"./BaseRadioButton-BReHBZbE.js";import"./QuestionIcon-ZIj03dBu.js";import"./TooltipTrigger-Bvwv56eF.js";import"./floating-ui.react-CVBKoIsL.js";import"./index-CTbi6ZSP.js";import"./index-Bz0sc5IH.js";import"./TooltipContent-BtGaotnh.js";import"./useBrowserPreferences-C6Q5FhPS.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
