import{r as p,j as i}from"./iframe-kuG8Ck5j.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CzJubUQ0.js";import l from"./Help.stories-BMNfdr3S.js";import c from"./RadioButton.stories-D5W5ffu5.js";import{F as d}from"./FieldGroup-PlGsOaEs.js";import{C as k,a as u}from"./CheckboxPanel.stories-CmtukJAL.js";import{RadioPanel as g}from"./RadioPanel.stories-B9b9brCI.js";import{C as h}from"./Checkbox-oOLwChCI.js";import{R as b}from"./RadioPanel-BV_lCYhv.js";import{H as x}from"./Help-aT6vbXLB.js";import{R as C}from"./RadioButton-BrMQXPq0.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BtrvcFtb.js";import"./BaseRadioButton-C3gxaHoG.js";import"./clsx-B-dksMZM.js";import"./useId-B6hZZNcF.js";import"./Label-D4JuEBlp.js";import"./SupportLabel-CrtDxh9o.js";import"./SuccessIcon-DbD1Dwiz.js";import"./Icon-V5VrqRJi.js";import"./WarningIcon-C8BneHkA.js";import"./InputPanel-Wals1l32.js";import"./Flex-CpN8T70m.js";import"./SlotComponent-BRaaTg3Q.js";import"./mergeRefs-DkSYl4F6.js";import"./Button-do4fODzE.js";import"./usePreviousValue-CDTcb2aZ.js";import"./Loader-DkHBKRFb.js";import"./useDelayedRender-CyHDS8kH.js";import"./Title-CakUu64C.js";import"./Card-CQYnkrCU.js";import"./Text-Cw33OvTO.js";import"./Tag-BJiVRdf8.js";import"./ExpandablePanel-CkSSrxjg.js";import"./useAnimatedHeightBetween-v8Mpr2t8.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DODquuI2.js";import"./Expander-qiYpFOlu.js";import"./ChevronDownIcon-Dk1xIvXU.js";import"./ChevronUpIcon-BRh97rRR.js";import"./ListItem-NZgtlT12.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
