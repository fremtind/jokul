import{j as p,r as a}from"./iframe-B8jzZGvD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DOm4Dws-.js";import{H as s,m as n}from"./Help.stories-5xLkneli.js";import c from"./RadioButton.stories-DrAhPp7k.js";import{F as d}from"./FieldGroup-B1GZH3Wd.js";import{R as l}from"./RadioButton-BXh-F5Il.js";import{C as u}from"./Checkbox-DYaLq5ng.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-b414Y-ub.js";import"./Label-DTmfjqpj.js";import"./SupportLabel-YBOGGuwU.js";import"./WarningIcon-2vmdI1pl.js";import"./Icon-DVH6OPk4.js";import"./Button-wHNbMc_A.js";import"./usePreviousValue-BJ7f4Fd9.js";import"./Loader-mMFlVMma.js";import"./useDelayedRender-BWr2i5pj.js";/* empty css               *//* empty css               */import"./Flex-BY7mjYh6.js";import"./SlotComponent-DPuCLaTD.js";import"./mergeRefs-CM6Lr9Er.js";import"./BaseRadioButton.stories-cuPLSZ9h.js";import"./BaseRadioButton-DDqoFzrZ.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
