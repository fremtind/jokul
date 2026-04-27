import{r as a,j as p}from"./iframe-DRzrw8Nv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BXe9gaLN.js";import{H as s,m as n}from"./Help.stories-Dd_NSg52.js";import c from"./RadioButton.stories-CPJCB77W.js";import{F as d}from"./FieldGroup-CFYqjU0T.js";import{C as l}from"./Checkbox-YxOjVGoD.js";import{R as u}from"./RadioButton-BDOskxW9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DEIppHfe.js";import"./Button-DBIo5kvm.js";import"./usePreviousValue-DrkxaRaE.js";import"./Loader-Df1RK2J-.js";import"./useDelayedRender-DP2_u7JG.js";/* empty css               *//* empty css               */import"./Flex-LOmdI584.js";import"./SlotComponent-2Chx50ER.js";import"./mergeRefs-C-5-UknL.js";import"./BaseRadioButton.stories-DevSP90o.js";import"./BaseRadioButton-tludcu-a.js";import"./useId-82JOxsiL.js";/* empty css               */import"./Label-CUKB44xD.js";import"./SupportLabel-BEFrcCpA.js";import"./WarningIcon-DXvquwGu.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
