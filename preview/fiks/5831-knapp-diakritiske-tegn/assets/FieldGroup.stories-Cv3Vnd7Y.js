import{j as p,r as a}from"./iframe-B0DayZ9c.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B7-ikYPt.js";import{H as s,m as n}from"./Help.stories-imIlEYM2.js";import c from"./RadioButton.stories-ZQNjzNJ6.js";import{F as d}from"./FieldGroup-D9O2iyUK.js";import{R as l}from"./RadioButton-CfK35Y8O.js";import{C as u}from"./Checkbox-DvbNMzmP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-gBfxsYqv.js";import"./Label-FBS6vhMQ.js";import"./SupportLabel-ppS3Qo7O.js";import"./WarningIcon-sW0WzjW4.js";import"./Icon-DmvXO8IU.js";import"./Button-DSx1vA38.js";import"./usePreviousValue-DkKE8rYJ.js";import"./Loader-Bx-JeR5W.js";import"./useDelayedRender-DbCvxKEK.js";/* empty css               *//* empty css               */import"./Flex-CkuisB5u.js";import"./SlotComponent-gbFXvK8w.js";import"./mergeRefs-Bq10F3-j.js";import"./BaseRadioButton.stories-DlC2Kuzn.js";import"./BaseRadioButton-DjCrmF_H.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
