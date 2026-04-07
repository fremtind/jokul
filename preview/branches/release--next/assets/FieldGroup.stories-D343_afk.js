import{j as p,r as a}from"./iframe-CILOEhDj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-kUIID2-1.js";import{H as s,m as n}from"./Help.stories-DB6d_Bq8.js";import c from"./RadioButton.stories-CmLY7lxL.js";import{F as d}from"./FieldGroup-DA-SD22T.js";import{R as l}from"./RadioButton-CRV2l7vD.js";import{C as u}from"./Checkbox-CAYDnxIN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-o78PyxIp.js";import"./Label-BhFPSG2U.js";import"./SupportLabel-Dvp-bkX_.js";import"./WarningIcon-DDkxZCSe.js";import"./Icon-D8r8Q6Yt.js";import"./Button-BUtAMkdp.js";import"./usePreviousValue-BaGnne2z.js";import"./Loader-C4rjoTl-.js";import"./useDelayedRender-BPATKa97.js";/* empty css               *//* empty css               */import"./Flex-Cq83v9mj.js";import"./SlotComponent-COedkfmY.js";import"./mergeRefs-CIgq9MF_.js";import"./BaseRadioButton.stories-DFD1JZ9i.js";import"./BaseRadioButton-C0w6d6KD.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
