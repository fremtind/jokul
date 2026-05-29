import{r as a,j as p}from"./iframe-DVL5eRLT.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-gJFRCMyO.js";import{H as s,m as n}from"./Help.stories-BYwLq5u0.js";import c from"./RadioButton.stories-Kf0I5uG9.js";import{F as d}from"./FieldGroup-Uug5ovS7.js";import{C as l}from"./Checkbox-DOEHc3XZ.js";import{R as u}from"./RadioButton-Dh3kDa86.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BZKgjKWM.js";import"./Button-BAdfP7MC.js";import"./usePreviousValue-UBMv8yRw.js";import"./Loader-42QMcVge.js";import"./useDelayedRender-C5w9x7qc.js";/* empty css               *//* empty css               */import"./Flex-ZfKLQhyK.js";import"./SlotComponent-DTMPJeWk.js";import"./mergeRefs-CqDBM-DE.js";import"./BaseRadioButton.stories-9g1GtFef.js";import"./BaseRadioButton-BygYLa8d.js";import"./useId-Bs0VdYYY.js";/* empty css               */import"./Label-C-JCN_iE.js";import"./SupportLabel-BEfFXy8h.js";import"./WarningIcon-DZcaS9J4.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
