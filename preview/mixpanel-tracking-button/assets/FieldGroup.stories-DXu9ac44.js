import{r as n,j as i}from"./iframe-hCCqVmPB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B09CD3TR.js";import{CheckboxStory as c}from"./Checkbox.stories-DmpbyXmg.js";import d from"./Help.stories-D485C_3O.js";import k from"./RadioButton.stories-BZKUBZNh.js";import{RadioPanel as u}from"./RadioPanel.stories-Cl3p_CR3.js";import{F as g}from"./FieldGroup-BbftJKyy.js";import{C as h}from"./Checkbox-CNs5C1JS.js";import{R as b}from"./RadioPanel-MhQKAVYx.js";import{H as x}from"./Help-BIQDGNi8.js";import{R as C}from"./RadioButton-D_FUKc2c.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CTQMBdv9.js";import"./clsx-B-dksMZM.js";import"./Flex-CMU6JNLj.js";import"./SlotComponent-OMUWAZ2P.js";import"./mergeRefs-L1cK7-EE.js";import"./Button-CMkPF9-Y.js";import"./usePreviousValue-C6YStaZ0.js";import"./Loader-AJcIEpUw.js";import"./useDelayedRender-yW2ixdBw.js";import"./useId-C160dsR_.js";import"./Label-DKmZznUd.js";import"./SupportLabel-CFuehY3h.js";import"./SuccessIcon-BtTcjMUH.js";import"./Icon-DyxlcUB3.js";import"./WarningIcon-Bpb43Nq0.js";import"./BaseRadioButton.stories-Be3LJd4w.js";import"./BaseRadioButton-fusEQSs0.js";import"./Title-ChLO7zG4.js";import"./Card-BamL8z95.js";import"./Text-CH2CTMXI.js";import"./Tag-Dx7cBANX.js";import"./ExpandablePanel-mN1Ebat4.js";import"./useAnimatedHeightBetween-B_Y231Yr.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CBCor_M2.js";import"./Expander-BbbWT6Jt.js";import"./ChevronUpIcon-CNMytrZh.js";import"./ListItem-C2tj2IcG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
