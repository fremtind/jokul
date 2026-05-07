import{j as p,r as a}from"./iframe-tQ4G7g9A.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-kASxRWwt.js";import{H as s,m as n}from"./Help.stories-CJMqpYTM.js";import c from"./RadioButton.stories-bDsU-Qqu.js";import{F as d}from"./FieldGroup-7xQyJfvA.js";import{R as l}from"./RadioButton-iEouDXk3.js";import{C as u}from"./Checkbox-Kjn-2dqw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C1FrNwDf.js";import"./Label-DkfCftNo.js";import"./SupportLabel-Ca_Owtq8.js";import"./WarningIcon-BPTLbP6c.js";import"./Icon-COXTUEtO.js";import"./Button-ltMeyLT7.js";import"./usePreviousValue-BVG2B16A.js";import"./Loader-eQPwrCaC.js";import"./useDelayedRender-W7e_mptM.js";/* empty css               *//* empty css               */import"./Flex-BqM_AUKx.js";import"./SlotComponent-UNlW5GB8.js";import"./mergeRefs-C0od2vQd.js";import"./BaseRadioButton.stories-CegB66YJ.js";import"./BaseRadioButton-DLMwcGa1.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
