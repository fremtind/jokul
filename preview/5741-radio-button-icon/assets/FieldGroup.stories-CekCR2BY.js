import{j as m,r as a}from"./iframe-DfOpI9f1.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CvJWlz81.js";import i from"./RadioButton.stories-D6KhNKmq.js";import{P as s}from"./PopupTip-i93NTXmV.js";import c from"./Popuptip.stories-lipMiBuv.js";import{F as d}from"./FieldGroup-MFFCpwFC.js";import{R as l}from"./RadioButton-Bcq8bPqA.js";import{C as u}from"./Checkbox-BBpkLSxV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CP2RQFof.js";import"./Label-BzLd9IZ6.js";import"./SupportLabel-D3mo_dwk.js";import"./WarningIcon-BaDoUAli.js";import"./Icon-Yw7sC7lT.js";import"./BaseRadioButton.stories-De-p6jt1.js";import"./BaseRadioButton-Bxm_iymy.js";import"./QuestionIcon-CMLtG1ok.js";import"./TooltipTrigger-C7FSh8ag.js";import"./floating-ui.react-DZGIwC-r.js";import"./index-YUpdriT3.js";import"./index-IxAwN6dK.js";import"./TooltipContent-BeY35cdK.js";import"./useBrowserPreferences-D6Vi-qjS.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
