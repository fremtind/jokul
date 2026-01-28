import{j as m,r as a}from"./iframe-CVHzTe_x.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DUNSz0bw.js";import i from"./RadioButton.stories-ECPMF7-j.js";import{P as s}from"./PopupTip-Bv1viIjM.js";import c from"./Popuptip.stories-DVt6nanO.js";import{F as d}from"./FieldGroup-D0EqTe-K.js";import{R as l}from"./RadioButton-Dg5DMmn_.js";import{C as u}from"./Checkbox-BTy7oG1D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DWQMXXcN.js";import"./Label-D9VuzQRu.js";import"./SupportLabel-CAyi8uOZ.js";import"./WarningIcon-Bw3uqpvt.js";import"./Icon-B1EN5nOE.js";import"./BaseRadioButton.stories-CWpOEih6.js";import"./BaseRadioButton-D7x1P7l1.js";import"./QuestionIcon-CfakAMQ5.js";import"./TooltipTrigger-CgQoi-aC.js";import"./floating-ui.react-M04tVQHc.js";import"./index-DDxINjsW.js";import"./index-BuGr75jT.js";import"./TooltipContent-DcsCyCw6.js";import"./useBrowserPreferences-Cek1J3UA.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
