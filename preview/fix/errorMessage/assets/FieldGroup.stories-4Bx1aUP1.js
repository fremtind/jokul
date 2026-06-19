import{r as a,j as p}from"./iframe-RzsmKxaK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D4lgKJ42.js";import{H as s,m as n}from"./Help.stories-DME7zMsI.js";import c from"./RadioButton.stories-D4qaHbno.js";import{F as d}from"./FieldGroup-DLLHFJNU.js";import{C as l}from"./Checkbox-CSJpMIWo.js";import{R as u}from"./RadioButton-Cf2T8JFj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-lTyeqyYp.js";import"./Button-DMr84Q_Y.js";import"./usePreviousValue--Jg3HL8z.js";import"./Loader-Ce5OZIFe.js";import"./useDelayedRender-BmfXEWLB.js";/* empty css               *//* empty css               */import"./Flex-Dqdu94jR.js";import"./SlotComponent-Cl0CqWd_.js";import"./mergeRefs-Btbhxb1d.js";import"./BaseRadioButton.stories-Q7PQKdnr.js";import"./BaseRadioButton-Ch4hgHQv.js";import"./useId-CKPIPRKl.js";import"./Label-BXqH8_dd.js";import"./SupportLabel-C89OiLb8.js";import"./SuccessIcon-Bji2pq7y.js";import"./WarningIcon-PWtg4xLq.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
