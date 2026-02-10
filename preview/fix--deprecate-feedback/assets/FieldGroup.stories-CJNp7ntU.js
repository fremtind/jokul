import{j as m,r as a}from"./iframe-jYV6c4ua.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-MmVR2Qie.js";import i from"./RadioButton.stories-BEv9Nj88.js";import{P as s}from"./PopupTip-BJStn75_.js";import c from"./Popuptip.stories-BIwJrarv.js";import{F as d}from"./FieldGroup-CyxJ939S.js";import{R as l}from"./RadioButton-o5GNj73T.js";import{C as u}from"./Checkbox-QRnlFsyw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-iR0enZca.js";import"./Label-DiTlwc4B.js";import"./SupportLabel-CarNkLz0.js";import"./WarningIcon-B0ms6aOd.js";import"./Icon-B8Nhe1uc.js";import"./BaseRadioButton.stories-C0EOvSqa.js";import"./BaseRadioButton-_HodoUMw.js";import"./QuestionIcon-C1bxxTiz.js";import"./TooltipTrigger-BsIsjfa3.js";import"./floating-ui.react-Bvv-Pj3Z.js";import"./index-nc0_O-J_.js";import"./index-B05yV8Wr.js";import"./TooltipContent-5aXVFWfz.js";import"./useBrowserPreferences-Bcq_DdB0.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
