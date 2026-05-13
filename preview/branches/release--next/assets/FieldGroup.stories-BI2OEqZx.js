import{j as p,r as a}from"./iframe-BCrVBS0g.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BzaYGWa9.js";import{H as s,m as n}from"./Help.stories-DuYU7doH.js";import c from"./RadioButton.stories-Bopni1Kw.js";import{F as d}from"./FieldGroup-ByrmjCku.js";import{R as l}from"./RadioButton-DXOCI4w2.js";import{C as u}from"./Checkbox-Bpv8l9BH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BfQYPIV6.js";import"./Label-T6OOAMFR.js";import"./SupportLabel-BCrArRBb.js";import"./WarningIcon-kmQYGiTj.js";import"./Icon-Cnh0WIU6.js";import"./Button-D6aJLWNf.js";import"./usePreviousValue-BFunGDPP.js";import"./Loader-tTwNbDTj.js";import"./useDelayedRender-BHRWoUfH.js";/* empty css               *//* empty css               */import"./Flex-BuEW-xJ4.js";import"./SlotComponent-DFopV8BH.js";import"./mergeRefs-DshUL5y6.js";import"./BaseRadioButton.stories-CNPosFA2.js";import"./BaseRadioButton-BGiE0Kh7.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
