import{r as a,j as p}from"./iframe-BSe-7mVg.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C9qkAPUp.js";import{H as s,m as n}from"./Help.stories-tAhwD6nX.js";import c from"./RadioButton.stories-CLBNEevb.js";import{F as d}from"./FieldGroup-DbI13Yv0.js";import{C as l}from"./Checkbox-BhrBzSSy.js";import{R as u}from"./RadioButton-DBA9xDOk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DjktW4eA.js";import"./Button-DQqjlQDs.js";import"./usePreviousValue-DdyQ4i3l.js";import"./Loader-CuzvoBfK.js";import"./useDelayedRender-ChNKGTkn.js";/* empty css               *//* empty css               */import"./Flex-BXTzrO8s.js";import"./SlotComponent-W021iQIQ.js";import"./mergeRefs-D5f28qwG.js";import"./BaseRadioButton.stories-BjA3DHyy.js";import"./BaseRadioButton-DOwMhAkp.js";import"./useId-Dw7Q6Bf_.js";/* empty css               */import"./Label-CSZl4bgz.js";import"./SupportLabel-CAJ8R4Lf.js";import"./WarningIcon-DCIpG-U-.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
