import{j as p,r as a}from"./iframe-CX7d-M6G.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BhdJzAT_.js";import{H as s,m as n}from"./Help.stories-BZXpf7Xn.js";import c from"./RadioButton.stories-zouE8FdT.js";import{F as d}from"./FieldGroup-DXXWBcq8.js";import{R as l}from"./RadioButton-C_gmT_MC.js";import{C as u}from"./Checkbox-BJaDj9SU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CVAgRN4R.js";import"./Label-DKRirb-G.js";import"./SupportLabel-C6mhfjzx.js";import"./WarningIcon-xCUlSVcJ.js";import"./Icon-DP0TbAjA.js";import"./Button-C6J32eKw.js";import"./usePreviousValue-9mUcCFwU.js";import"./Loader-BIVhUfXk.js";import"./useDelayedRender-Cj-5yd5I.js";/* empty css               *//* empty css               */import"./Flex-D8YWhLiW.js";import"./SlotComponent-C-aBYc1k.js";import"./mergeRefs-ChfDIb2x.js";import"./BaseRadioButton.stories-Dlucmxa0.js";import"./BaseRadioButton-ZWBaUHaA.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
