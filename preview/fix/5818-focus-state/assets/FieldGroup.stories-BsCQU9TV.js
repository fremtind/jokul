import{j as p,r as a}from"./iframe-BVHOLcVd.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-wNkJrsjN.js";import{H as s,m as n}from"./Help.stories-DWkSOZbE.js";import c from"./RadioButton.stories-Cx_euR3U.js";import{F as d}from"./FieldGroup-B-OqcTL9.js";import{R as l}from"./RadioButton-CfaacX2z.js";import{C as u}from"./Checkbox-CXC4_iFg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DSA8UnQh.js";import"./Label-DE4atTkI.js";import"./SupportLabel-e7WQkePu.js";import"./WarningIcon-BHSYcFDo.js";import"./Icon-DLtQi_Pl.js";import"./Button-BBx831c1.js";import"./usePreviousValue-DOlJYfY5.js";import"./Loader-rULv3-KH.js";import"./useDelayedRender-C3cLBSN8.js";/* empty css               *//* empty css               */import"./Flex-BCMqQlG8.js";import"./SlotComponent-CFgtbsVJ.js";import"./mergeRefs-Cn48dcoI.js";import"./BaseRadioButton.stories-DfEtUPyY.js";import"./BaseRadioButton-DleOM05c.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
