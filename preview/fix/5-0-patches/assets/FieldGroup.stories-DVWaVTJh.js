import{r as a,j as p}from"./iframe-CeTmaLBO.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DjupKr2t.js";import{H as s,m as n}from"./Help.stories-DrkSfdl_.js";import c from"./RadioButton.stories-CY65BolB.js";import{F as d}from"./FieldGroup-DmX1oLUS.js";import{C as l}from"./Checkbox-CxIS4cQC.js";import{R as u}from"./RadioButton-DOUB5MGe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DmBn8ZtS.js";import"./Button-C3XeJQq3.js";import"./usePreviousValue-BusLhc73.js";import"./Loader-ZBvRjDSQ.js";import"./useDelayedRender-DMgmr44G.js";/* empty css               *//* empty css               */import"./Flex-ChtDQFM4.js";import"./SlotComponent-BmP5PBLq.js";import"./mergeRefs-C8DEV8z7.js";import"./BaseRadioButton.stories-BRSl_6do.js";import"./BaseRadioButton-BFcv6pa7.js";import"./useId-DlL9n_ES.js";/* empty css               */import"./Label-4KtTUhqQ.js";import"./SupportLabel-BKmsnwUE.js";import"./WarningIcon-DUUpXSlg.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
