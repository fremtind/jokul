import{j as p,r as a}from"./iframe-DmUqeAJK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Be-tIrI6.js";import{H as s,m as n}from"./Help.stories-CnEsgmvU.js";import c from"./RadioButton.stories-UtQNkOkX.js";import{F as d}from"./FieldGroup-CqerTwVm.js";import{R as l}from"./RadioButton-B31XfaSz.js";import{C as u}from"./Checkbox-2owMnIPN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dsv0BK8r.js";import"./Label-BrD7hPaG.js";import"./SupportLabel-D6ugdzq5.js";import"./WarningIcon-J5tuwde4.js";import"./Icon-DeLpUVFo.js";import"./Button-KJPI4vld.js";import"./usePreviousValue-7fKkDG4T.js";import"./Loader-C4rswBWU.js";import"./useDelayedRender-DujOwxgh.js";/* empty css               *//* empty css               */import"./Flex-2WK8tC7_.js";import"./SlotComponent-DVvZgNaG.js";import"./mergeRefs-BDhJXnkT.js";import"./BaseRadioButton.stories-B4M4Qfdd.js";import"./BaseRadioButton-Bm794ue3.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
