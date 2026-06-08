import{r as a,j as p}from"./iframe-ewFKzjcy.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-PxVibNtl.js";import{H as s,m as n}from"./Help.stories-D9ofeE10.js";import c from"./RadioButton.stories-2nMCYtN7.js";import{F as d}from"./FieldGroup-DgTKnlqD.js";import{C as l}from"./Checkbox-SCByinHo.js";import{R as u}from"./RadioButton-BOW4iFtk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D6hVY0Ep.js";import"./Button-DwUBvKdQ.js";import"./usePreviousValue-BnPTKgwR.js";import"./Loader-Bop09ec4.js";import"./useDelayedRender-Cg-hN513.js";/* empty css               *//* empty css               */import"./Flex-CWB8WDJh.js";import"./SlotComponent-DLCcOQS3.js";import"./mergeRefs-ChIfpRsz.js";import"./BaseRadioButton.stories-e-Rvvon7.js";import"./BaseRadioButton-DShDneS9.js";import"./useId-BBEKl7J0.js";/* empty css               */import"./Label-ddkJiWA1.js";import"./SupportLabel-B_HQ0fTG.js";import"./WarningIcon-CusvSyxq.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
