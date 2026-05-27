import{r as a,j as p}from"./iframe-BtDFJkP8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BiZT6Gfl.js";import{H as s,m as n}from"./Help.stories-CjZc4xRv.js";import c from"./RadioButton.stories-BIAnfjTb.js";import{F as d}from"./FieldGroup-EE3iXY-x.js";import{C as l}from"./Checkbox-DMv6ZVm-.js";import{R as u}from"./RadioButton-BsJxHF72.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D5FzVccS.js";import"./Button-BweK6nvM.js";import"./usePreviousValue-fZql-vzA.js";import"./Loader-By3gJlvQ.js";import"./useDelayedRender-CkYkInvr.js";/* empty css               *//* empty css               */import"./Flex-D3WybB8L.js";import"./SlotComponent-jHTdA8tf.js";import"./mergeRefs-BJH5x43e.js";import"./BaseRadioButton.stories-WVJAk6Yn.js";import"./BaseRadioButton-D7BwqZRn.js";import"./useId-D1j841OR.js";/* empty css               */import"./Label-DdqonU-t.js";import"./SupportLabel-B3Q5-BiR.js";import"./WarningIcon-DmR8AMNG.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
