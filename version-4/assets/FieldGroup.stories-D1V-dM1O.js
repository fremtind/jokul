import{r as a,j as p}from"./iframe-CIbt4STo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dt5D5ycc.js";import{H as s,m as n}from"./Help.stories-D_AEpQXw.js";import c from"./RadioButton.stories-ChOzxbKS.js";import{F as d}from"./FieldGroup-C3NbvYBA.js";import{C as l}from"./Checkbox--PPWzz9d.js";import{R as u}from"./RadioButton-fy2i52vO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DgUlxszL.js";import"./Button-D7ee4yQn.js";import"./usePreviousValue-DOeODP_A.js";import"./Loader-wBA_4Psn.js";import"./useDelayedRender-CvZavbMa.js";/* empty css               *//* empty css               */import"./Flex-DW9I4UOY.js";import"./SlotComponent-CBnBer7d.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-DPnicfpa.js";import"./BaseRadioButton-CLEuxVn8.js";import"./useId-CVgXtrIn.js";/* empty css               */import"./Label-DtsLDVwn.js";import"./SupportLabel-CmbiPoKo.js";import"./WarningIcon-BE-rahKa.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
