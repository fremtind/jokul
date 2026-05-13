import{r as a,j as p}from"./iframe-DWNZijqs.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bxcz5a6W.js";import{H as s,m as n}from"./Help.stories-BIFjZ5fy.js";import c from"./RadioButton.stories-CSl5pC89.js";import{F as d}from"./FieldGroup-BG1Gkk6O.js";import{C as l}from"./Checkbox-D3hOXBf7.js";import{R as u}from"./RadioButton-CkVG9Xjf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CKQxEKS3.js";import"./Button-Cbq86Bsb.js";import"./usePreviousValue-CAHZDPzM.js";import"./Loader-CcVuc9HW.js";import"./useDelayedRender-CVmTjRwf.js";/* empty css               *//* empty css               */import"./Flex-CiNOytpW.js";import"./SlotComponent-BoQz2hRc.js";import"./mergeRefs-3GE_FsoW.js";import"./BaseRadioButton.stories-4lIuALMj.js";import"./BaseRadioButton-DoD0-Nd3.js";import"./useId-0mkGQWC4.js";/* empty css               */import"./Label-CMSc2ZoS.js";import"./SupportLabel-ChTXFwL1.js";import"./WarningIcon-CDcyEm9z.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
