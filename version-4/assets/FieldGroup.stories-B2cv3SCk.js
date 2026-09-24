import{r as a,j as p}from"./iframe-2K3Pj9vJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CtZ3aVzI.js";import{H as s,m as n}from"./Help.stories-DyuDTCX8.js";import c from"./RadioButton.stories-CPmTJUQe.js";import{F as d}from"./FieldGroup-k-qFUYQ7.js";import{C as l}from"./Checkbox-CZwgWk-i.js";import{R as u}from"./RadioButton-DuBdoQPw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ZWkOUCLr.js";import"./Button-aYNYaSTt.js";import"./usePreviousValue-DEbplmMz.js";import"./Loader-BkAPw25B.js";import"./useDelayedRender-DvUHjaTc.js";/* empty css               *//* empty css               */import"./Flex-CrcRgPGf.js";import"./SlotComponent-DC7njcRu.js";import"./mergeRefs-DvFyCluI.js";import"./BaseRadioButton.stories-DUn2_26u.js";import"./BaseRadioButton-DH_HNDQb.js";import"./useId-y5IsWS5l.js";/* empty css               */import"./Label-t0eAj_Pl.js";import"./SupportLabel-mFT1L5mc.js";import"./WarningIcon-Bgh8o-Ig.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
