import{r as a,j as p}from"./iframe-CPBESYMN.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BSydyd3M.js";import{H as s,m as n}from"./Help.stories-DdVRDP_L.js";import c from"./RadioButton.stories-_8DW2Qlb.js";import{F as d}from"./FieldGroup-BzuYcJI4.js";import{C as l}from"./Checkbox-DCpArvC6.js";import{R as u}from"./RadioButton-BhnroEZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CPKTMe_m.js";import"./Button-7yAA1tDM.js";import"./usePreviousValue-CMvWeAkN.js";import"./Loader-xsBQYdti.js";import"./useDelayedRender-C93Z9D8Y.js";/* empty css               *//* empty css               */import"./Flex-g_gPgLve.js";import"./SlotComponent-w-8KXLIS.js";import"./mergeRefs-CVoaXxLF.js";import"./BaseRadioButton.stories-BY0-GK0l.js";import"./BaseRadioButton-wuoCO1MI.js";import"./useId-CG3YQ_FP.js";/* empty css               */import"./Label-DrxA1auC.js";import"./SupportLabel-D0Cu0KOo.js";import"./WarningIcon-Cqd3saN3.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
