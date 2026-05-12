import{j as p,r as a}from"./iframe-qPdjsDTY.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CXFaZE3H.js";import{H as s,m as n}from"./Help.stories-DlWfw90R.js";import c from"./RadioButton.stories-CMjax5jH.js";import{F as d}from"./FieldGroup-CCgS4NgM.js";import{R as l}from"./RadioButton-Ckq2NrYc.js";import{C as u}from"./Checkbox-g-qs_0oS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-vaqI8ePy.js";import"./Label-BBhcNJWv.js";import"./SupportLabel-BDNocW8W.js";import"./WarningIcon-C8C4X52P.js";import"./Icon-eLxbogyx.js";import"./Button-CBM1uL04.js";import"./usePreviousValue-Day4ht3C.js";import"./Loader-Dw4j3pyn.js";import"./useDelayedRender-s16_zWR-.js";/* empty css               *//* empty css               */import"./Flex-BE50FWvP.js";import"./SlotComponent-CqE-TzxA.js";import"./mergeRefs-DrFL83Aq.js";import"./BaseRadioButton.stories-DnMNTez9.js";import"./BaseRadioButton-F5kG7zzp.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
