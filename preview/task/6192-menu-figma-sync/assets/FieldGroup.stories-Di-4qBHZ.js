import{r as a,j as p}from"./iframe-CMhLyFqE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BH3kkoIj.js";import{H as s,m as n}from"./Help.stories-DZn5zX-7.js";import c from"./RadioButton.stories-CwGdYVtb.js";import{F as d}from"./FieldGroup-MEcEAyVR.js";import{C as l}from"./Checkbox-BrGwrZK1.js";import{R as u}from"./RadioButton-B6NwpVys.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BU7vsafa.js";import"./Button-KI5gO_C0.js";import"./usePreviousValue-B0xvT5jy.js";import"./Loader-BqthR5uv.js";import"./useDelayedRender-oDS26ZpK.js";/* empty css               *//* empty css               */import"./Flex-Bo67cpK2.js";import"./SlotComponent-BJ_miotr.js";import"./mergeRefs-C3j3JAgx.js";import"./BaseRadioButton.stories-1jS_42w6.js";import"./BaseRadioButton--9-CNxvA.js";import"./useId-B2LHU1_w.js";/* empty css               */import"./Label-sIfwelQs.js";import"./SupportLabel-SJrzPZsH.js";import"./SuccessIcon-AbHL2Qv_.js";import"./WarningIcon-BjUJC57c.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
