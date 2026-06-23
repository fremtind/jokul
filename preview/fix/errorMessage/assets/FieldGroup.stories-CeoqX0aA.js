import{r as a,j as p}from"./iframe-DuiO5f86.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DXUAbzCV.js";import s from"./Help.stories-GXKOpqR6.js";import n from"./RadioButton.stories-Y5MPLLku.js";import{F as c}from"./FieldGroup-BZ5pz3d2.js";import{C as d}from"./Checkbox-CBIEf0Hj.js";import{H as l}from"./Help-B7jM9xxt.js";import{R as u}from"./RadioButton-DlA25K0t.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-kflNk60w.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BNMPSeN5.js";import"./mergeRefs-DpG2RrAz.js";import"./BaseRadioButton.stories-Dp1uKcUP.js";import"./BaseRadioButton-DchoZY-M.js";import"./useId-DB7qe3B6.js";import"./Label-c1ph978m.js";import"./SupportLabel-BMkOPIYa.js";import"./SuccessIcon-jq9M4MQF.js";import"./Icon-Dq3Plndg.js";import"./WarningIcon-Cquk04X1.js";import"./Button-Ds0-tM3N.js";import"./usePreviousValue-CH6GWvHN.js";import"./Loader-D8Ge-pOs.js";import"./useDelayedRender-DUVNVia2.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
