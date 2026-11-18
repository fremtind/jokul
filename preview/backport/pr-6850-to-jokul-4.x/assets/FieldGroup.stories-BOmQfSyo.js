import{r as a,j as p}from"./iframe-CwyxsR1E.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-aKdtyWfm.js";import{H as s,m as n}from"./Help.stories-Bv1t9R-4.js";import c from"./RadioButton.stories--gsPqRG3.js";import{F as d}from"./FieldGroup-BJ6J5NO1.js";import{C as l}from"./Checkbox-CpBEvdpo.js";import{R as u}from"./RadioButton-CbKaK1Zc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ClFq79UX.js";import"./Button-Bl-W8kB_.js";import"./usePreviousValue-BteCpHWj.js";import"./Loader-T1yEpUuH.js";import"./useDelayedRender-C9ZzNyu8.js";/* empty css               *//* empty css               */import"./Flex-2mQ0LUfL.js";import"./SlotComponent-4xJYjQql.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-wcbWH-w_.js";import"./BaseRadioButton-CG60h6EL.js";import"./useId-BWQSm14f.js";/* empty css               */import"./Label-DDgUtyVr.js";import"./SupportLabel-DeG2dukw.js";import"./WarningIcon-DI9sA-2y.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
