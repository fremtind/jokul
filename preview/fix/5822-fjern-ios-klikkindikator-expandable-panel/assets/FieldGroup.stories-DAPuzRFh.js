import{r as a,j as p}from"./iframe-CzIpUYqH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C1CZ_FFJ.js";import{H as s,m as n}from"./Help.stories-DPZJiIm5.js";import c from"./RadioButton.stories-DLDyB2IH.js";import{F as d}from"./FieldGroup-BLMB1HcZ.js";import{C as l}from"./Checkbox-DQnnmiRi.js";import{R as u}from"./RadioButton-DjU2znf0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BRQqM65v.js";import"./Button-D1ApLcGu.js";import"./usePreviousValue-BS5DrCTh.js";import"./Loader-BYdIWM4k.js";import"./useDelayedRender-CAo-auPl.js";/* empty css               *//* empty css               */import"./Flex-CN67rdgM.js";import"./SlotComponent-KAZ13yI9.js";import"./mergeRefs-rFjeGD6O.js";import"./BaseRadioButton.stories-DI6ZNmgQ.js";import"./BaseRadioButton-C8rKVPZw.js";import"./useId-BzmdKw0h.js";/* empty css               */import"./Label-BukVAY-E.js";import"./SupportLabel-pijCdAm9.js";import"./WarningIcon-BJPMbG3P.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
