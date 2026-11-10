import{r as a,j as p}from"./iframe-BS9MDGvp.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-GcrMIP7g.js";import{H as s,m as n}from"./Help.stories-BeE3eT6Z.js";import c from"./RadioButton.stories-BTIQTgao.js";import{F as d}from"./FieldGroup-C2HjNYu6.js";import{C as l}from"./Checkbox-CRv8tQBF.js";import{R as u}from"./RadioButton-5fMCe-YZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DCgvoC6t.js";import"./Button-B7ajGMKR.js";import"./usePreviousValue-C4z_psTR.js";import"./Loader-CxzfRgb6.js";import"./useDelayedRender-CelUMpR8.js";/* empty css               *//* empty css               */import"./Flex-CvlXKJ-V.js";import"./SlotComponent--Kj1PE-X.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-udpZOItP.js";import"./BaseRadioButton-B7hm1urJ.js";import"./useId-Xp4GbaeS.js";/* empty css               */import"./Label-r3YdCx0K.js";import"./SupportLabel-r31Q4NbO.js";import"./WarningIcon-gMiUn2eP.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
