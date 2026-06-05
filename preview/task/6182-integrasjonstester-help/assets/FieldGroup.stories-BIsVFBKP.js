import{r as a,j as p}from"./iframe-BKQk0dSG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-oW-NcyKK.js";import{H as s,m as n}from"./Help.stories-Cl__XvPr.js";import c from"./RadioButton.stories-C_fcHzXi.js";import{F as d}from"./FieldGroup-B4-1nvLQ.js";import{C as l}from"./Checkbox-Bs2R55YK.js";import{R as u}from"./RadioButton-BITDeIOJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D4SxAchc.js";import"./Button-5saJ-5mH.js";import"./usePreviousValue-vv64Tlgf.js";import"./Loader-CrZv4VXR.js";import"./useDelayedRender-Ef1oC-Xw.js";/* empty css               *//* empty css               */import"./Flex-B93hI-aG.js";import"./SlotComponent-uR5AySQc.js";import"./mergeRefs-DRmZOa7S.js";import"./BaseRadioButton.stories-Jj4SM5y6.js";import"./BaseRadioButton-BuctgNL_.js";import"./useId-DRlipUZz.js";/* empty css               */import"./Label-Cm08F7qj.js";import"./SupportLabel-Cslw0hW1.js";import"./WarningIcon-D3Ct0DQn.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
