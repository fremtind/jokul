import{j as p,r as a}from"./iframe-CRzK_0Ph.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bbw31TUH.js";import{H as s,m as n}from"./Help.stories-Bmy9X_UG.js";import c from"./RadioButton.stories-BjGsogtU.js";import{F as d}from"./FieldGroup-BIvVapzI.js";import{R as l}from"./RadioButton-DdAU9AVS.js";import{C as u}from"./Checkbox-BDpuYHI-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BdUDD9nN.js";import"./Label-ClEeCS3i.js";import"./SupportLabel-VJW_6EcK.js";import"./WarningIcon-R7CnE70Y.js";import"./Icon-Ckx__C7C.js";import"./Button-CZPoRSHN.js";import"./usePreviousValue-D06-9rDp.js";import"./Loader-kxzA4rX3.js";import"./useDelayedRender-CGGt330H.js";/* empty css               *//* empty css               */import"./Flex-LJgN8wrK.js";import"./SlotComponent-nSy3gOzG.js";import"./mergeRefs-BPdCf68N.js";import"./BaseRadioButton.stories-BS34tqm1.js";import"./BaseRadioButton-D18VyQt7.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
