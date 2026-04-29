import{j as p,r as a}from"./iframe-C8pIWXRV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DQNlNyYe.js";import{H as s,m as n}from"./Help.stories-B8Gk4EoY.js";import c from"./RadioButton.stories-BCfBvUIv.js";import{F as d}from"./FieldGroup-CWKcD_uS.js";import{R as l}from"./RadioButton-CCccDCKH.js";import{C as u}from"./Checkbox-BSHRGhZq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-3-sZuPCb.js";import"./Label-9mqGQs5-.js";import"./SupportLabel-C2Uoviy-.js";import"./WarningIcon-y2Ot8-A4.js";import"./Icon-FsNKc6yB.js";import"./Button-DAMyOU_F.js";import"./usePreviousValue-BT4r1II2.js";import"./Loader-qPMbUSZe.js";import"./useDelayedRender-Bo7JdcBo.js";/* empty css               *//* empty css               */import"./Flex-BUSNOkNB.js";import"./SlotComponent-ng7xPqcq.js";import"./mergeRefs-B_uzwmiV.js";import"./BaseRadioButton.stories-BeNDkPV0.js";import"./BaseRadioButton-BfjKjx6k.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
