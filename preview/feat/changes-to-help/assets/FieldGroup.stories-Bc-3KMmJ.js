import{j as p,r as a}from"./iframe-B3OoojLb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DqBeTIfc.js";import s from"./Help.stories-DDMq0HGe.js";import n from"./RadioButton.stories-6hGFwpiH.js";import{F as c}from"./FieldGroup-CNIn7VX2.js";import{R as d}from"./RadioButton-Bj1KJlLT.js";import{C as l}from"./Checkbox-C4Ms_wNZ.js";import{H as u}from"./Help-Ck5DlH1m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B6yvdoOt.js";import"./Label-DGcjnIIr.js";import"./SupportLabel-BdsD6Ka3.js";import"./WarningIcon-BAs4DCDv.js";import"./Icon-elbMVew7.js";/* empty css               *//* empty css               */import"./Flex-C0nz0AJh.js";import"./SlotComponent-DEhaHAnK.js";import"./mergeRefs-n7efZdOB.js";import"./BaseRadioButton.stories-Dkmsx60l.js";import"./BaseRadioButton-DLQ2qxHf.js";import"./Button-ChRjWKeP.js";import"./usePreviousValue-CgeQ0Twq.js";import"./Loader-C4Gs6RjK.js";import"./useDelayedRender-D0p-gGcn.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
