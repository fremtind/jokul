import{j as p,r as a}from"./iframe-Y3RdmOQL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-vazUeHXx.js";import{H as s,m as n}from"./Help.stories-DGH1q2yF.js";import c from"./RadioButton.stories-BcxfkqZD.js";import{F as d}from"./FieldGroup-D2JripVb.js";import{R as l}from"./RadioButton-iySlVpgU.js";import{C as u}from"./Checkbox-xgMUQDOW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BjRWsMLu.js";import"./Label-s4C7pt5g.js";import"./SupportLabel-Cw4txt_v.js";import"./WarningIcon-BHqPce9d.js";import"./Icon-eVkb1Efz.js";import"./Button-CzYrnD6h.js";import"./usePreviousValue-YVp05dAs.js";import"./Loader-BRiq2QV8.js";import"./useDelayedRender-BsoUHEKF.js";/* empty css               *//* empty css               */import"./Flex-Dvs6zYTn.js";import"./SlotComponent-BtJp2NcO.js";import"./mergeRefs-CrwHNXxz.js";import"./BaseRadioButton.stories-3JEzbnA7.js";import"./BaseRadioButton-RGx9cZgT.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
