import{r as a,j as p}from"./iframe-DYr4SLoh.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BHPtsLHr.js";import{H as s,m as n}from"./Help.stories-BIDB6PlE.js";import c from"./RadioButton.stories-s3RvhZb5.js";import{F as d}from"./FieldGroup-CblOR0EC.js";import{C as l}from"./Checkbox-soWwcZPl.js";import{R as u}from"./RadioButton-CmtMB3Xt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BQxFNxDd.js";import"./Button-nQY7fcX6.js";import"./usePreviousValue-Xv7x5TK2.js";import"./Loader-DEIjmKQ4.js";import"./useDelayedRender-Cf7vo2zR.js";/* empty css               *//* empty css               */import"./Flex-BIa9Uru3.js";import"./SlotComponent-DT8SMLiI.js";import"./mergeRefs-C2D1eNDm.js";import"./BaseRadioButton.stories-Cw7_gRY8.js";import"./BaseRadioButton-Dz6jCfuE.js";import"./useId-IaY9OUdw.js";/* empty css               */import"./Label-B4npST4T.js";import"./SupportLabel-CdQcSY1H.js";import"./WarningIcon-BGB5Qobm.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
