import{r as a,j as p}from"./iframe-Dmbkpj_M.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CZzduKAl.js";import{H as s,m as n}from"./Help.stories-BDhvn4oU.js";import c from"./RadioButton.stories-Cs9x3fAu.js";import{F as d}from"./FieldGroup-7F4GRYSe.js";import{C as l}from"./Checkbox-6a5tkVtc.js";import{R as u}from"./RadioButton-B09BanpP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BgZz9F3d.js";import"./Button-jtsceS4X.js";import"./usePreviousValue-Cj2SeIqV.js";import"./Loader-CPA6s-Pv.js";import"./useDelayedRender-BTosFtpF.js";/* empty css               *//* empty css               */import"./Flex-Dg_FeFFg.js";import"./SlotComponent-WeX4GLDU.js";import"./mergeRefs-7aMpSopG.js";import"./BaseRadioButton.stories-qY3TXV8P.js";import"./BaseRadioButton-BKOdSK4y.js";import"./useId-d8rduGiy.js";/* empty css               */import"./Label-BTrsx9Wn.js";import"./SupportLabel-mT03J7eu.js";import"./WarningIcon-B7t4dkr6.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
