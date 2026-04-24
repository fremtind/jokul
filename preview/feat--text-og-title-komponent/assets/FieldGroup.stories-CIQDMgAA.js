import{j as p,r as a}from"./iframe-EQw03Dw2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D5ry18Ae.js";import{H as s,m as n}from"./Help.stories-B6wf2yIE.js";import c from"./RadioButton.stories-BksEJl83.js";import{F as d}from"./FieldGroup-ChfnpXf2.js";import{R as l}from"./RadioButton-D9B9WYz_.js";import{C as u}from"./Checkbox-B0isJH1d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DHuFdAzN.js";import"./Label-CILLlUmB.js";import"./SupportLabel-Dz0GJn2D.js";import"./WarningIcon-MCzrsDC6.js";import"./Icon-DCTNWmvI.js";import"./Button-Cwd4tqEn.js";import"./usePreviousValue-DStWriQB.js";import"./Loader-C9C8W1F3.js";import"./useDelayedRender-BnuI_KEW.js";/* empty css               *//* empty css               */import"./Flex-C4wFiAi7.js";import"./SlotComponent-B7bPIOlT.js";import"./mergeRefs-DNiU7hUL.js";import"./BaseRadioButton.stories-IafsDl0-.js";import"./BaseRadioButton-h_jeApZG.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
