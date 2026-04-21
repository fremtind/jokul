import{j as p,r as a}from"./iframe-BZriAk9T.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DyWjNoaP.js";import{H as s,m as n}from"./Help.stories-C30DSV_m.js";import c from"./RadioButton.stories-CuNj9pVi.js";import{F as d}from"./FieldGroup-DRyLDWsx.js";import{R as l}from"./RadioButton-BjH7fTj0.js";import{C as u}from"./Checkbox-D6P9Uxox.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DwwpxhK8.js";import"./Label-8fDZQ9xf.js";import"./SupportLabel-CN0aRUPH.js";import"./WarningIcon-BWuYwrQN.js";import"./Icon-CMCQGNTd.js";import"./Button-CgeBvHcw.js";import"./usePreviousValue-BAcaGMow.js";import"./Loader-BfbYswuT.js";import"./useDelayedRender-D9Wgyg9I.js";/* empty css               *//* empty css               */import"./Flex-DWMhiXhc.js";import"./SlotComponent-C5njwR9Q.js";import"./mergeRefs-CyH_Q26M.js";import"./BaseRadioButton.stories-C8DkJVD3.js";import"./BaseRadioButton-QkIZzcha.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
