import{j as p,r as a}from"./iframe-DFW0GAMD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DKcdJwlw.js";import{H as s,m as n}from"./Help.stories-BZxCF6Wy.js";import c from"./RadioButton.stories-Cm3YQFcf.js";import{F as d}from"./FieldGroup-D78EMnKI.js";import{R as l}from"./RadioButton-C2mncRBP.js";import{C as u}from"./Checkbox-CRgNc3C1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CGw1NSpV.js";import"./Label-zKtvfPpK.js";import"./SupportLabel-DnUd1GXo.js";import"./WarningIcon-DNnsBuOe.js";import"./Icon-Ch_YbQB8.js";import"./Button-CzD86rKT.js";import"./usePreviousValue-BIBcWSCN.js";import"./Loader-qar5Ie8s.js";import"./useDelayedRender-BOcFKIGc.js";/* empty css               *//* empty css               */import"./Flex-sajUN031.js";import"./SlotComponent-gsUm4pzS.js";import"./mergeRefs-CkfOxOlv.js";import"./BaseRadioButton.stories-49l1kN1U.js";import"./BaseRadioButton-DnyiCqDS.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
