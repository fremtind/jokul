import{r as a,j as p}from"./iframe-HvQr5kN0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BjuRHn6X.js";import s from"./Help.stories-YRtDWO4Z.js";import n from"./RadioButton.stories-DL1pTfnA.js";import{F as c}from"./FieldGroup-B2k7WfCL.js";import{C as d}from"./Checkbox-Dbk1KvCK.js";import{H as l}from"./Help-PM4YJbno.js";import{R as u}from"./RadioButton-TuLlQPec.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-nfUT-6Aj.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CNYFjCTJ.js";import"./mergeRefs-BMjbe3lX.js";import"./BaseRadioButton.stories-Bm5Cnezk.js";import"./BaseRadioButton-wHVOYaP7.js";import"./useId-Dol2UeJo.js";/* empty css               */import"./Label-D5vi3BOP.js";import"./SupportLabel-BMQ-S6Iv.js";import"./WarningIcon-BUrSqrmY.js";import"./Icon-D8JyBxeF.js";import"./Button-Bhzp4fc4.js";import"./usePreviousValue-Byp8xk4v.js";import"./Loader-CmyziqgR.js";import"./useDelayedRender-CVlCLz_A.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
