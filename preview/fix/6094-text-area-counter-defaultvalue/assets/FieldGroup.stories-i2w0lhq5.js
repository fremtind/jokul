import{r as a,j as p}from"./iframe-BoM6kF9P.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DUiTeGEP.js";import{H as s,m as n}from"./Help.stories-gkS6p5nK.js";import c from"./RadioButton.stories-lDSwMNhg.js";import{F as d}from"./FieldGroup-CUeY515k.js";import{C as l}from"./Checkbox-CiJvRKTG.js";import{R as u}from"./RadioButton-DsdZY1GV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DtXAYuB0.js";import"./Button-C4hMtSMK.js";import"./usePreviousValue-B6hg28lk.js";import"./Loader-BO5gOWer.js";import"./useDelayedRender-BMy5hjbT.js";/* empty css               *//* empty css               */import"./Flex-CIAXa9CS.js";import"./SlotComponent-D-o6uVoJ.js";import"./mergeRefs-DAPS0KVT.js";import"./BaseRadioButton.stories-D-sehhOC.js";import"./BaseRadioButton-CGi-gmgJ.js";import"./useId-DQz-AIXZ.js";/* empty css               */import"./Label-COjxE_88.js";import"./SupportLabel-CLvYjoso.js";import"./WarningIcon-f68lnn0d.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
