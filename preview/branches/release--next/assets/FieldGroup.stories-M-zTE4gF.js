import{r as a,j as p}from"./iframe-7kErNFaF.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dshb1lsg.js";import{H as s,m as n}from"./Help.stories-CrGJS930.js";import c from"./RadioButton.stories-CCf_q32W.js";import{F as d}from"./FieldGroup-BbabjNrS.js";import{C as l}from"./Checkbox-3PV7i9G4.js";import{R as u}from"./RadioButton-Bh-V52Bb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D5hYEUlH.js";import"./Button-DbFeCH9q.js";import"./usePreviousValue-D-xgSnGt.js";import"./Loader-rNHDFx6M.js";import"./useDelayedRender-DWK0F3oF.js";/* empty css               *//* empty css               */import"./Flex-BTPFQv1p.js";import"./SlotComponent-CmZc0dLk.js";import"./mergeRefs-0HYduPML.js";import"./BaseRadioButton.stories-N_0JqLan.js";import"./BaseRadioButton-BVKfxa7q.js";import"./useId-otY_y8Ad.js";import"./Label-DOjJOOmj.js";import"./SupportLabel-CjRX1yDQ.js";import"./WarningIcon-D0Y3nXVX.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
