import{j as m,r as a}from"./iframe-CJC-gKdl.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-V0EZHpx4.js";import i from"./RadioButton.stories-DmLf9jeJ.js";import{P as s}from"./PopupTip-C_eCxhkq.js";import c from"./Popuptip.stories-Ddk8t1yn.js";import{F as d}from"./FieldGroup-DmOJu3V-.js";import{R as l}from"./RadioButton-CmlTpJst.js";import{C as u}from"./Checkbox-CGhCkC7A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-IgzJ_9Cy.js";import"./Label-aGT48Cas.js";import"./SupportLabel-WNVZPiAE.js";import"./WarningIcon-CyIPJFEC.js";import"./Icon-BZpM8QvX.js";import"./BaseRadioButton.stories-Bc0m68gI.js";import"./BaseRadioButton-DUcJDVUA.js";import"./QuestionIcon-CtDmH274.js";import"./TooltipTrigger-zUJ5nU-Q.js";import"./floating-ui.react-J4naseLC.js";import"./index-D65caPSj.js";import"./index--eJzuzuH.js";import"./TooltipContent-UZzJhEyH.js";import"./useBrowserPreferences-CJtNkP00.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
