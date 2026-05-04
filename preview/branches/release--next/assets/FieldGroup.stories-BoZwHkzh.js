import{j as p,r as a}from"./iframe-xAy-jSDa.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D1VaXo-A.js";import{H as s,m as n}from"./Help.stories-C0RKXBLF.js";import c from"./RadioButton.stories-D57L2pNn.js";import{F as d}from"./FieldGroup-BZLnt4Ri.js";import{R as l}from"./RadioButton-jrYUx0in.js";import{C as u}from"./Checkbox-eKwktJn2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-IjxwTP1E.js";import"./Label-hQtnkl7q.js";import"./SupportLabel-BeOzAb5v.js";import"./WarningIcon-CzqBidOD.js";import"./Icon-BTMG1BMq.js";import"./Button-Zod5PXLC.js";import"./usePreviousValue-DYPBaTes.js";import"./Loader-B_uaMB7Q.js";import"./useDelayedRender-oY8L-sGU.js";/* empty css               *//* empty css               */import"./Flex-CYB7UVEi.js";import"./SlotComponent-DzxcPUoo.js";import"./mergeRefs-CxFp_vlV.js";import"./BaseRadioButton.stories-Cy5n6DC9.js";import"./BaseRadioButton-C7tRflPE.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
