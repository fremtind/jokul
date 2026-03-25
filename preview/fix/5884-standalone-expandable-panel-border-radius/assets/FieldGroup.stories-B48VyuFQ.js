import{j as p,r as a}from"./iframe-De4vF1LA.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D1giVg-Y.js";import{H as s,m as n}from"./Help.stories-B6cQByJy.js";import c from"./RadioButton.stories-bLxmCfrk.js";import{F as d}from"./FieldGroup-x5aV_ewe.js";import{R as l}from"./RadioButton-DO78CdPl.js";import{C as u}from"./Checkbox-DiBjJ59t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-9Q_cVvqt.js";import"./Label-hRS-j18J.js";import"./SupportLabel-qhfXD0pa.js";import"./WarningIcon-D64MJOlw.js";import"./Icon-C4bUq0xM.js";import"./Button-BEA8QogZ.js";import"./usePreviousValue-D5bBTTme.js";import"./Loader-uQ-oc8NM.js";import"./useDelayedRender-DufSPMQZ.js";/* empty css               *//* empty css               */import"./Flex-BppH0Bih.js";import"./SlotComponent-Cf8x_zQm.js";import"./mergeRefs-CTonvMlG.js";import"./BaseRadioButton.stories-y9Sc3TOy.js";import"./BaseRadioButton-4oce_ET1.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
