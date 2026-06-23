import{r as a,j as p}from"./iframe-eI5Yzu0I.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D7xsyqX1.js";import s from"./Help.stories-CT3_sf1-.js";import n from"./RadioButton.stories-BuF7L8a3.js";import{F as c}from"./FieldGroup-Y8ei4H4i.js";import{C as d}from"./Checkbox-B3BqV2Md.js";import{H as l}from"./Help-D0GZQYAQ.js";import{R as u}from"./RadioButton-Bbbm_A1l.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-HBfQ-0Gh.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DcbI6iiv.js";import"./mergeRefs-y3MJCZpb.js";import"./BaseRadioButton.stories-DCb3_VyF.js";import"./BaseRadioButton-CU0wnJNz.js";import"./useId-Dd6XYVyd.js";import"./Label-CcK93DWg.js";import"./SupportLabel-CfRO289f.js";import"./SuccessIcon-cQAzyIo2.js";import"./Icon-DZoB488I.js";import"./WarningIcon-dKOCNXbb.js";import"./Button-DDB_wkGw.js";import"./usePreviousValue-DfLHGb8i.js";import"./Loader-D40ZQz9I.js";import"./useDelayedRender-Da9yRaMO.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
