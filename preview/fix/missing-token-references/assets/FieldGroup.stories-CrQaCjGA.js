import{j as p,r as a}from"./iframe-BX8q34Qc.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BS7JNEJN.js";import{H as s,m as n}from"./Help.stories-CQ7kIQ7j.js";import c from"./RadioButton.stories-Dzevm7Z3.js";import{F as d}from"./FieldGroup-B6XNZ5wE.js";import{R as l}from"./RadioButton-CnOzJ5gF.js";import{C as u}from"./Checkbox-CKM7bL6j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CghsB_m4.js";import"./Label-DS2457GU.js";import"./SupportLabel-PV3esFij.js";import"./WarningIcon-BRMrnoIV.js";import"./Icon-DuQPsagy.js";import"./Button-CdkayZqT.js";import"./usePreviousValue-DJlNNqap.js";import"./Loader-jE8CP9jy.js";import"./useDelayedRender-CkAVN36z.js";/* empty css               *//* empty css               */import"./Flex-B_hN1w6a.js";import"./SlotComponent-D_AutEya.js";import"./mergeRefs-CI9FpKdv.js";import"./BaseRadioButton.stories-DUdnyYer.js";import"./BaseRadioButton-mZs-HKeT.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
