import{j as p,r as a}from"./iframe-CQmNNGDV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-COo8tyuZ.js";import{H as s,m as n}from"./Help.stories-CViLiTz4.js";import c from"./RadioButton.stories-BqYEY2vt.js";import{F as d}from"./FieldGroup-BQXG1iKN.js";import{R as l}from"./RadioButton-DkB2VBdJ.js";import{C as u}from"./Checkbox-16i_yaCm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BhcYcPMJ.js";import"./Label--PSB1gsd.js";import"./SupportLabel-fiM23Puw.js";import"./WarningIcon-C8FbzSKe.js";import"./Icon-C6yq4Lol.js";import"./Button-CytsVY-w.js";import"./usePreviousValue-BOI6zZxi.js";import"./Loader-BwcDXfSh.js";import"./useDelayedRender-CUZbDpKR.js";/* empty css               *//* empty css               */import"./Flex-Dha-HwEm.js";import"./SlotComponent-CtHCQpUE.js";import"./mergeRefs-B9gpfQ-t.js";import"./BaseRadioButton.stories-CdVnC3qL.js";import"./BaseRadioButton-ILXTBD7Z.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
