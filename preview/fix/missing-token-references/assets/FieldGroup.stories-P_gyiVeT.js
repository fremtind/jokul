import{j as p,r as a}from"./iframe-BwR1o4Ld.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DSnYCIhg.js";import{H as s,m as n}from"./Help.stories-BxzXSz2b.js";import c from"./RadioButton.stories-DTigAgQ2.js";import{F as d}from"./FieldGroup-oBQRr0pL.js";import{R as l}from"./RadioButton-BCCfkkz-.js";import{C as u}from"./Checkbox-Cm5So2p_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BKiqbOK6.js";import"./Label-CVErexCG.js";import"./SupportLabel-BzUGNBga.js";import"./WarningIcon-DOYfKAK7.js";import"./Icon-DmuH_pFd.js";import"./Button-CguZA9zd.js";import"./usePreviousValue-DvMeaz3E.js";import"./Loader-i4DIiVbH.js";import"./useDelayedRender-BcL-vyMb.js";/* empty css               *//* empty css               */import"./Flex-BvV5unf0.js";import"./SlotComponent-C7hv1awI.js";import"./mergeRefs-BtW2_db5.js";import"./BaseRadioButton.stories-Czj4NlrE.js";import"./BaseRadioButton-BxaSdvwn.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
