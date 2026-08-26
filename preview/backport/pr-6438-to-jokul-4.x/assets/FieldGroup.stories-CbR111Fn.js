import{r as a,j as p}from"./iframe-EuIKmTdk.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-xeU-pqSm.js";import{H as s,m as n}from"./Help.stories-DYdsnUoO.js";import c from"./RadioButton.stories-CIrwYmTr.js";import{F as d}from"./FieldGroup-DC9EyGPx.js";import{C as l}from"./Checkbox-CnJVdLdT.js";import{R as u}from"./RadioButton-DTG6hXzn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dujxnt5e.js";import"./Button-DYaxotsO.js";import"./usePreviousValue-6ex1sIjd.js";import"./Loader-BTU53CUo.js";import"./useDelayedRender-C55KeudH.js";/* empty css               *//* empty css               */import"./Flex-IVqhxXpD.js";import"./SlotComponent-C4ajucND.js";import"./mergeRefs-Bd9_mUUB.js";import"./BaseRadioButton.stories-B6OBYdBA.js";import"./BaseRadioButton-Dw7vdFVV.js";import"./useId-DWzZZfup.js";/* empty css               */import"./Label-CSERNHR5.js";import"./SupportLabel-fh7JeN-N.js";import"./WarningIcon-C7vFxnR1.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
