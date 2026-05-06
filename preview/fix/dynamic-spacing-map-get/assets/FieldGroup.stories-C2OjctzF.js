import{j as p,r as a}from"./iframe-D7QRd4bE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D_2d75iz.js";import{H as s,m as n}from"./Help.stories-C4B7_mMk.js";import c from"./RadioButton.stories-DLYKiRTB.js";import{F as d}from"./FieldGroup-DjlNMl9l.js";import{R as l}from"./RadioButton-DSDku4H9.js";import{C as u}from"./Checkbox-DLbCLpSo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CzW51RDq.js";import"./Label-D46dKw_r.js";import"./SupportLabel-DI0vg-i2.js";import"./WarningIcon-D80SXYPi.js";import"./Icon-C5PuQHF4.js";import"./Button-aA1lwPac.js";import"./usePreviousValue-DBOOB67u.js";import"./Loader-Cr-CWJZy.js";import"./useDelayedRender-C8t3dINm.js";/* empty css               *//* empty css               */import"./Flex-JDaSSJam.js";import"./SlotComponent-DJWJUdrW.js";import"./mergeRefs-DmCz6NfU.js";import"./BaseRadioButton.stories-BDumG5Ah.js";import"./BaseRadioButton-nraG6eVr.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
