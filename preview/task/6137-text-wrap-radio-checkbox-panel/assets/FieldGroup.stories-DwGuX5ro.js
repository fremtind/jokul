import{r as a,j as p}from"./iframe-BjpBskR_.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CtYXN5Wh.js";import{H as s,m as n}from"./Help.stories-BIj4f6ca.js";import c from"./RadioButton.stories-BLN7huAF.js";import{F as d}from"./FieldGroup-_FtosDuk.js";import{C as l}from"./Checkbox-DPt8QGkn.js";import{R as u}from"./RadioButton-BUXz0B4R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BowkLNc3.js";import"./Button-D8hyyblY.js";import"./usePreviousValue-fnOW1HAi.js";import"./Loader-DobReUNY.js";import"./useDelayedRender-ByjEmd5P.js";/* empty css               *//* empty css               */import"./Flex-D84VTpKT.js";import"./SlotComponent-BX8MEoh_.js";import"./mergeRefs-DpX4W3lr.js";import"./BaseRadioButton.stories-BIvzPs6m.js";import"./BaseRadioButton-B-JbsraG.js";import"./useId-ZqSSJgnH.js";/* empty css               */import"./Label-Bd6ACtNd.js";import"./SupportLabel-BwAEBWvy.js";import"./WarningIcon-Bz5y7_i7.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
