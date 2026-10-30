import{r as a,j as p}from"./iframe-CbyASqyy.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CZVawu7_.js";import{H as s,m as n}from"./Help.stories-nXx7-3TS.js";import c from"./RadioButton.stories-CTRPC5EL.js";import{F as d}from"./FieldGroup-BB_6Wpae.js";import{C as l}from"./Checkbox-D9nyknR9.js";import{R as u}from"./RadioButton-BsA3LmJ7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CFsVsU1A.js";import"./Button-BXFQsl5Q.js";import"./usePreviousValue-D_IDUoe2.js";import"./Loader-DGvdeKTW.js";import"./useDelayedRender-DiYY6EL5.js";/* empty css               *//* empty css               */import"./Flex-CU-3s-gT.js";import"./SlotComponent-DIzbPtFg.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-B2Vuki2b.js";import"./BaseRadioButton-DDMC4dln.js";import"./useId-BoWE0lNL.js";/* empty css               */import"./Label-Blh_ZJCr.js";import"./SupportLabel-psOKyNml.js";import"./WarningIcon-XmtgVRMM.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
