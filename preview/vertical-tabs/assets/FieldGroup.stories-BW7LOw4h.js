import{j as m,r as a}from"./iframe-DIkB3JJA.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Dv4u2W6B.js";import i from"./RadioButton.stories-CGXY-pto.js";import{P as s}from"./PopupTip-DJZWUVHv.js";import c from"./Popuptip.stories-ImAU-ROo.js";import{F as d}from"./FieldGroup-YtGzJxdz.js";import{R as l}from"./RadioButton-CGv7Hka5.js";import{C as u}from"./Checkbox-CuI5bvxx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C15FLTWc.js";import"./Label-PdQs_-00.js";import"./SupportLabel-DR-MzHG-.js";import"./WarningIcon-Da8ap-C5.js";import"./Icon-Cagd3xoj.js";import"./BaseRadioButton.stories-Cre2UciH.js";import"./BaseRadioButton-BNXsMIz5.js";import"./QuestionIcon-BuB5x4e9.js";import"./TooltipTrigger-BEOW5XEB.js";import"./floating-ui.react-CJyHK4E4.js";import"./index-Cbqiagvs.js";import"./index-3YB21_9r.js";import"./TooltipContent-z_gKviJk.js";import"./useBrowserPreferences-6FszjlSk.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
