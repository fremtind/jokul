import{r as a,j as p}from"./iframe-CAz-VHJB.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BTHTE8wZ.js";import s from"./Help.stories-B8lqyV3E.js";import n from"./RadioButton.stories-BcC-XMt3.js";import{F as c}from"./FieldGroup-BMbFDgsW.js";import{C as d}from"./Checkbox-BBmgsGBP.js";import{H as l}from"./Help-isvppRZs.js";import{R as u}from"./RadioButton-Dszhq4kd.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Djri5uFh.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D2-3Z5ny.js";import"./mergeRefs-laofuooB.js";import"./BaseRadioButton.stories-CoPGf7FU.js";import"./BaseRadioButton-BieJmtg9.js";import"./useId-ny0kvgWc.js";/* empty css               */import"./Label-DZ6rAOeV.js";import"./SupportLabel-C9VrhFtr.js";import"./SuccessIcon-BJyQ8q3N.js";import"./Icon-COJNPfPC.js";import"./WarningIcon-CsASCqxg.js";import"./Button-CnhE6Dzt.js";import"./usePreviousValue-HwujPgPU.js";import"./Loader-B0D9m3Nc.js";import"./useDelayedRender-CXgvk5fv.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
