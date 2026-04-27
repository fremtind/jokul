import{j as p,r as a}from"./iframe-BZGaa5SZ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B6ZknlVZ.js";import{H as s,m as n}from"./Help.stories-t0TL28ry.js";import c from"./RadioButton.stories-BFrXJzWe.js";import{F as d}from"./FieldGroup-DSfLmsG6.js";import{R as l}from"./RadioButton-PqPi7Hdx.js";import{C as u}from"./Checkbox-Uji1ualh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-jJHz2K0i.js";import"./Label-cT7MHQMJ.js";import"./SupportLabel-CRxGczFY.js";import"./WarningIcon-BPmt6IwN.js";import"./Icon-hg-GR2hH.js";import"./Button-DaDn7WvA.js";import"./usePreviousValue-C4RVHPUc.js";import"./Loader-BanJgLWR.js";import"./useDelayedRender-CsOtgp6N.js";/* empty css               *//* empty css               */import"./Flex-DfPCJjNu.js";import"./SlotComponent-Duk7vz1a.js";import"./mergeRefs-yGK5rEGb.js";import"./BaseRadioButton.stories-Bo-zyJSq.js";import"./BaseRadioButton-BEL40GEb.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
