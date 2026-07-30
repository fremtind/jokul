import{r as n,j as i}from"./iframe-RCiDKOC6.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cxe3hpXS.js";import l from"./Help.stories-BbHvlev7.js";import c from"./RadioButton.stories-DniLCFbU.js";import{F as d}from"./FieldGroup-Ptof-nDD.js";import{C as k,a as u}from"./CheckboxPanel.stories-edoEvOs8.js";import{RadioPanel as g}from"./RadioPanel.stories-DZxeZZ0E.js";import{C as h}from"./Checkbox-CjBebu_4.js";import{R as b}from"./RadioPanel-D-ayXVzx.js";import{H as x}from"./Help-CXtuGDKk.js";import{R as C}from"./RadioButton-COemlhNG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D2G0PmcF.js";import"./Label-C0TO7_S4.js";import"./SupportLabel-BIX4JRNl.js";import"./SuccessIcon-BPEts3V3.js";import"./Icon-CFSHu--5.js";import"./WarningIcon-CQR7mazW.js";import"./BaseRadioButton.stories-EHlx7DAW.js";import"./BaseRadioButton-Bri2nj_u.js";import"./InputPanel-CXS3OuK6.js";import"./Flex-DIKvoCnl.js";import"./SlotComponent-BF3J2ex6.js";import"./mergeRefs-DY0sZ88l.js";import"./Button-Ca4KFYpr.js";import"./usePreviousValue-DpBa-jT0.js";import"./Loader-CO6-M48k.js";import"./useDelayedRender-Da28cLeW.js";import"./Title-DDpZPW3j.js";import"./Card-Ub5rNWjZ.js";import"./Text-CA2oFxIY.js";import"./Tag-CeKFIKYb.js";import"./ExpandablePanel-BWYHMY1C.js";import"./useAnimatedHeightBetween-DPAuBczm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DLFkCLwj.js";import"./Expander-CR9_GSbT.js";import"./ChevronUpIcon-Cqe6o0_1.js";import"./ListItem-BVJ4Wh_v.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
