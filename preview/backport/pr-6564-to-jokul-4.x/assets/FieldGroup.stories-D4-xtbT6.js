import{r as a,j as p}from"./iframe-DVeLhPMm.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-r7VcSga5.js";import{H as s,m as n}from"./Help.stories-CAB2DvVS.js";import c from"./RadioButton.stories-CCQt00Eq.js";import{F as d}from"./FieldGroup-DQoazbP7.js";import{C as l}from"./Checkbox-DCUrDZ6n.js";import{R as u}from"./RadioButton-BgxPAXI_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CeWoOFFl.js";import"./Button-CfEkJ5ZZ.js";import"./usePreviousValue-_NE5Rqjw.js";import"./Loader-C9biNr0G.js";import"./useDelayedRender-DkYvqzDy.js";/* empty css               *//* empty css               */import"./Flex-BfPNqOwO.js";import"./SlotComponent-DidI1QnT.js";import"./mergeRefs-BYTxeSjE.js";import"./BaseRadioButton.stories-gsnNg06a.js";import"./BaseRadioButton-DK3HgXot.js";import"./useId-Csqhmutl.js";/* empty css               */import"./Label-DNF1u5c7.js";import"./SupportLabel-C635FeZ-.js";import"./WarningIcon-D4PRVd7a.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
