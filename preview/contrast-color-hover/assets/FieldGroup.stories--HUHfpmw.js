import{r as n,j as i}from"./iframe-DhpyhEJb.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DVsUMf0U.js";import{CheckboxStory as c}from"./Checkbox.stories-B2jKD1Fh.js";import d from"./Help.stories-B94oGHIZ.js";import k from"./RadioButton.stories-8kwCP4oc.js";import{RadioPanel as u}from"./RadioPanel.stories-DQJs0jmO.js";import{F as g}from"./FieldGroup-B_DhhR9c.js";import{C as h}from"./Checkbox-CE_wI2N6.js";import{R as b}from"./RadioPanel-B4glR4wM.js";import{H as x}from"./Help-CpthvdVS.js";import{R as C}from"./RadioButton-rE7ZXUBf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CKAQDrKW.js";import"./clsx-B-dksMZM.js";import"./Flex-B4JtBhmy.js";import"./SlotComponent-CvrkS4dq.js";import"./mergeRefs-B4Ecp6pP.js";import"./Button-DoMQJUJ6.js";import"./usePreviousValue-jQQDxSDt.js";import"./Loader-DnxXKUMt.js";import"./useDelayedRender-V2jBqyY4.js";import"./useId-DcW_Zgty.js";import"./Label-B3waza7o.js";import"./SupportLabel-AffsYaX_.js";import"./SuccessIcon-Dd7Fvii5.js";import"./Icon-DZcN2KYX.js";import"./WarningIcon-DG07b4Om.js";import"./BaseRadioButton.stories-F-de8vdT.js";import"./BaseRadioButton-BAci7faq.js";import"./Title-CAi0-6jN.js";import"./Card-bX0aEARA.js";import"./Text-BG9zXfSB.js";import"./Tag-NFy0wYaI.js";import"./ExpandablePanel-C83tJkBA.js";import"./useAnimatedHeightBetween-Cxh4_d88.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BQeS_Huw.js";import"./Expander-BIbZR2LH.js";import"./ChevronUpIcon-4TwB-KF9.js";import"./ListItem-DJg1BYjN.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
