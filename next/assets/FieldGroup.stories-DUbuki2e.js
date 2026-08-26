import{r as n,j as i}from"./iframe-dvfQprBw.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DcX3bfSS.js";import l from"./Help.stories-VLzBn9h2.js";import c from"./RadioButton.stories-BvXIgB7F.js";import{F as d}from"./FieldGroup--mNxFrsP.js";import{C as k,a as u}from"./CheckboxPanel.stories-CCy-BrsX.js";import{RadioPanel as g}from"./RadioPanel.stories-CeSktCeb.js";import{C as h}from"./Checkbox-mRO_8F5N.js";import{R as b}from"./RadioPanel-C1RrUhAG.js";import{H as x}from"./Help-TAwGRKxc.js";import{R as C}from"./RadioButton-KkCAgxbK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dvpbx2Uk.js";import"./Label-C6j2sAu_.js";import"./SupportLabel-DYYCHn26.js";import"./SuccessIcon-8Tsd8E0o.js";import"./Icon-vN4poXzb.js";import"./WarningIcon-P1am_-K6.js";import"./BaseRadioButton.stories-CRHdTpgE.js";import"./BaseRadioButton-BxiKF6b-.js";import"./InputPanel-Fqv56ioE.js";import"./Flex-DziLkIfy.js";import"./SlotComponent-CBQujgXz.js";import"./mergeRefs-CIyn-s3s.js";import"./Button-C-q8ojWE.js";import"./usePreviousValue-B4Sk1RXv.js";import"./Loader-Dt0JJzx7.js";import"./useDelayedRender-BfEv_Q3Z.js";import"./Title-Dpiv0Zl4.js";import"./Card-RztKLwU9.js";import"./Text-DQrB1I9c.js";import"./Tag-f33bH3Lg.js";import"./ExpandablePanel-DJ33LwLL.js";import"./useAnimatedHeightBetween-DjaOT-fc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ce3iJDDg.js";import"./Expander-D-t5hbp_.js";import"./ChevronUpIcon-CZ4x6fl2.js";import"./ListItem-C4FtaeQc.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
