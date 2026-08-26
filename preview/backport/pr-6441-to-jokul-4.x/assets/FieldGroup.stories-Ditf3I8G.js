import{r as a,j as p}from"./iframe-DIxlbkpa.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CxAFGgNu.js";import{H as s,m as n}from"./Help.stories-BMZWX-RJ.js";import c from"./RadioButton.stories-zAIa6RLD.js";import{F as d}from"./FieldGroup-DdUbN-E-.js";import{C as l}from"./Checkbox-rL7YJnJt.js";import{R as u}from"./RadioButton-pq_FwJwB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CbW2WWYH.js";import"./Button-CZ3-DPon.js";import"./usePreviousValue-3ZkzUUiD.js";import"./Loader-DGrnpdhE.js";import"./useDelayedRender-DSefeBk-.js";/* empty css               *//* empty css               */import"./Flex-wbEl8gDS.js";import"./SlotComponent-CAu4TU3B.js";import"./mergeRefs-D-NdygXu.js";import"./BaseRadioButton.stories-1akH_Tx_.js";import"./BaseRadioButton-rgmKMRlJ.js";import"./useId-qGAsEMGQ.js";/* empty css               */import"./Label-CXAYG0T4.js";import"./SupportLabel-DtI2cGpi.js";import"./WarningIcon-DgrwLUBY.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
