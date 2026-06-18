import{r as a,j as p}from"./iframe-DM8Oulg6.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CVCFTmXL.js";import{H as s,m as n}from"./Help.stories-BT9FzC03.js";import c from"./RadioButton.stories-aAgLWy0w.js";import{F as d}from"./FieldGroup-DsdQgz37.js";import{C as l}from"./Checkbox-C8hSa6nJ.js";import{R as u}from"./RadioButton-D1PIs-Bt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-3gKPKVOd.js";import"./Button-Cris8QvZ.js";import"./usePreviousValue-D7vysQZ4.js";import"./Loader-CiGeAcJ5.js";import"./useDelayedRender-Cl2jyM37.js";/* empty css               *//* empty css               */import"./Flex-BCRNkkRm.js";import"./SlotComponent-CacGIrHN.js";import"./mergeRefs-BWnAJ_gh.js";import"./BaseRadioButton.stories-DSI1xt9V.js";import"./BaseRadioButton-DxhhlDJX.js";import"./useId-Cfta17ZX.js";import"./Label-DtRhqL_d.js";import"./SupportLabel-q2BQYAvD.js";import"./SuccessIcon-BNnCNtTi.js";import"./WarningIcon-DX9Pi0Q0.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
