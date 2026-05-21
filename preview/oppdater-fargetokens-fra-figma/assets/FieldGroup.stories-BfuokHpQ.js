import{r as a,j as p}from"./iframe-DsvwjQJN.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BmjB1cYI.js";import{H as s,m as n}from"./Help.stories-6ecKP0BW.js";import c from"./RadioButton.stories-CKtBc9Eq.js";import{F as d}from"./FieldGroup-CilmM_UO.js";import{C as l}from"./Checkbox-uOkzr_EN.js";import{R as u}from"./RadioButton-BUVDs4DE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-mzilcll6.js";import"./Button-Cpa_a6mX.js";import"./usePreviousValue-C-akFpY3.js";import"./Loader-CkJaHaUa.js";import"./useDelayedRender-DNlQ7eFe.js";/* empty css               *//* empty css               */import"./Flex-DdZNY6VW.js";import"./SlotComponent-dIc43FPr.js";import"./mergeRefs-CWExjCzz.js";import"./BaseRadioButton.stories-w3MVCe_j.js";import"./BaseRadioButton-CJmwq0h8.js";import"./useId-C7NiFP-2.js";import"./Label-CCOjRc2c.js";import"./SupportLabel-4jqiVbd5.js";import"./WarningIcon-Cu759P5v.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
