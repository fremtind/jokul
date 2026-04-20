import{j as p,r as a}from"./iframe-DoW2Y4x0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CUu-MTiD.js";import{H as s,m as n}from"./Help.stories-Tjrb4_Mm.js";import c from"./RadioButton.stories-BWBMyyN5.js";import{F as d}from"./FieldGroup-Cvf6iyku.js";import{R as l}from"./RadioButton-3gSo7MzV.js";import{C as u}from"./Checkbox-DhoZpXN_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CXL5FoLy.js";import"./Label-BBJ_Od9Y.js";import"./SupportLabel-B1tRAVQd.js";import"./WarningIcon-Bp4rAufJ.js";import"./Icon-DyUNnyvc.js";import"./Button-D1NvNHaH.js";import"./usePreviousValue-D_46oJHV.js";import"./Loader-UXcyXcMU.js";import"./useDelayedRender-6JYLRaY3.js";/* empty css               *//* empty css               */import"./Flex-B54Se3Rw.js";import"./SlotComponent-C-sb5sun.js";import"./mergeRefs-CU3X3qkX.js";import"./BaseRadioButton.stories-B_7UNWEd.js";import"./BaseRadioButton--h7QEpc_.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
