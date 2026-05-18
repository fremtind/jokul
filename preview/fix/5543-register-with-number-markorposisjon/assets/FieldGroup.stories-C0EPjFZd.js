import{r as a,j as p}from"./iframe-t13Gj8lI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BkVZzWwp.js";import{H as s,m as n}from"./Help.stories-tKM9sIc1.js";import c from"./RadioButton.stories-CZgy_XnD.js";import{F as d}from"./FieldGroup-BNC61jVo.js";import{C as l}from"./Checkbox-Qhw0u4qa.js";import{R as u}from"./RadioButton-ET8OAGMs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DacOlyhj.js";import"./Button-BG0yk30k.js";import"./usePreviousValue-DsP9lSTu.js";import"./Loader-C67YXw64.js";import"./useDelayedRender-D1WfjgLY.js";/* empty css               *//* empty css               */import"./Flex-BIzB-dv6.js";import"./SlotComponent-D1zVarfz.js";import"./mergeRefs-6LmnXzzx.js";import"./BaseRadioButton.stories-BGept-Tv.js";import"./BaseRadioButton-hZfFDQIr.js";import"./useId-Bs6RAW3E.js";/* empty css               */import"./Label-DS7RagEO.js";import"./SupportLabel-mcWQlAgY.js";import"./WarningIcon-BQcuMDuE.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
