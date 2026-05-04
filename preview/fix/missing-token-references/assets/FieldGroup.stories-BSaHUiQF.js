import{j as p,r as a}from"./iframe-B05LJxpz.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C82el18q.js";import{H as s,m as n}from"./Help.stories-B6gC4jSA.js";import c from"./RadioButton.stories-C1oc-ek-.js";import{F as d}from"./FieldGroup-BDPHFMIg.js";import{R as l}from"./RadioButton-C0fiqEbU.js";import{C as u}from"./Checkbox-BtLWjaDd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Co7whMpO.js";import"./Label-CTw_RBFt.js";import"./SupportLabel-7xQp8Epr.js";import"./WarningIcon-sZEAk-VZ.js";import"./Icon-tok_7tQ9.js";import"./Button-u_LOq4D2.js";import"./usePreviousValue-CuFEBIMa.js";import"./Loader-o1FA-2gM.js";import"./useDelayedRender-DBmZDB2s.js";/* empty css               *//* empty css               */import"./Flex-BN-nrnTQ.js";import"./SlotComponent-CWxaHizj.js";import"./mergeRefs-BV9OJLeE.js";import"./BaseRadioButton.stories-DiUuXsUd.js";import"./BaseRadioButton-B87LhyOA.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
