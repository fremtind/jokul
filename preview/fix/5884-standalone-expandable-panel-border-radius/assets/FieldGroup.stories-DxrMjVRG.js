import{j as p,r as a}from"./iframe-wO2UT801.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DAlOmBLv.js";import{H as s,m as n}from"./Help.stories-D0ps_nN7.js";import c from"./RadioButton.stories-VdF5ozxR.js";import{F as d}from"./FieldGroup-DNV7adWu.js";import{R as l}from"./RadioButton-Cf8FmaAT.js";import{C as u}from"./Checkbox-DgfpRPyn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-0LaIJzsl.js";import"./Label-BnHr_VvC.js";import"./SupportLabel-BcdI4Kgf.js";import"./WarningIcon-RhduDqhM.js";import"./Icon-BYX0wgTH.js";import"./Button-BgorDj2S.js";import"./usePreviousValue-Cvli6wQ7.js";import"./Loader-DIz8WZCm.js";import"./useDelayedRender-D91dFeA6.js";/* empty css               *//* empty css               */import"./Flex-DwYSCGwe.js";import"./SlotComponent-BIblOTa7.js";import"./mergeRefs-DDfgJK72.js";import"./BaseRadioButton.stories-Doh6s46P.js";import"./BaseRadioButton-BbPp1_Et.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
