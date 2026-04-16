import{j as p,r as a}from"./iframe-C8GdpOmG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CZhHYV2N.js";import{H as s,m as n}from"./Help.stories-BTgzVqIH.js";import c from"./RadioButton.stories-BguTQmyt.js";import{F as d}from"./FieldGroup-9iSCiBKl.js";import{R as l}from"./RadioButton-v6P3mTUe.js";import{C as u}from"./Checkbox-BabBTeBE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BjCfbuUn.js";import"./Label-DUiN7WNk.js";import"./SupportLabel-CzbMFFle.js";import"./WarningIcon-B-JxNv60.js";import"./Icon-CKToQkNL.js";import"./Button-B4QY0pRd.js";import"./usePreviousValue-BXHWs5YR.js";import"./Loader-BWf1abkR.js";import"./useDelayedRender-edvEem2W.js";/* empty css               *//* empty css               */import"./Flex-BLTfe0T8.js";import"./SlotComponent-DrU1kBI9.js";import"./mergeRefs-CEbFWPOw.js";import"./BaseRadioButton.stories-DjO20Eze.js";import"./BaseRadioButton-DTV3qjAt.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
