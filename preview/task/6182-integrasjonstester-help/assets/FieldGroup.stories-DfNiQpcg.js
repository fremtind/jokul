import{r as a,j as p}from"./iframe-BhsuZiiX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DumPZe-v.js";import{H as s,m as n}from"./Help.stories-DAt6F4AO.js";import c from"./RadioButton.stories-BYVGpl88.js";import{F as d}from"./FieldGroup-CX-eYmMs.js";import{C as l}from"./Checkbox-BCvR2M1U.js";import{R as u}from"./RadioButton-Bmtkiv-7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-YMGWEBIO.js";import"./Button-BASY09e3.js";import"./usePreviousValue-CLbXJvS7.js";import"./Loader-qoBQaMd7.js";import"./useDelayedRender-C48c6RP7.js";/* empty css               *//* empty css               */import"./Flex-Dic5hPzR.js";import"./SlotComponent-CRBCCyNv.js";import"./mergeRefs-cgoZdKyl.js";import"./BaseRadioButton.stories-DDVmLGja.js";import"./BaseRadioButton-DQdQnwhY.js";import"./useId-B-pQnrCU.js";/* empty css               */import"./Label-DCQTHxBF.js";import"./SupportLabel-CoEdSYzh.js";import"./WarningIcon-DQspyZAm.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
