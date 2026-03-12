import{j as p,r as a}from"./iframe-BRQ1N0J2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BNuV5siI.js";import{H as s,m as n}from"./Help.stories-CLTATVcd.js";import c from"./RadioButton.stories-BZ2EUbzC.js";import{F as d}from"./FieldGroup-CY1JlWAe.js";import{R as l}from"./RadioButton-VSHEWt5P.js";import{C as u}from"./Checkbox-Dmnz6yg3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B7EFyzwZ.js";import"./Label-Bc0oeFVY.js";import"./SupportLabel-C1Jykn3n.js";import"./WarningIcon-DyEsKJnd.js";import"./Icon-BE0_XbeF.js";import"./Button-D5gHP5UF.js";import"./usePreviousValue-C9h1KbP0.js";import"./Loader-DbkTn-2h.js";import"./useDelayedRender-B9Um1iZ6.js";/* empty css               *//* empty css               */import"./Flex-CDHaMuNT.js";import"./SlotComponent-DS2UJLfJ.js";import"./mergeRefs-DaMFPXbR.js";import"./BaseRadioButton.stories-Br4PeH2I.js";import"./BaseRadioButton-CfemQrQ3.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
