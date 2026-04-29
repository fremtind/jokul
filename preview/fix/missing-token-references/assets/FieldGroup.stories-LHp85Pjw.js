import{j as p,r as a}from"./iframe-C3ET5Jo1.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D0wW-OUT.js";import{H as s,m as n}from"./Help.stories-C52yKdo_.js";import c from"./RadioButton.stories-BFwULpW2.js";import{F as d}from"./FieldGroup-39ZG-T2V.js";import{R as l}from"./RadioButton-ClTllnCb.js";import{C as u}from"./Checkbox-D0j1EAfD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B_mm_1C3.js";import"./Label-DHLCIdmM.js";import"./SupportLabel-fWXNlv7g.js";import"./WarningIcon-P3wCpI7C.js";import"./Icon-C1mtlF7d.js";import"./Button-Kngpeze-.js";import"./usePreviousValue-CbnB0nGY.js";import"./Loader-BDT7t3kW.js";import"./useDelayedRender-D28iAt_a.js";/* empty css               *//* empty css               */import"./Flex-DvHcc4VU.js";import"./SlotComponent-CbAbm3qh.js";import"./mergeRefs-CGTRQUop.js";import"./BaseRadioButton.stories-CpLo5W3s.js";import"./BaseRadioButton-Bjn0rH87.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
