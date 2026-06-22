import{r as a,j as p}from"./iframe-B9B2iQPq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-oMitdYTT.js";import s from"./Help.stories-DgCGnWmt.js";import n from"./RadioButton.stories-TjBUEv6R.js";import{F as c}from"./FieldGroup-Dpn7bkp_.js";import{C as d}from"./Checkbox-D2mwbe8v.js";import{H as l}from"./Help-CFNtfaBp.js";import{R as u}from"./RadioButton-BXOBCQff.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BZwMuxHA.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D1Cqr0Vg.js";import"./mergeRefs-C2Z1RxN_.js";import"./BaseRadioButton.stories-CHWNRqBW.js";import"./BaseRadioButton-B50iZ-S4.js";import"./useId-COaKV4T_.js";import"./Label-CqUGzVVy.js";import"./SupportLabel-DE-BUjrK.js";import"./SuccessIcon-BlA4v25Z.js";import"./Icon-DOYMQfkf.js";import"./WarningIcon-BhhhauDK.js";import"./Button-C78U90nS.js";import"./usePreviousValue-BGOjyvEy.js";import"./Loader-XiHmIIWU.js";import"./useDelayedRender-BxEiUR7C.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
