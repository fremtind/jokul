import{r as a,j as p}from"./iframe-M3ErUHr-.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-ClZ4dvnX.js";import s from"./Help.stories-dkcTJRLZ.js";import n from"./RadioButton.stories-DwT6pceV.js";import{F as c}from"./FieldGroup-CEme_5oP.js";import{C as d}from"./Checkbox-CFfd-9dT.js";import{H as l}from"./Help-iWRYoLFD.js";import{R as u}from"./RadioButton-B9OxTQVG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BW31eYli.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CBB8aK8f.js";import"./mergeRefs-BHLYdl4H.js";import"./BaseRadioButton.stories-B7E8Z4aQ.js";import"./BaseRadioButton-N1-iv0KG.js";import"./useId-PE-iYhKF.js";import"./Label-C4WU9jFZ.js";import"./SupportLabel-cJfq-ZCM.js";import"./SuccessIcon-BzWjpw59.js";import"./Icon-XH4TzFbj.js";import"./WarningIcon-D26WkRN6.js";import"./Button-CSpeUFMf.js";import"./usePreviousValue-BOicvFbh.js";import"./Loader-BeqKV8X7.js";import"./useDelayedRender-lI8kor5b.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
