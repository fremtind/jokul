import{r as a,j as p}from"./iframe-C4ynJggF.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D03hlBeG.js";import{H as s,m as n}from"./Help.stories-C3fIR6Tk.js";import c from"./RadioButton.stories-LE9wDkbh.js";import{F as d}from"./FieldGroup-DILYGqjI.js";import{C as l}from"./Checkbox-DR1AoXYM.js";import{R as u}from"./RadioButton-DM7wxnpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BQfu19jw.js";import"./Button-Cq0EhNjF.js";import"./usePreviousValue-DSapE30P.js";import"./Loader-BLl4iwTU.js";import"./useDelayedRender-CNj2gsVT.js";/* empty css               *//* empty css               */import"./Flex-CZZzkVbW.js";import"./SlotComponent-C65nLQhe.js";import"./mergeRefs-CD2CjBYZ.js";import"./BaseRadioButton.stories-C0JMA59Z.js";import"./BaseRadioButton-CGBHS-JY.js";import"./useId-YkN9Cn1m.js";/* empty css               */import"./Label-BPDdTRWY.js";import"./SupportLabel-i6k3x4HZ.js";import"./WarningIcon-2xKaOFKb.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
