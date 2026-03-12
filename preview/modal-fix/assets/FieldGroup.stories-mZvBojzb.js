import{j as p,r as a}from"./iframe-C4Nkq-VY.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DNhw6Mda.js";import{H as s,m as n}from"./Help.stories-BjEJD-eY.js";import c from"./RadioButton.stories-B9Uj6456.js";import{F as d}from"./FieldGroup-CrBG7J_S.js";import{R as l}from"./RadioButton-D_NK07Ua.js";import{C as u}from"./Checkbox-D9xAuzhn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Js1rDQKY.js";import"./Label-CrNNcbW6.js";import"./SupportLabel-jgimv0Ej.js";import"./WarningIcon-Du00iMuZ.js";import"./Icon-D-2N4vyt.js";import"./Button-CEXPsxgG.js";import"./usePreviousValue-BkoMmspO.js";import"./Loader-2-F3B6Ym.js";import"./useDelayedRender-DY9Pm0sp.js";/* empty css               *//* empty css               */import"./Flex-DBNCPFI9.js";import"./SlotComponent-CBCL0Yaj.js";import"./mergeRefs-BY_P9p2r.js";import"./BaseRadioButton.stories-D5l9Flap.js";import"./BaseRadioButton-D9qI2eYw.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
