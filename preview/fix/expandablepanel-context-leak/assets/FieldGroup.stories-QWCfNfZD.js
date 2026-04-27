import{r as a,j as p}from"./iframe-B0o1t7H3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BId-_n1b.js";import{H as s,m as n}from"./Help.stories-B99eLaZo.js";import c from"./RadioButton.stories-az9lSJME.js";import{F as d}from"./FieldGroup-_KI9lwbX.js";import{C as l}from"./Checkbox-CVetR9Ix.js";import{R as u}from"./RadioButton-DlvaKkx_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BIq7E2gu.js";import"./Button-1CRIwpPU.js";import"./usePreviousValue-tcFRHIrT.js";import"./Loader-BLmCIolz.js";import"./useDelayedRender-CeKWGkzE.js";/* empty css               *//* empty css               */import"./Flex-MlvEasrA.js";import"./SlotComponent-DNFOqb2v.js";import"./mergeRefs-CaYFyJfa.js";import"./BaseRadioButton.stories-LKMAkv5B.js";import"./BaseRadioButton-Doo7Fw-h.js";import"./useId-CE2MbQdI.js";/* empty css               */import"./Label-ihsFxgZ6.js";import"./SupportLabel-DENjuCpk.js";import"./WarningIcon-BxvlioEx.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
