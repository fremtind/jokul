import{r as a,j as p}from"./iframe-B5c25FQx.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BsT0Y09w.js";import s from"./Help.stories-ngKES1td.js";import n from"./RadioButton.stories-CmTwkSxe.js";import{F as c}from"./FieldGroup-BC78zk1H.js";import{C as d}from"./Checkbox-JB9zAETF.js";import{H as l}from"./Help-iqruCL51.js";import{R as u}from"./RadioButton-DsJHoebp.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BvHImylu.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CUCrU-jG.js";import"./mergeRefs-D_DZASjL.js";import"./BaseRadioButton.stories-nMU2aWDz.js";import"./BaseRadioButton-DFqM3bgT.js";import"./useId-B0Fs7r1j.js";import"./Label-QRT466-5.js";import"./SupportLabel-BTU8ThyQ.js";import"./SuccessIcon-BPzD117u.js";import"./Icon-yNerfSrX.js";import"./WarningIcon-HmqvppYz.js";import"./Button-BrX6D2ek.js";import"./usePreviousValue-COZGAnFj.js";import"./Loader-DpMNr1IV.js";import"./useDelayedRender-B1ESJK1v.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
