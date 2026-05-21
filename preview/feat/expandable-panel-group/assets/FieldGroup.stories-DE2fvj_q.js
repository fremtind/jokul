import{r as a,j as p}from"./iframe-BTtWWo1C.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D3cDv1-r.js";import{H as s,m as n}from"./Help.stories-tBYwqHO0.js";import c from"./RadioButton.stories-D_k-0X7c.js";import{F as d}from"./FieldGroup-CAxG9r7l.js";import{C as l}from"./Checkbox-JPi_vRV6.js";import{R as u}from"./RadioButton-D5loLXyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BOdLOqFb.js";import"./Button-CRzLtS1X.js";import"./usePreviousValue-B6QNYmUu.js";import"./Loader-iAEh3rdc.js";import"./useDelayedRender-B8GaX5jI.js";/* empty css               *//* empty css               */import"./Flex-CQ74zEeP.js";import"./SlotComponent-DbYZyJ4O.js";import"./mergeRefs-Bdctw9VX.js";import"./BaseRadioButton.stories-BlyjvJcx.js";import"./BaseRadioButton-CbkRmlKQ.js";import"./useId-DpYYrcil.js";import"./Label-DrZ_Fv23.js";import"./SupportLabel-_Oy_nUqh.js";import"./WarningIcon-BBKXWUFQ.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
