import{r as a,j as p}from"./iframe-CpnDfKf5.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BCtnpWRw.js";import{H as s,m as n}from"./Help.stories-DCUhEVuR.js";import c from"./RadioButton.stories-B5Ox-Am0.js";import{F as d}from"./FieldGroup-D5gutMHA.js";import{C as l}from"./Checkbox-DCo3909s.js";import{R as u}from"./RadioButton-5jPfU3Qt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-pSnY1kQ5.js";import"./Button-QAOz09ML.js";import"./usePreviousValue-CFiuVhFx.js";import"./Loader-C3HnjJUe.js";import"./useDelayedRender-80JTp1fA.js";/* empty css               *//* empty css               */import"./Flex-CpoGQpQ-.js";import"./SlotComponent-DqIjFJRs.js";import"./mergeRefs-DDfMpe6w.js";import"./BaseRadioButton.stories-_WYdAOlA.js";import"./BaseRadioButton-BVyMJ4tt.js";import"./useId-rcXuNSQY.js";/* empty css               */import"./Label-CrP2P-3X.js";import"./SupportLabel-C-cWnZ2h.js";import"./WarningIcon-HH6YDQVG.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
