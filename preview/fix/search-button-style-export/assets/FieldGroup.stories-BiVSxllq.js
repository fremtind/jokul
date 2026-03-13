import{j as p,r as a}from"./iframe-Cem2ToXU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DR5Lttin.js";import{H as s,m as n}from"./Help.stories-BmVLn2hl.js";import c from"./RadioButton.stories-Dp6BRHyD.js";import{F as d}from"./FieldGroup-CsyIM5tl.js";import{R as l}from"./RadioButton-BeUi90o0.js";import{C as u}from"./Checkbox-0CO6B08T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BuqDg84Y.js";import"./Label-ClXo7bWM.js";import"./SupportLabel-JZR8Orcx.js";import"./WarningIcon-DyckbUWt.js";import"./Icon-BHA88wkc.js";import"./Button-CSwqnIqS.js";import"./usePreviousValue-D91rROR-.js";import"./Loader-BlyNdwdt.js";import"./useDelayedRender-vqoIciIp.js";/* empty css               *//* empty css               */import"./Flex-DghZo7NN.js";import"./SlotComponent-C4T4SzQM.js";import"./mergeRefs-B_TDw_DS.js";import"./BaseRadioButton.stories-BlbPa4Q7.js";import"./BaseRadioButton-Q_QL_lSs.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
