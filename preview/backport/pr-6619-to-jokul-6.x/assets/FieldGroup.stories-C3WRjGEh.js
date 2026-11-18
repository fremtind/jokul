import{r as n,j as i}from"./iframe-CVf9grRB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BvYIx---.js";import{CheckboxStory as c}from"./Checkbox.stories-C01-MLkn.js";import d from"./Help.stories-CFV8dU-I.js";import k from"./RadioButton.stories-DlvhOPXk.js";import{RadioPanel as u}from"./RadioPanel.stories-B4bvqy3f.js";import{F as g}from"./FieldGroup-CtxaiPoH.js";import{C as h}from"./Checkbox-CLKcoVM0.js";import{R as b}from"./RadioPanel-Bi9R-FUV.js";import{H as x}from"./Help-XnjuKfQl.js";import{R as C}from"./RadioButton-Clo86HTE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-gwTvvfIj.js";import"./clsx-B-dksMZM.js";import"./Flex-UIqDTjod.js";import"./SlotComponent-Ck6HCGEZ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-gIqjidsL.js";import"./usePreviousValue-DQMvnQMs.js";import"./Loader-BDMuQfTi.js";import"./useDelayedRender-BLPtJcLr.js";import"./useId-BgwQpsqu.js";import"./Label-BdU39MXD.js";import"./SupportLabel-PDH_wgvZ.js";import"./SuccessIcon-B_vB0Jaz.js";import"./Icon-BNxKNi-d.js";import"./WarningIcon-LBnN5Hfo.js";import"./BaseRadioButton.stories-BoGaRqk1.js";import"./BaseRadioButton-sYPzwwXC.js";import"./Title-U76uQbg7.js";import"./Card-Dt9wx_Dg.js";import"./Text-CctDNdVk.js";import"./Tag-CZQgeCYy.js";import"./ExpandablePanel-DhEWjxZM.js";import"./useAnimatedHeightBetween-BRn3Yk9K.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BZDR9Vui.js";import"./Expander-w3OHNdpd.js";import"./ChevronUpIcon-Dl8ztYcR.js";import"./ListItem-BgTlVkFT.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
