import{j as p,r as a}from"./iframe-WI8ICRI9.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B-9FOS0p.js";import{H as s,m as n}from"./Help.stories-BysOnxop.js";import c from"./RadioButton.stories-CE299sn5.js";import{F as d}from"./FieldGroup-CVbndSW8.js";import{R as l}from"./RadioButton-DevpoGBe.js";import{C as u}from"./Checkbox-IAOw7XYq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BoDn2sSL.js";import"./Label-8WUUoZwK.js";import"./SupportLabel-B1mfFBVR.js";import"./WarningIcon-7DT6sQ-5.js";import"./Icon-BoZx6wkM.js";import"./Button-DCdhUKTw.js";import"./usePreviousValue-CEjDk7TL.js";import"./Loader-YvXjhlj6.js";import"./useDelayedRender-B2wZXfPL.js";/* empty css               *//* empty css               */import"./Flex-wFRX3HJ-.js";import"./SlotComponent-CgoP3vIS.js";import"./mergeRefs-C32vVqHs.js";import"./BaseRadioButton.stories-QsnvcfmG.js";import"./BaseRadioButton-CL-cXhis.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
