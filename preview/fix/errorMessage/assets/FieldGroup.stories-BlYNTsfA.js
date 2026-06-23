import{r as a,j as p}from"./iframe-BqM4Rfy8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-L-5cmpbu.js";import s from"./Help.stories-rNvFDSf7.js";import n from"./RadioButton.stories-DmnsTQaE.js";import{F as c}from"./FieldGroup-CmcLAmz_.js";import{C as d}from"./Checkbox-CFjuQs7E.js";import{H as l}from"./Help-C74dI1kt.js";import{R as u}from"./RadioButton-Bdine7dp.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D6NR-hSI.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BFAj7Wv6.js";import"./mergeRefs-9sSA2oPg.js";import"./BaseRadioButton.stories-CUNsaX7m.js";import"./BaseRadioButton-BRyqD59C.js";import"./useId-DAU0Ocvp.js";import"./Label-DCOoAXgB.js";import"./SupportLabel-BzwdvJw2.js";import"./SuccessIcon-DYO6G_il.js";import"./Icon-B8FzFLRZ.js";import"./WarningIcon-vQGU5p4q.js";import"./Button-DOQHA_Dj.js";import"./usePreviousValue-4RS-AXWU.js";import"./Loader-kJ6wrcAV.js";import"./useDelayedRender-B6VuT1z-.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
