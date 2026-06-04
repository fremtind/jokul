import{r as a,j as p}from"./iframe-CgH0cfjf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Oo2j5ZNJ.js";import{H as s,m as n}from"./Help.stories-C8kuSM7h.js";import c from"./RadioButton.stories-DxLjfYeB.js";import{F as d}from"./FieldGroup-Bb6qd-IC.js";import{C as l}from"./Checkbox-CE376rPc.js";import{R as u}from"./RadioButton-Boa86xlw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D_yODdwz.js";import"./Button-QHyL1yca.js";import"./usePreviousValue-C7b8MKT1.js";import"./Loader-DNr6RBIB.js";import"./useDelayedRender-CLJYiC0r.js";/* empty css               *//* empty css               */import"./Flex-dVxRpmjE.js";import"./SlotComponent-CXwbHoSH.js";import"./mergeRefs-B2OW1awa.js";import"./BaseRadioButton.stories-KyCDVqxr.js";import"./BaseRadioButton-B0si_EIB.js";import"./useId-DrON_3iC.js";/* empty css               */import"./Label-HdGyraz-.js";import"./SupportLabel-BlCKkqja.js";import"./WarningIcon-D21TK44B.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
