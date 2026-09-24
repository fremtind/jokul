import{r as a,j as p}from"./iframe-nV3fhUCp.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CKmJTCYH.js";import{H as s,m as n}from"./Help.stories-D1qT-DAY.js";import c from"./RadioButton.stories-obcB-82V.js";import{F as d}from"./FieldGroup-CjWV9nPc.js";import{C as l}from"./Checkbox-Btrb_9A_.js";import{R as u}from"./RadioButton-D8wKkm8K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-8N_otSe-.js";import"./Button-BsaFF6Sw.js";import"./usePreviousValue-Blaf-_zB.js";import"./Loader-Cnlaymk8.js";import"./useDelayedRender-X_bbhIn1.js";/* empty css               *//* empty css               */import"./Flex-Dv66Koic.js";import"./SlotComponent-CvLf0BCw.js";import"./mergeRefs-DLhsb8A0.js";import"./BaseRadioButton.stories-DSmcQtCz.js";import"./BaseRadioButton-C2gJH2xV.js";import"./useId-B1igbZJM.js";/* empty css               */import"./Label-CjozLwQ5.js";import"./SupportLabel-DqWg2g4Q.js";import"./WarningIcon-U37FaTlU.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
