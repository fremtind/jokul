import{r as p,j as i}from"./iframe-DsIRJCHv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D7Cuv9pv.js";import l from"./Help.stories-BLhZB3IZ.js";import c from"./RadioButton.stories-DIoack8J.js";import{F as d}from"./FieldGroup-BeanGbcG.js";import{C as k,a as u}from"./CheckboxPanel.stories-BzT0xR6Q.js";import{RadioPanel as g}from"./RadioPanel.stories-Ckcr6_Eo.js";import{C as h}from"./Checkbox-Bj-ROE2n.js";import{R as b}from"./RadioPanel-0gro2e9X.js";import{H as x}from"./Help-Dr0byiQT.js";import{R as C}from"./RadioButton-B-2Q8pzz.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CUwg6ABq.js";import"./BaseRadioButton-CibwdmLi.js";import"./clsx-B-dksMZM.js";import"./useId-BzhnSNA9.js";import"./Label-27cATDsG.js";import"./SupportLabel-BXPiP8Mi.js";import"./SuccessIcon-CUlcbDWN.js";import"./Icon-6arutuCm.js";import"./WarningIcon-B29vxR6n.js";import"./InputPanel-D3URcZa0.js";import"./Flex-C1hwPucb.js";import"./SlotComponent-DjxqI7VB.js";import"./mergeRefs-DVLAo5T0.js";import"./Button-BF5HjHqI.js";import"./usePreviousValue-n3VrjYFM.js";import"./Loader-CToLHssC.js";import"./useDelayedRender-CXrb2jUp.js";import"./Title-BJiqTXsr.js";import"./Card-CwIhEHhm.js";import"./Text-kpCZRO9i.js";import"./Tag-jqfw8t6L.js";import"./ExpandablePanel-BPLGN-c4.js";import"./useAnimatedHeightBetween-hqM7iVlH.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-tXg9fTzM.js";import"./Expander-C3kbRMOt.js";import"./ChevronDownIcon-DueDCmxS.js";import"./ChevronUpIcon-CnPm7ykf.js";import"./ListItem-Cif4bIVa.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
