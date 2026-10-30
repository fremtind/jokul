import{r as a,j as p}from"./iframe-C-D2XYyr.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DKv4gx5I.js";import{H as s,m as n}from"./Help.stories-N2k8Reey.js";import c from"./RadioButton.stories-Cqf3_Dt5.js";import{F as d}from"./FieldGroup-92EVi4zU.js";import{C as l}from"./Checkbox-lhaWicmJ.js";import{R as u}from"./RadioButton-DeC8PZ4W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ChTOw2HN.js";import"./Button-BqmhKhih.js";import"./usePreviousValue-CUXBkpKi.js";import"./Loader-nLLZ2Yum.js";import"./useDelayedRender-gCikXj41.js";/* empty css               *//* empty css               */import"./Flex-BmmmedFT.js";import"./SlotComponent-Ci5Amvk5.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-CgVQtoSO.js";import"./BaseRadioButton-86DYYUeF.js";import"./useId-CbHigER0.js";/* empty css               */import"./Label-CIDT3t7P.js";import"./SupportLabel-CwY9s3UV.js";import"./WarningIcon-ATw3k-5u.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
