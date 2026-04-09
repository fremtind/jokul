import{j as p,r as a}from"./iframe-YwFWkMX3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-EyHTeR2T.js";import{H as s,m as n}from"./Help.stories-DZc4HPz_.js";import c from"./RadioButton.stories-CvKQWysa.js";import{F as d}from"./FieldGroup-C34c1LK9.js";import{R as l}from"./RadioButton-BKiBnB-c.js";import{C as u}from"./Checkbox-Wawc_ZSJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Sf6LkbTz.js";import"./Label-DzomghH3.js";import"./SupportLabel-D_fe_Jt7.js";import"./WarningIcon-BYUWnqW-.js";import"./Icon-BPN6pBI0.js";import"./Button-B76vybwH.js";import"./usePreviousValue-DhTI-Wq6.js";import"./Loader-DLzEEQy7.js";import"./useDelayedRender-DrOhsPVH.js";/* empty css               *//* empty css               */import"./Flex-DB6d0--r.js";import"./SlotComponent-DgB6qv9x.js";import"./mergeRefs-BqIZkrOg.js";import"./BaseRadioButton.stories-BhRgn3dp.js";import"./BaseRadioButton-Bee-Shu_.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
