import{j as p,r as a}from"./iframe-y6nOPYIN.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BihCUEKs.js";import{H as s,m as n}from"./Help.stories-CuZN_m7O.js";import c from"./RadioButton.stories-B3MjFyJO.js";import{F as d}from"./FieldGroup-ByU3VExJ.js";import{R as l}from"./RadioButton-DTMi34eP.js";import{C as u}from"./Checkbox-YbSn5cLg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B9ueczzi.js";import"./Label-D5jhZMUZ.js";import"./SupportLabel-D5VsiT6-.js";import"./WarningIcon-BMtgscB1.js";import"./Icon-K_Qdkdg_.js";import"./Button-DIB5hBuN.js";import"./usePreviousValue-rx6-FOFY.js";import"./Loader-B0iItGpp.js";import"./useDelayedRender-DWmHy2_E.js";/* empty css               *//* empty css               */import"./Flex-BSzg9J0u.js";import"./SlotComponent-C1WTP3D0.js";import"./mergeRefs-B-u-Mco7.js";import"./BaseRadioButton.stories-prrPgj11.js";import"./BaseRadioButton-BkWhPx4P.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
