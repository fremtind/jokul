import{r as p,j as i}from"./iframe-DNq9wY-H.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-RvIk8_BK.js";import{CheckboxStory as c}from"./Checkbox.stories-CsQeZism.js";import d from"./Help.stories-CHIcqXHT.js";import k from"./RadioButton.stories-BMT5ulXx.js";import{RadioPanel as u}from"./RadioPanel.stories-CVZS-aoO.js";import{F as g}from"./FieldGroup-FH-_Hcyv.js";import{C as h}from"./Checkbox-DBp9Uy5j.js";import{R as b}from"./RadioPanel-tWLBdy2z.js";import{H as x}from"./Help-BFtbCEWt.js";import{R as C}from"./RadioButton-B6mnzOrb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DhFlG3Vl.js";import"./clsx-B-dksMZM.js";import"./Flex-gw7325zu.js";import"./SlotComponent-Cf1NEZM3.js";import"./mergeRefs-B3vbN-h1.js";import"./Button-Bqo7xbpC.js";import"./usePreviousValue-B1Wq1zAT.js";import"./Loader-BU7ZLWIx.js";import"./useDelayedRender-BfH9VzJr.js";import"./BaseRadioButton.stories-1oEk5s_T.js";import"./BaseRadioButton-CWc-HSZH.js";import"./useId-BxsucUXZ.js";import"./Title-puTwsBE9.js";import"./Card-CiEaScqL.js";import"./Text-CRYPevEm.js";import"./Tag-DPMEhsav.js";import"./ExpandablePanel-DVPguzZY.js";import"./useAnimatedHeightBetween-DH5P1NXB.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DnrtzKBi.js";import"./Expander-Btcx-JRb.js";import"./ChevronDownIcon-B_VnuNEW.js";import"./Icon-CgsNJjqv.js";import"./ChevronUpIcon-TC8wZa7r.js";import"./ListItem-Ch8LvLM7.js";import"./Label-KUhdW8uk.js";import"./SupportLabel-CFDwYh2O.js";import"./SuccessIcon-BZcMaDm_.js";import"./WarningIcon-CBq7HFS2.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
