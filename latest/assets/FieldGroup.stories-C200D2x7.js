import{r as n,j as i}from"./iframe-WPZ7RaUF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CQ9EEVZD.js";import{CheckboxStory as c}from"./Checkbox.stories-BeZdNiQm.js";import d from"./Help.stories-B4T0O1aU.js";import k from"./RadioButton.stories-BS4f6gFO.js";import{RadioPanel as u}from"./RadioPanel.stories-Dp1roJQa.js";import{F as g}from"./FieldGroup-Bh3rgF_v.js";import{C as h}from"./Checkbox-BIr43YZm.js";import{R as b}from"./RadioPanel-gA7Z7htd.js";import{H as x}from"./Help-Cd118z1i.js";import{R as C}from"./RadioButton-CtAKTIMa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BQCWLRPL.js";import"./clsx-B-dksMZM.js";import"./Flex-DJo3UVlU.js";import"./SlotComponent-urlW7IWq.js";import"./mergeRefs-CeCNdlx8.js";import"./Button-CdVi7zY2.js";import"./usePreviousValue-BeFvUrE6.js";import"./Loader-CVtaQFv3.js";import"./useDelayedRender-DVOSuvhZ.js";import"./useId-Dk43YpkK.js";import"./Label-ldMqR10e.js";import"./SupportLabel-CYmnX8dN.js";import"./SuccessIcon-Djcantjp.js";import"./Icon-BL_CxV31.js";import"./WarningIcon-Bujkmemj.js";import"./BaseRadioButton.stories-w6gNpab7.js";import"./BaseRadioButton-CAIgrKzi.js";import"./Title-DtiOTJCS.js";import"./Card-Dk9qUgxx.js";import"./Text-D0-MFzbL.js";import"./Tag-Cm6_yDBB.js";import"./ExpandablePanel-DolOTQK7.js";import"./useAnimatedHeightBetween-B2IBX6xn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CLQmObds.js";import"./Expander-CDBdEZOP.js";import"./ChevronUpIcon-BsTuqmM-.js";import"./ListItem-BijjIgiP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
