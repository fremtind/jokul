import{r as a,j as p}from"./iframe-DBe7Xfsp.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D6sB-j78.js";import{H as s,m as n}from"./Help.stories-sXuQfJ3E.js";import c from"./RadioButton.stories-Bb84FNLx.js";import{F as d}from"./FieldGroup-B1fPnsua.js";import{C as l}from"./Checkbox-DiFbctZ-.js";import{R as u}from"./RadioButton-UTnvOETs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-2FvekQQv.js";import"./Button-B1J-JraU.js";import"./usePreviousValue-BI2H-9DI.js";import"./Loader-Bp-XS5IQ.js";import"./useDelayedRender-_yXqYvqY.js";/* empty css               *//* empty css               */import"./Flex-DY4QSgXo.js";import"./SlotComponent-DCDTIde2.js";import"./mergeRefs-BylHgxPO.js";import"./BaseRadioButton.stories-C2l4_LjI.js";import"./BaseRadioButton-wLJ5tLiB.js";import"./useId-C8MUwrTG.js";/* empty css               */import"./Label-BPHNjVfs.js";import"./SupportLabel-BL-Ro5cG.js";import"./WarningIcon-DJOatgVx.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
