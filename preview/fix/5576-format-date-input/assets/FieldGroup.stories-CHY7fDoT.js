import{j as p,r as a}from"./iframe-Bp3W7Mku.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cz2sbsV9.js";import{H as s,m as n}from"./Help.stories-6xvIYUcg.js";import c from"./RadioButton.stories-C66QgZT2.js";import{F as d}from"./FieldGroup-CwA0Fd5K.js";import{R as l}from"./RadioButton-DeDdaGsh.js";import{C as u}from"./Checkbox-DESrrRk_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BBhc62CX.js";import"./Label-Qg5sxTDT.js";import"./SupportLabel-7LaEgDny.js";import"./WarningIcon-BUzvYGsq.js";import"./Icon-BGayrPtR.js";import"./Button-DWW-6-AC.js";import"./usePreviousValue-CnN57ey2.js";import"./Loader-CJPtlsGZ.js";import"./useDelayedRender-Bemijhvw.js";/* empty css               *//* empty css               */import"./Flex-BTZeC6J4.js";import"./SlotComponent-BIKn16Yj.js";import"./mergeRefs-BNtE5Eof.js";import"./BaseRadioButton.stories-B1g0IJjr.js";import"./BaseRadioButton-CnfEDRCb.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
