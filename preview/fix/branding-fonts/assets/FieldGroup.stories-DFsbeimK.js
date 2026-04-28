import{j as p,r as a}from"./iframe-CE_CeO1a.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D4kxBvZj.js";import{H as s,m as n}from"./Help.stories-D4BCgySy.js";import c from"./RadioButton.stories-BAONIIkZ.js";import{F as d}from"./FieldGroup-CxaJOUyA.js";import{R as l}from"./RadioButton-BOyOZioW.js";import{C as u}from"./Checkbox-DOPO9MpU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cqh8mgXr.js";import"./Label-BKLaQ6DR.js";import"./SupportLabel-DRiEYc6Y.js";import"./WarningIcon-TtnFG471.js";import"./Icon-DOtbuS8d.js";import"./Button-KbNd0P05.js";import"./usePreviousValue-BWnC6nSN.js";import"./Loader-QMfH895d.js";import"./useDelayedRender-ByKockPP.js";/* empty css               *//* empty css               */import"./Flex-BC1UFhFQ.js";import"./SlotComponent-Ck_viyid.js";import"./mergeRefs-CAIvvtiJ.js";import"./BaseRadioButton.stories-Dn57dEbi.js";import"./BaseRadioButton-Dfaaso9i.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
