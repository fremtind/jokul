import{r as a,j as p}from"./iframe-BLE_skfy.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BhqpFFWw.js";import{H as s,m as n}from"./Help.stories-CytV0yWp.js";import c from"./RadioButton.stories-B-ki1qje.js";import{F as d}from"./FieldGroup-C84WpGqE.js";import{C as l}from"./Checkbox-BdLZkARl.js";import{R as u}from"./RadioButton-B5-KCyVw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BU42B2jS.js";import"./Button-WeBun_sh.js";import"./usePreviousValue-BnPVgk7D.js";import"./Loader-DcIjEUJG.js";import"./useDelayedRender-Bnm0jRON.js";/* empty css               *//* empty css               */import"./Flex-aiEAUwjf.js";import"./SlotComponent-C4jaRBvf.js";import"./mergeRefs-B72_x4-P.js";import"./BaseRadioButton.stories-BQMpoE8-.js";import"./BaseRadioButton-B63c-muQ.js";import"./useId-Cmr7FJ0i.js";import"./Label-9-RNCTr-.js";import"./SupportLabel-BOHWVIfg.js";import"./WarningIcon-BRwjeHAD.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
