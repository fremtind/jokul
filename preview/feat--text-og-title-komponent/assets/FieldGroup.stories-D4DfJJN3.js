import{j as p,r as a}from"./iframe-RiSe5yph.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-jO0fJ5Rs.js";import{H as s,m as n}from"./Help.stories-CN-5eviS.js";import c from"./RadioButton.stories-D1RcU8p2.js";import{F as d}from"./FieldGroup-B7s1Dswe.js";import{R as l}from"./RadioButton-BkObpUwW.js";import{C as u}from"./Checkbox-BYCPrGrv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B6UCwi-r.js";import"./Label-BFZ-L014.js";import"./SupportLabel-CZ18TbkQ.js";import"./WarningIcon-Cwhhvy9B.js";import"./Icon-B_ifdt1-.js";import"./Button-BCyPIgp9.js";import"./usePreviousValue-B4FpuSei.js";import"./Loader-B9A7C6Uk.js";import"./useDelayedRender-D60ZOJsb.js";/* empty css               *//* empty css               */import"./Flex-ByONbHBC.js";import"./SlotComponent-CPXCDk-y.js";import"./mergeRefs-qgE891mv.js";import"./BaseRadioButton.stories-Ck5t1Vez.js";import"./BaseRadioButton-vKaDzqXr.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
