import{j as p,r as a}from"./iframe-BlL1f6tE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cx52C90f.js";import s from"./Help.stories-Cl_PhdAD.js";import n from"./RadioButton.stories-C5Dg_BJZ.js";import{F as c}from"./FieldGroup-BJOoEWrV.js";import{R as d}from"./RadioButton-BM7_CX0j.js";import{C as l}from"./Checkbox-vUuma4Cq.js";import{H as u}from"./Help-CFrcyaVC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-5Z1nxQwM.js";import"./Label-BqQWt1hc.js";import"./SupportLabel-C91qhPV0.js";import"./WarningIcon-B4o2UKJo.js";import"./Icon-DQG0WF9n.js";/* empty css               *//* empty css               */import"./Flex-BM1G5u9b.js";import"./SlotComponent-pbMLR2SD.js";import"./mergeRefs-DCdUDw6Z.js";import"./BaseRadioButton.stories-i-SpGWEo.js";import"./BaseRadioButton-y7VuSFrz.js";import"./Button-DdfZJ3bl.js";import"./usePreviousValue-VN0KBO0y.js";import"./Loader-CuKn4MPC.js";import"./useDelayedRender-Bu2qdOsk.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
