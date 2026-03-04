import{j as m,r as a}from"./iframe-DMQnJAMj.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CsRKQggn.js";import i from"./RadioButton.stories-CsgTTlrn.js";import{P as s}from"./PopupTip-B_ZLBh08.js";import c from"./Popuptip.stories-Bdm-Kg1H.js";import{F as d}from"./FieldGroup-GzgT-tGi.js";import{R as l}from"./RadioButton-Cp0UYXMR.js";import{C as u}from"./Checkbox-DHjhtV5j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C6r4rp48.js";import"./Label-COClpeiK.js";import"./SupportLabel-Cbo1PFyx.js";import"./WarningIcon-B2tsH83u.js";import"./Icon-t0wSZjQD.js";import"./BaseRadioButton.stories-BPJqnFbQ.js";import"./BaseRadioButton-DK-6_EFx.js";import"./QuestionIcon-CAjHcH0k.js";import"./TooltipTrigger-D1TVqupc.js";import"./floating-ui.react-DYEdxNk1.js";import"./index-BfC2IdeT.js";import"./index-DnXShlJV.js";import"./TooltipContent-CNu_xXyB.js";import"./useBrowserPreferences-CKtevgA_.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
