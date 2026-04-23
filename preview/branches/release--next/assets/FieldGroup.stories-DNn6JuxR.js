import{j as p,r as a}from"./iframe-BIlhZTKP.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DdHlxNP0.js";import{H as s,m as n}from"./Help.stories-CjkM5FwJ.js";import c from"./RadioButton.stories-rWYbg4gv.js";import{F as d}from"./FieldGroup-CeocPUhm.js";import{R as l}from"./RadioButton-CCBtAaKP.js";import{C as u}from"./Checkbox-kDdBSlWM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ofRpvY0J.js";import"./Label-CL3zG8rf.js";import"./SupportLabel-CrwlQgWu.js";import"./WarningIcon-LofYhvar.js";import"./Icon-BB3-8l8W.js";import"./Button-qb8AKXQy.js";import"./usePreviousValue-Bhly1Pk4.js";import"./Loader-CFHdWlr5.js";import"./useDelayedRender-CvuZra80.js";/* empty css               *//* empty css               */import"./Flex-BVgGpLS4.js";import"./SlotComponent-B8a5fD4_.js";import"./mergeRefs-CrtYLY59.js";import"./BaseRadioButton.stories-Djps0Lc1.js";import"./BaseRadioButton-Cv9uaCs9.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
