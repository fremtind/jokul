import{j as p,r as a}from"./iframe-BSHXr__W.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-TzmPUKkE.js";import{H as s,m as n}from"./Help.stories-_Wl0ZDQf.js";import c from"./RadioButton.stories-BM8DcZ85.js";import{F as d}from"./FieldGroup-qMwQfT0L.js";import{R as l}from"./RadioButton-DFAdIJGH.js";import{C as u}from"./Checkbox-D_isNaE3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CYA0g5RK.js";import"./Label-CD1C2Vf4.js";import"./SupportLabel-CEX9mH4I.js";import"./WarningIcon-S5MdjChW.js";import"./Icon-vAn-hQxA.js";import"./Button-iHOp5KeO.js";import"./usePreviousValue-vyDGQpnM.js";import"./Loader-CzFHnr4p.js";import"./useDelayedRender-CkLYtCBl.js";/* empty css               *//* empty css               */import"./Flex-C-Na0q_b.js";import"./SlotComponent-Dpsov236.js";import"./mergeRefs-B1ESe2kE.js";import"./BaseRadioButton.stories-BEek44aM.js";import"./BaseRadioButton-DJ7Atsn7.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
