import{j as m,r as a}from"./iframe-BJRY17Xz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DzEVP-Lv.js";import i from"./RadioButton.stories-Ba6tsWoS.js";import{P as s}from"./PopupTip-IeU2Sktr.js";import c from"./Popuptip.stories-Co-VvRFk.js";import{F as d}from"./FieldGroup-D2AXmiOS.js";import{R as l}from"./RadioButton-DVJ4Q1Uf.js";import{C as u}from"./Checkbox-ae3uwgg0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BC8bvml_.js";import"./Label-B9CivQ1K.js";import"./SupportLabel-CaG3sFnq.js";import"./WarningIcon-CKmcMyoV.js";import"./Icon-C7i3mUoD.js";import"./BaseRadioButton.stories-DaPSAkmY.js";import"./BaseRadioButton-aUk9oyJW.js";import"./QuestionIcon-B6vCL_vw.js";import"./TooltipTrigger-Cee6tCR1.js";import"./floating-ui.react-F_QZq-zG.js";import"./index-mz9fMd_0.js";import"./index-Ddj4HyRf.js";import"./TooltipContent-BQak-EwE.js";import"./useBrowserPreferences-CGbWjUwk.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
