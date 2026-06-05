import{r as a,j as p}from"./iframe-wU7pmVjY.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CSl8jjBU.js";import{H as s,m as n}from"./Help.stories-Bfc04wdj.js";import c from"./RadioButton.stories-BMrYr4yU.js";import{F as d}from"./FieldGroup-lKzeX5Ne.js";import{C as l}from"./Checkbox-BLVpQU-F.js";import{R as u}from"./RadioButton-BWZ7me_j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B9Y3az_B.js";import"./Button-YNbwwK3e.js";import"./usePreviousValue-DjnO2G0Z.js";import"./Loader-CpmVrUnm.js";import"./useDelayedRender-BElkQiey.js";/* empty css               *//* empty css               */import"./Flex-Cx1f2kke.js";import"./SlotComponent-tbjyYtCI.js";import"./mergeRefs-y-zFckdj.js";import"./BaseRadioButton.stories-BqvVa8oM.js";import"./BaseRadioButton-NrT6HKif.js";import"./useId-DsHa3cgT.js";/* empty css               */import"./Label-C9zsM1hO.js";import"./SupportLabel-Dqywz4us.js";import"./WarningIcon-e80ynI-e.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
