import{j as p,r as a}from"./iframe-D8Fni3Ee.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BwDUoljF.js";import{H as s,m as n}from"./Help.stories-2nXOdb-p.js";import c from"./RadioButton.stories-Bf5njmGE.js";import{F as d}from"./FieldGroup-x_Adf3EP.js";import{R as l}from"./RadioButton-BZdKHPOP.js";import{C as u}from"./Checkbox-BPAAFItq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BINUQVK3.js";import"./Label-BLA9cqMd.js";import"./SupportLabel-Da0VD3H6.js";import"./WarningIcon-BRwWCumv.js";import"./Icon-4o4BJfM9.js";import"./Button-RxDnkccd.js";import"./usePreviousValue-e1OVwpT1.js";import"./Loader-CAsLYhGC.js";import"./useDelayedRender-Dob0sgXp.js";/* empty css               *//* empty css               */import"./Flex-D6KOjtA-.js";import"./SlotComponent-BCmRbNCD.js";import"./mergeRefs-BAU7qon2.js";import"./BaseRadioButton.stories-B3R5CzIe.js";import"./BaseRadioButton-CDKdOzuo.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
