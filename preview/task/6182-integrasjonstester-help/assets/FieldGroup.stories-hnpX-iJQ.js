import{r as a,j as p}from"./iframe-BD4UsTMI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C1wyDqSD.js";import{H as s,m as n}from"./Help.stories-DHSajPGC.js";import c from"./RadioButton.stories-Bl_mHzkZ.js";import{F as d}from"./FieldGroup-COQ-_eP9.js";import{C as l}from"./Checkbox-UPBvj_ER.js";import{R as u}from"./RadioButton-Cp_cP4hp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DpD9K4_-.js";import"./Button-CPND1t8s.js";import"./usePreviousValue-BO3QUbg2.js";import"./Loader-DRrGq_dy.js";import"./useDelayedRender-CY2blNdL.js";/* empty css               *//* empty css               */import"./Flex-XtJkhSkc.js";import"./SlotComponent-ChEUl62A.js";import"./mergeRefs-Dzl4wmTh.js";import"./BaseRadioButton.stories-BMqWj8ER.js";import"./BaseRadioButton-Bce7wcSG.js";import"./useId-BY_o5SHQ.js";/* empty css               */import"./Label-BPecW7VG.js";import"./SupportLabel-B6FznD_F.js";import"./WarningIcon-B9nHApoL.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
