import{j as p,r as a}from"./iframe-BtHekFca.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CUR5p9Vc.js";import{H as s,m as n}from"./Help.stories-BRHFayWa.js";import c from"./RadioButton.stories-DwWMsLMi.js";import{F as d}from"./FieldGroup-CD1h44wY.js";import{R as l}from"./RadioButton-DZoWpLRW.js";import{C as u}from"./Checkbox-M3b5c-mW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CCG5QCtF.js";import"./Label-CAeGz42l.js";import"./SupportLabel-AcoBfX7O.js";import"./WarningIcon-BjM6N1wF.js";import"./Icon-DBZGUxaU.js";import"./Button-D56IElQA.js";import"./usePreviousValue-BHRbQR18.js";import"./Loader-DV1UZaj8.js";import"./useDelayedRender-BQ3e9r1U.js";/* empty css               *//* empty css               */import"./Flex-Co1PjWsl.js";import"./SlotComponent-DYvdX1eG.js";import"./mergeRefs-D3SsUBM3.js";import"./BaseRadioButton.stories-D0tAdwzi.js";import"./BaseRadioButton-ChBgaWSt.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
