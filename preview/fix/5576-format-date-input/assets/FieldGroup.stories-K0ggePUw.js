import{j as p,r as a}from"./iframe-D47ECc-i.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DqDdfZiD.js";import{H as s,m as n}from"./Help.stories-2ErMuGVq.js";import c from"./RadioButton.stories-Cgp5EICq.js";import{F as d}from"./FieldGroup-FepYQeHp.js";import{R as l}from"./RadioButton-CxcjbcKD.js";import{C as u}from"./Checkbox-CmrBFRxf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-4j4sAaIk.js";import"./Label-DzB9zIsI.js";import"./SupportLabel-Ck7P2EuR.js";import"./WarningIcon-DZ1D_bMR.js";import"./Icon-25eR-AS8.js";import"./Button-CnI4vRnR.js";import"./usePreviousValue-D3cNjnJq.js";import"./Loader-Do-rj7G9.js";import"./useDelayedRender-DVxEpbgn.js";/* empty css               *//* empty css               */import"./Flex-CkedjzgL.js";import"./SlotComponent-DlaQR0zr.js";import"./mergeRefs-YxKH6mI8.js";import"./BaseRadioButton.stories-BkqokK5W.js";import"./BaseRadioButton-DL4KBtH8.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
