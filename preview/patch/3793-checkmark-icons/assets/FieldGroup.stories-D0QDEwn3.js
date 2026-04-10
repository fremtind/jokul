import{j as p,r as a}from"./iframe-BTBw0YwL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Zb_vjEQ4.js";import{H as s,m as n}from"./Help.stories-PcAv-nVG.js";import c from"./RadioButton.stories-Bq6HKaUO.js";import{F as d}from"./FieldGroup-DelgTfik.js";import{R as l}from"./RadioButton-BWwMWZhD.js";import{C as u}from"./Checkbox--NMLhY8M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B1bsGWyL.js";import"./Label-Cd1PvbDk.js";import"./SupportLabel-CDPiV-7u.js";import"./WarningIcon-Bw8tRguA.js";import"./Icon-DeV5lXGY.js";import"./Button-DdeAX5rM.js";import"./usePreviousValue-Cam-XJIL.js";import"./Loader-DetI8sU3.js";import"./useDelayedRender-1WYUmvHu.js";/* empty css               *//* empty css               */import"./Flex-C4Vd2IR9.js";import"./SlotComponent-BoqFG7Z7.js";import"./mergeRefs-DuD8LVIV.js";import"./BaseRadioButton.stories-DI3g3HLo.js";import"./BaseRadioButton-BAa2_oH2.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
