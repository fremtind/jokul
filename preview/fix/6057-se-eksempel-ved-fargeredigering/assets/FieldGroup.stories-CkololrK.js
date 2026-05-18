import{r as a,j as p}from"./iframe-BMg14vkX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BPmyQP0r.js";import{H as s,m as n}from"./Help.stories-Bgpd6TVF.js";import c from"./RadioButton.stories-COE4GCrI.js";import{F as d}from"./FieldGroup-A86XeTkW.js";import{C as l}from"./Checkbox-CzwcIs1d.js";import{R as u}from"./RadioButton-BulByhGk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B6iv-AsT.js";import"./Button-Cj6Y2l6-.js";import"./usePreviousValue-JD4QpOjA.js";import"./Loader-BkNTG2W-.js";import"./useDelayedRender-C1GW4Xht.js";/* empty css               *//* empty css               */import"./Flex-8wr3Gg2_.js";import"./SlotComponent-CLwu-nUD.js";import"./mergeRefs-C-SatDeR.js";import"./BaseRadioButton.stories-VDQOIR1i.js";import"./BaseRadioButton-iWCci0id.js";import"./useId-B3IQknbz.js";import"./Label-CrkWFjkH.js";import"./SupportLabel-DTTqJ0pj.js";import"./WarningIcon-DRoSC7Os.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
