import{j as p,r as a}from"./iframe-3VnfSXzb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B_6pClov.js";import{H as s,m as n}from"./Help.stories-DIomgfzi.js";import c from"./RadioButton.stories-Dn4X0K-t.js";import{F as d}from"./FieldGroup-BPKzvDai.js";import{R as l}from"./RadioButton-CXUXcsUP.js";import{C as u}from"./Checkbox-BgHnITJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-hpgs-O5T.js";import"./Label-B2F0-u7B.js";import"./SupportLabel-BhhAThff.js";import"./WarningIcon-DKEasB6R.js";import"./Icon-B9K71gEJ.js";import"./Button-DoJw4iMH.js";import"./usePreviousValue-B7azj8xL.js";import"./Loader-DlV1Fn4d.js";import"./useDelayedRender-CvN8wXHT.js";/* empty css               *//* empty css               */import"./Flex-DuZ4-IEy.js";import"./SlotComponent-D9jslJgm.js";import"./mergeRefs-zq3JPcMC.js";import"./BaseRadioButton.stories-uam6agzS.js";import"./BaseRadioButton-DyOfVDMs.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
