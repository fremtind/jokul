import{j as p,r as a}from"./iframe-NTeKS5bw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C-oXc6c9.js";import{H as s,m as n}from"./Help.stories-D_wVbUa6.js";import c from"./RadioButton.stories-hec3y1Pe.js";import{F as d}from"./FieldGroup-DM4y0oU1.js";import{R as l}from"./RadioButton-DHQ9qzMg.js";import{C as u}from"./Checkbox-BEd5Jh06.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DAzHh75P.js";import"./Label-CjTZBTj8.js";import"./SupportLabel-CdWGtAMA.js";import"./WarningIcon-CLLrTu1B.js";import"./Icon-MZT-F91u.js";import"./Button-BcaX1zLV.js";import"./usePreviousValue-CM2awU38.js";import"./Loader-QuoXIoLr.js";import"./useDelayedRender-D-3FgJvK.js";/* empty css               *//* empty css               */import"./Flex-Bc6XdBpm.js";import"./SlotComponent-Bw1RIH2g.js";import"./mergeRefs-glpEmFeU.js";import"./BaseRadioButton.stories-BB_4l3Fn.js";import"./BaseRadioButton-lsyDa-nB.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
