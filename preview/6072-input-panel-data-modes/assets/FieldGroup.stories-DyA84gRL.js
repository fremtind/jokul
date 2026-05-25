import{r as a,j as p}from"./iframe-ZqDcM50I.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BF-igV3C.js";import{H as s,m as n}from"./Help.stories-C-I8_rD9.js";import c from"./RadioButton.stories-AXKSyoN2.js";import{F as d}from"./FieldGroup-C5_xaQPD.js";import{C as l}from"./Checkbox-XQX_272j.js";import{R as u}from"./RadioButton-CojNvuuR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-j4A0xREz.js";import"./Button-npspQ-Rc.js";import"./usePreviousValue-Bc6ZfeQU.js";import"./Loader-DVkR8hJ2.js";import"./useDelayedRender-wG1CR72J.js";/* empty css               *//* empty css               */import"./Flex-BJGXp5ow.js";import"./SlotComponent-ClhgNrJR.js";import"./mergeRefs-CVceJvk6.js";import"./BaseRadioButton.stories-DWitMmXE.js";import"./BaseRadioButton-_wIfQCo7.js";import"./useId-DMK5qxAk.js";/* empty css               */import"./Label-CW44ZgBD.js";import"./SupportLabel-_sT0PFta.js";import"./WarningIcon-CCSAXxde.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
