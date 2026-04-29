import{r as a,j as p}from"./iframe-D9tySd7L.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DbYM6aTx.js";import{H as s,m as n}from"./Help.stories-D0-kBnes.js";import c from"./RadioButton.stories-ZcUJv5K4.js";import{F as d}from"./FieldGroup-ClcwBbrH.js";import{C as l}from"./Checkbox-BRXvjdEp.js";import{R as u}from"./RadioButton-DDqWHbQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-TRc92wQV.js";import"./Button-D-A_Tenr.js";import"./usePreviousValue-VqC6fJNS.js";import"./Loader-Dlq0lKNI.js";import"./useDelayedRender-DKzgz14m.js";/* empty css               *//* empty css               */import"./Flex-BS1Rvs5N.js";import"./SlotComponent-CPlLxEXN.js";import"./mergeRefs-BYKlB5M7.js";import"./BaseRadioButton.stories-BL0NYnR_.js";import"./BaseRadioButton-DbMPo3Bv.js";import"./useId-D9qvh0gM.js";/* empty css               */import"./Label-DNRCXqc0.js";import"./SupportLabel-BVPC_jAG.js";import"./WarningIcon-7gEZ8fZ5.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
