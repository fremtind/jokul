import{j as p,r as a}from"./iframe-BSEGZWwn.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bm-5GEKj.js";import{H as s,m as n}from"./Help.stories-DG_jd_6t.js";import c from"./RadioButton.stories-CeNfjLb6.js";import{F as d}from"./FieldGroup-CR1Xde-q.js";import{R as l}from"./RadioButton-C9oi6ZRO.js";import{C as u}from"./Checkbox-y7puMBPS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DLpo5Fqe.js";import"./Label-dE9CKF_m.js";import"./SupportLabel-JCAvv4ua.js";import"./WarningIcon-CGf36qt2.js";import"./Icon-B3YUbkia.js";import"./Button-B98lm2bJ.js";import"./usePreviousValue-DAOgU-Mh.js";import"./Loader-C3EroDth.js";import"./useDelayedRender-BR6cwGDt.js";/* empty css               *//* empty css               */import"./Flex-CwI5CTQH.js";import"./SlotComponent-ClM51Aer.js";import"./mergeRefs-BhQ3tIYj.js";import"./BaseRadioButton.stories-SMt1WUa2.js";import"./BaseRadioButton-DFLhJ001.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
