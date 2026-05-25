import{r as a,j as p}from"./iframe-BnMgI3bZ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-jac2acp9.js";import{H as s,m as n}from"./Help.stories-a5MugBFi.js";import c from"./RadioButton.stories-DPLPKPMn.js";import{F as d}from"./FieldGroup-Bo-RJyEv.js";import{C as l}from"./Checkbox-BdTYMxEi.js";import{R as u}from"./RadioButton-COMa-xNA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CH-PJ6QA.js";import"./Button-Deh4F2yI.js";import"./usePreviousValue-qT_2Lt4v.js";import"./Loader-DY0kekFr.js";import"./useDelayedRender-DbHL3Q13.js";/* empty css               *//* empty css               */import"./Flex-Cym5RGHm.js";import"./SlotComponent-C2T0TZyx.js";import"./mergeRefs-DAYd5LUI.js";import"./BaseRadioButton.stories-CtMbkraP.js";import"./BaseRadioButton-BmR4dkOA.js";import"./useId-CsxuzaE4.js";/* empty css               */import"./Label-C5l8k6RY.js";import"./SupportLabel--SsBt7nh.js";import"./WarningIcon-BRthcNVq.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
