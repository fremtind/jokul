import{j as p,r as a}from"./iframe-BBQgYAvo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BM4lg8gu.js";import{H as s,m as n}from"./Help.stories-AuNlSr8-.js";import c from"./RadioButton.stories-C1VbD0yZ.js";import{F as d}from"./FieldGroup-CqnwrfZ3.js";import{R as l}from"./RadioButton-B-vqB9sZ.js";import{C as u}from"./Checkbox-DjzwLVOF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DdraX0AJ.js";import"./Label-Bz23YRCI.js";import"./SupportLabel-SnfJjSub.js";import"./WarningIcon-CaIwzTOi.js";import"./Icon-D90qtADZ.js";import"./Button-BhszwB0e.js";import"./usePreviousValue-Cn_Qhe0x.js";import"./Loader-CuhhZY0k.js";import"./useDelayedRender-DI07W2RA.js";/* empty css               *//* empty css               */import"./Flex-Dki3KAIL.js";import"./SlotComponent-DAM3zflF.js";import"./mergeRefs-DhdrAUZP.js";import"./BaseRadioButton.stories-DMrrceGl.js";import"./BaseRadioButton-BpYhzUzX.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
