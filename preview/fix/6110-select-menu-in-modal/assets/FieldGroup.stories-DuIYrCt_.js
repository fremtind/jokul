import{r as a,j as p}from"./iframe-CwNqXSx7.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BMYZeb7w.js";import{H as s,m as n}from"./Help.stories-ycWNzCpU.js";import c from"./RadioButton.stories-BeDgR4fP.js";import{F as d}from"./FieldGroup-Dp-EY2Yj.js";import{C as l}from"./Checkbox-BBiWSPAs.js";import{R as u}from"./RadioButton-B3F0Rwcg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-MEZEYJeZ.js";import"./Button-CAbomPPp.js";import"./usePreviousValue-BzgOOzcy.js";import"./Loader-CfC3Kn5B.js";import"./useDelayedRender-C2xNp-Te.js";/* empty css               *//* empty css               */import"./Flex-mv_arVqk.js";import"./SlotComponent-CwePeITk.js";import"./mergeRefs-Ceyyi70j.js";import"./BaseRadioButton.stories-CZ-Bjd0Z.js";import"./BaseRadioButton-jmGVsoWs.js";import"./useId-C3u9oK6B.js";/* empty css               */import"./Label-BqOIfil6.js";import"./SupportLabel-DM0Oqe5i.js";import"./WarningIcon-4T9luJDb.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
