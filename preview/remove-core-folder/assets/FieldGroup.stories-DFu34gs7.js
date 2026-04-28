import{j as p,r as a}from"./iframe-Be594wqm.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BuDx5EKC.js";import{H as s,m as n}from"./Help.stories-CsHoMeHK.js";import c from"./RadioButton.stories-CZAlJTqe.js";import{F as d}from"./FieldGroup-eleyOOUd.js";import{R as l}from"./RadioButton-DmVcvRPj.js";import{C as u}from"./Checkbox-DZPvOoqd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CYIch4DL.js";import"./Label-BAHM2iOr.js";import"./SupportLabel-BNU1LEXU.js";import"./WarningIcon-Dc33qtzB.js";import"./Icon-DguHHZ_U.js";import"./Button-vrR3Bo_E.js";import"./usePreviousValue-DKcSuQ9J.js";import"./Loader-C2R0TTYf.js";import"./useDelayedRender-DzZ3eVCQ.js";/* empty css               *//* empty css               */import"./Flex-BI8OncTt.js";import"./SlotComponent-DyFIS93A.js";import"./mergeRefs-DNKkHOo4.js";import"./BaseRadioButton.stories-DUxRj4d3.js";import"./BaseRadioButton-DaJ4tfV7.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
