import{j as p,r as a}from"./iframe-DZBSsJnD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cav3bl0k.js";import{H as s,m as n}from"./Help.stories-vlB5F7Zm.js";import c from"./RadioButton.stories-Bm6zmxrz.js";import{F as d}from"./FieldGroup-CsNVjeZI.js";import{R as l}from"./RadioButton-c77cZUu0.js";import{C as u}from"./Checkbox-D_IEdsNl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DjHyqHrJ.js";import"./Label-Bi6AFjAt.js";import"./SupportLabel-BUXjpyKg.js";import"./WarningIcon-BKWvxHM8.js";import"./Icon-5qXjZqpD.js";import"./Button-g61y0tAO.js";import"./usePreviousValue-DLeNwlYm.js";import"./Loader-DrGQ6_g4.js";import"./useDelayedRender-1vbND-9J.js";/* empty css               *//* empty css               */import"./Flex-Dfe3z_65.js";import"./SlotComponent-DavYiv11.js";import"./mergeRefs-DysXC-cx.js";import"./BaseRadioButton.stories-CONQ0d7N.js";import"./BaseRadioButton-D7cbLCC0.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
