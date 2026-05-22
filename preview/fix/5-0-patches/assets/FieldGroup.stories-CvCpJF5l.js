import{r as a,j as p}from"./iframe-Cor5FvOB.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dr21116O.js";import{H as s,m as n}from"./Help.stories-BwOi8QV6.js";import c from"./RadioButton.stories-BdCqIdQ0.js";import{F as d}from"./FieldGroup-CAbjyyzm.js";import{C as l}from"./Checkbox-CYPWfJUX.js";import{R as u}from"./RadioButton-CpY1V7t1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B0awLozu.js";import"./Button-Cs4MJRMv.js";import"./usePreviousValue-CfOCfWnN.js";import"./Loader-HNcIDs_o.js";import"./useDelayedRender-DyLTxAc6.js";/* empty css               *//* empty css               */import"./Flex-DeCXz9hF.js";import"./SlotComponent-MrSF0Byh.js";import"./mergeRefs-SPUosunZ.js";import"./BaseRadioButton.stories-DGKjKhfW.js";import"./BaseRadioButton-aw6M4L-s.js";import"./useId-sl5BMbPy.js";/* empty css               */import"./Label-DVWGsKc6.js";import"./SupportLabel-Mx_cHvtd.js";import"./WarningIcon-DmP8AKFg.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
