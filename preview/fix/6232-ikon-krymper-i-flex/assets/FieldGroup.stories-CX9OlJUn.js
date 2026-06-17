import{r as a,j as p}from"./iframe-BPJr1WNG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cq-3cVWz.js";import{H as s,m as n}from"./Help.stories-CNl0IW-w.js";import c from"./RadioButton.stories-CG-ZwsRE.js";import{F as d}from"./FieldGroup-053urIFG.js";import{C as l}from"./Checkbox-BAg07bg_.js";import{R as u}from"./RadioButton-NgiEL-_y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-OAPQxwcA.js";import"./Button-Do9ok-se.js";import"./usePreviousValue-B_A82HrS.js";import"./Loader-D7ryuOqv.js";import"./useDelayedRender-iyJoq60-.js";/* empty css               *//* empty css               */import"./Flex-3DNmicVD.js";import"./SlotComponent-B8SrhfU6.js";import"./mergeRefs-vWI8JFZv.js";import"./BaseRadioButton.stories-DUzDtZPB.js";import"./BaseRadioButton-CRLB-jFP.js";import"./useId-DRlhA7pK.js";/* empty css               */import"./Label-BvJFu5Dl.js";import"./SupportLabel-DPt0FuTm.js";import"./SuccessIcon-DKrvNtZ1.js";import"./WarningIcon-Bt1oxkVf.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
