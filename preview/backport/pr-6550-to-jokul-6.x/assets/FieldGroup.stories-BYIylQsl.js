import{r as n,j as i}from"./iframe-Ba0Nqpfv.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B0Rcqheq.js";import{CheckboxStory as c}from"./Checkbox.stories-ClT0aTvU.js";import d from"./Help.stories-DXh2h0Lq.js";import k from"./RadioButton.stories-CCCY8hHE.js";import{RadioPanel as u}from"./RadioPanel.stories-YnWeZjiL.js";import{F as g}from"./FieldGroup-Sh_-GYjk.js";import{C as h}from"./Checkbox-BFDBYj63.js";import{R as b}from"./RadioPanel-C3xbx-Jg.js";import{H as x}from"./Help-B3ksfVRb.js";import{R as C}from"./RadioButton-Dd3ibaCE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-kAsQfpcw.js";import"./clsx-B-dksMZM.js";import"./Flex-BuIUm89k.js";import"./SlotComponent-A-WT7tCx.js";import"./mergeRefs-DLt08roy.js";import"./Button-BwUcrpw6.js";import"./usePreviousValue-TBXxEBCN.js";import"./Loader-MhyglAc3.js";import"./useDelayedRender---PLM2Rk.js";import"./useId-D3RQ_H-C.js";import"./Label-C9ZJHtH9.js";import"./SupportLabel-CAh8b_km.js";import"./SuccessIcon-BSVg3a-3.js";import"./Icon-VjY71dMF.js";import"./WarningIcon-qPEY7SBA.js";import"./BaseRadioButton.stories-B1Xqlzbj.js";import"./BaseRadioButton-C0cQQ_T9.js";import"./Title-CndzNM8d.js";import"./Card-C-QlKcR7.js";import"./Text-Ci_0vm88.js";import"./Tag-B_Rp2O2u.js";import"./ExpandablePanel-Dr6qaQJI.js";import"./useAnimatedHeightBetween-Aes2ouKn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B6l63i--.js";import"./Expander-CW4973lJ.js";import"./ChevronUpIcon-BCwiHdm7.js";import"./ListItem-BpUiuq3B.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
