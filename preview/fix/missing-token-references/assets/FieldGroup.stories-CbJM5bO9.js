import{j as p,r as a}from"./iframe-CeesAeJk.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CauHUi_Q.js";import{H as s,m as n}from"./Help.stories-CnVyBMWW.js";import c from"./RadioButton.stories-S10R7Hyn.js";import{F as d}from"./FieldGroup-BF5z908T.js";import{R as l}from"./RadioButton-B0dwYcvw.js";import{C as u}from"./Checkbox-DtwtZexU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-2pFt6F_A.js";import"./Label-BqK-IBeX.js";import"./SupportLabel-1PRZZiNM.js";import"./WarningIcon-Cbvn31Sd.js";import"./Icon-mZYfqGYU.js";import"./Button-DwqEI8aB.js";import"./usePreviousValue-BT40vW8m.js";import"./Loader-lWwKCdlt.js";import"./useDelayedRender-WPsDlUVi.js";/* empty css               *//* empty css               */import"./Flex-M93KjfCP.js";import"./SlotComponent-BbCsnBSL.js";import"./mergeRefs-BkCkL791.js";import"./BaseRadioButton.stories-OJtkL7rf.js";import"./BaseRadioButton-qVAFR6bk.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
