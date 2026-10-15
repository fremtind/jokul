import{r as n,j as i}from"./iframe-CxXCJiLE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-UejtXXkt.js";import{CheckboxStory as c}from"./Checkbox.stories-DClDKwXy.js";import d from"./Help.stories-CT9Qt7IE.js";import k from"./RadioButton.stories-B0Y6NFBS.js";import{RadioPanel as u}from"./RadioPanel.stories-D-z62dKd.js";import{F as g}from"./FieldGroup-Rua1kJfe.js";import{C as h}from"./Checkbox-BmokuBFm.js";import{R as b}from"./RadioPanel-DLJOTVhi.js";import{H as x}from"./Help-CvgTHO2c.js";import{R as C}from"./RadioButton-Bc7PBYNr.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bi_yZj-w.js";import"./clsx-B-dksMZM.js";import"./Flex-COny_U8a.js";import"./SlotComponent-B6Xd6-V0.js";import"./mergeRefs-DA9_zy4B.js";import"./Button-CgMvzTwQ.js";import"./usePreviousValue-4C83tgAX.js";import"./Loader-n7zAiak9.js";import"./useDelayedRender-DiKQ2fP0.js";import"./useId-CrgnGMTN.js";import"./Label-CMgBjZlQ.js";import"./SupportLabel-C7GpaabG.js";import"./SuccessIcon-TVA0TiBm.js";import"./Icon-DxZF2e6I.js";import"./WarningIcon-CFu-NFPf.js";import"./BaseRadioButton.stories-FBw6tgpF.js";import"./BaseRadioButton-DdPYq8t5.js";import"./Title-sgF66NnG.js";import"./Card-Ddq-sdkb.js";import"./Text-R0Jyg2lG.js";import"./Tag-BKPvlLCx.js";import"./ExpandablePanel-iGHLXWjl.js";import"./useAnimatedHeightBetween-yEOx1PZP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-77v5HIrT.js";import"./Expander-YYSwsHcB.js";import"./ChevronUpIcon-D0Ele7sz.js";import"./ListItem-DYRJPi-B.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
