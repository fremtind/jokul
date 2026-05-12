import{r as a,j as p}from"./iframe-CfT3TdyJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories--XKVKPei.js";import{H as s,m as n}from"./Help.stories-DzcZIJHj.js";import c from"./RadioButton.stories-MLBS08ws.js";import{F as d}from"./FieldGroup-Dyy8LSKj.js";import{C as l}from"./Checkbox-BmoDrn3x.js";import{R as u}from"./RadioButton-CpxiBu7S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B-H-qyg7.js";import"./Button-D4TOFNTY.js";import"./usePreviousValue-Diib6Kh7.js";import"./Loader-MZ6eA0yM.js";import"./useDelayedRender-Ds7kMKGz.js";/* empty css               *//* empty css               */import"./Flex-Bskiw9xk.js";import"./SlotComponent-8iM0y9kQ.js";import"./mergeRefs-BcQAlRX0.js";import"./BaseRadioButton.stories-CpTrO31l.js";import"./BaseRadioButton-nyZvdft0.js";import"./useId-DAjXPr8j.js";/* empty css               */import"./Label-BEhjEnZL.js";import"./SupportLabel-CpEfkbn-.js";import"./WarningIcon-aVi0yBpt.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
