import{r as a,j as p}from"./iframe-D4kMHvZ4.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bno05Gca.js";import{H as s,m as n}from"./Help.stories-C_-guMzz.js";import c from"./RadioButton.stories-CrUkyIKx.js";import{F as d}from"./FieldGroup-DpqcLmVc.js";import{C as l}from"./Checkbox-vyb2DElX.js";import{R as u}from"./RadioButton-DjDyjdbV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D2DXqggy.js";import"./Button-BXOUaFUk.js";import"./usePreviousValue-DL7QJpOA.js";import"./Loader-FDziiphg.js";import"./useDelayedRender-Cc9ew-wz.js";/* empty css               *//* empty css               */import"./Flex-DSgeDtVY.js";import"./SlotComponent-PzuDHP5q.js";import"./mergeRefs-j7ufRR4t.js";import"./BaseRadioButton.stories-BIpRm639.js";import"./BaseRadioButton-BqcWVDUa.js";import"./useId-CQLibd0O.js";import"./Label-oB6oJuYu.js";import"./SupportLabel-D8dYIxzc.js";import"./WarningIcon-BC2HEgYQ.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
