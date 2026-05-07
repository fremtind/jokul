import{r as a,j as p}from"./iframe-C8fGAgFk.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-S3yWi-EB.js";import{H as s,m as n}from"./Help.stories-DvC1PytP.js";import c from"./RadioButton.stories-BOM5bRv0.js";import{F as d}from"./FieldGroup-BRTLTuWQ.js";import{C as l}from"./Checkbox-ClnS3gVK.js";import{R as u}from"./RadioButton-DNMBXWyi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dlkj1RDq.js";import"./Button-BSdCQnaS.js";import"./usePreviousValue-CZTGjU9J.js";import"./Loader-B7xGGxRN.js";import"./useDelayedRender-hWrkGOgS.js";/* empty css               *//* empty css               */import"./Flex-CfoTI5Xn.js";import"./SlotComponent-B3CrpHC2.js";import"./mergeRefs-DHBeI3Mg.js";import"./BaseRadioButton.stories-Ck_mGF5r.js";import"./BaseRadioButton-BB_4AH-a.js";import"./useId-ChU0Ic5q.js";/* empty css               */import"./Label-C-Q_H7Av.js";import"./SupportLabel-DptV8ant.js";import"./WarningIcon-DwSsQhIK.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
