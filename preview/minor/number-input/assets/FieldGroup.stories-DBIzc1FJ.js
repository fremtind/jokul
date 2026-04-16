import{j as p,r as a}from"./iframe-Ue0p-9-p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BHwfupVN.js";import{H as s,m as n}from"./Help.stories-CtutZ4XJ.js";import c from"./RadioButton.stories-DKl47zJ1.js";import{F as d}from"./FieldGroup-D0ECWkJV.js";import{R as l}from"./RadioButton-BPGD0V8t.js";import{C as u}from"./Checkbox-CWqInieH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DIwr4CP1.js";import"./Label-DOXph6SK.js";import"./SupportLabel-C6gstnNw.js";import"./WarningIcon-Ejz6v5Zg.js";import"./Icon-SH-8MKSJ.js";import"./Button-B4F-wFdo.js";import"./usePreviousValue-DxEpFqi8.js";import"./Loader-CCfaWWZ6.js";import"./useDelayedRender-ZCPyPv8m.js";/* empty css               *//* empty css               */import"./Flex-DcksrfzR.js";import"./SlotComponent-BVx1zZN0.js";import"./mergeRefs-Ddu_fSMc.js";import"./BaseRadioButton.stories-EFcdYeIf.js";import"./BaseRadioButton-PJw175L6.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
