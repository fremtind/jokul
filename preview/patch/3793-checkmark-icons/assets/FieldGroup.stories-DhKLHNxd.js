import{j as p,r as a}from"./iframe-C7e2jQVA.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CROOR1DM.js";import{H as s,m as n}from"./Help.stories-DbB2MnLq.js";import c from"./RadioButton.stories-3YnUaGNp.js";import{F as d}from"./FieldGroup-Dw28HrOK.js";import{R as l}from"./RadioButton-xOhG6kqo.js";import{C as u}from"./Checkbox-_RfKGg__.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-sZRjx2oH.js";import"./Label-1N8IP247.js";import"./SupportLabel-BcOUNaJr.js";import"./WarningIcon-Ba38EYm5.js";import"./Icon-FM4wcNJl.js";import"./Button-C62xluW7.js";import"./usePreviousValue-DVXWFbgf.js";import"./Loader-DEXL93Hg.js";import"./useDelayedRender-CwNBZSi7.js";/* empty css               *//* empty css               */import"./Flex-DV9svHVk.js";import"./SlotComponent-B9EykFeL.js";import"./mergeRefs-BMgGeSfN.js";import"./BaseRadioButton.stories-RiHqhh5h.js";import"./BaseRadioButton-DpZNup5r.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
