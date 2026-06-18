import{r as a,j as p}from"./iframe-BJAzFGL5.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D5Fzh0Ff.js";import{H as s,m as n}from"./Help.stories-D0V0p6IE.js";import c from"./RadioButton.stories-D-uS0Hdl.js";import{F as d}from"./FieldGroup-CTUpPD-d.js";import{C as l}from"./Checkbox-BHjgw4D0.js";import{R as u}from"./RadioButton-xXiNSDWB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DFMdU-gh.js";import"./Button-RAW6iHsq.js";import"./usePreviousValue-DDihopMu.js";import"./Loader-DhbIebOB.js";import"./useDelayedRender-Ca_wuz9C.js";/* empty css               *//* empty css               */import"./Flex-BvfL7LEt.js";import"./SlotComponent-DbaM92L5.js";import"./mergeRefs-DDOEQB4c.js";import"./BaseRadioButton.stories-DIVBNZaa.js";import"./BaseRadioButton-Byc2aeQ2.js";import"./useId-DnZGCjo4.js";/* empty css               */import"./Label-D3RIyEwC.js";import"./SupportLabel-DTG1YbE7.js";import"./SuccessIcon-XkM_s2l1.js";import"./WarningIcon-fvV-VPLY.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
