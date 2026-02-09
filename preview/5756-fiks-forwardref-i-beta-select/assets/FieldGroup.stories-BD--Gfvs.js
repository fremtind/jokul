import{j as m,r as a}from"./iframe-CPJv95NL.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D8ryU-a-.js";import i from"./RadioButton.stories-B_dplrBj.js";import{P as s}from"./PopupTip-BwwoIPdB.js";import c from"./Popuptip.stories-Dkqx5dfJ.js";import{F as d}from"./FieldGroup-BfLOekaX.js";import{R as l}from"./RadioButton-DbpmIcYz.js";import{C as u}from"./Checkbox-Br5BksE7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BZOAZpip.js";import"./Label-tCAUL0fq.js";import"./SupportLabel-HKjJNF9A.js";import"./WarningIcon-DTHdR1W7.js";import"./Icon-B1B2FIEZ.js";import"./BaseRadioButton.stories-BSVI2lCT.js";import"./BaseRadioButton-B-co0tpV.js";import"./QuestionIcon-BxovKTSk.js";import"./TooltipTrigger-B2tAtB13.js";import"./floating-ui.react-oPEEXGlF.js";import"./index-CN-7KQY8.js";import"./index-THrag4FK.js";import"./TooltipContent-COBuZLt-.js";import"./useBrowserPreferences-BR5RNsmR.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
