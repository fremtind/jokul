import{r as a,j as p}from"./iframe-9Qit5X3E.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-8EGk1ceJ.js";import{H as s,m as n}from"./Help.stories-z5ekfgau.js";import c from"./RadioButton.stories-BFYCA1If.js";import{F as d}from"./FieldGroup-DnheInXQ.js";import{C as l}from"./Checkbox-CjzyAHtk.js";import{R as u}from"./RadioButton-v9hCdVWR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-v2nntin-.js";import"./Button-DNiOsDli.js";import"./usePreviousValue-Vg4aL1tH.js";import"./Loader-DwnbEiUu.js";import"./useDelayedRender-C7f4Tf0m.js";/* empty css               *//* empty css               */import"./Flex-BdYdY4ca.js";import"./SlotComponent-DNu35E7p.js";import"./mergeRefs-CJfdhcO5.js";import"./BaseRadioButton.stories-DwFUhb5d.js";import"./BaseRadioButton-C2wmna6M.js";import"./useId-BD0R3fb-.js";/* empty css               */import"./Label-CRdZuUv6.js";import"./SupportLabel-BNak4By4.js";import"./WarningIcon-D7MwG40o.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
