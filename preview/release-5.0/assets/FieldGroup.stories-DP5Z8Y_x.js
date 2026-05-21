import{r as a,j as p}from"./iframe-C-Pd17hD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DaMBs7jZ.js";import{H as s,m as n}from"./Help.stories-Dl2oIHYj.js";import c from"./RadioButton.stories-DD-Iv5DX.js";import{F as d}from"./FieldGroup-BIEjFOda.js";import{C as l}from"./Checkbox-CoRwznqn.js";import{R as u}from"./RadioButton-dWIhPXoR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D7qfqHrp.js";import"./Button-D9c1507i.js";import"./usePreviousValue-BKt0KuvK.js";import"./Loader-CCFRsuxf.js";import"./useDelayedRender-BMNkEsb7.js";/* empty css               *//* empty css               */import"./Flex-B-ChpHIW.js";import"./SlotComponent-BisDAvXX.js";import"./mergeRefs-CKDLcjOC.js";import"./BaseRadioButton.stories-C9_78KJL.js";import"./BaseRadioButton-Be59o0Um.js";import"./useId-C3HCW6bi.js";/* empty css               */import"./Label-DutD4Y27.js";import"./SupportLabel-DYbRRrIN.js";import"./WarningIcon-l-CmILD5.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
