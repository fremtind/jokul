import{r as n,j as i}from"./iframe-C6rf_d7E.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-qa72NpcA.js";import l from"./Help.stories-DMXsM-p2.js";import c from"./RadioButton.stories-Ok0bX5Bc.js";import{F as d}from"./FieldGroup-m2GkBpGT.js";import{C as k,a as u}from"./CheckboxPanel.stories-9KLiFCbQ.js";import{RadioPanel as g}from"./RadioPanel.stories-Dloyg_bu.js";import{C as h}from"./Checkbox-C95A1LFe.js";import{R as b}from"./RadioPanel-GfwXwgP0.js";import{H as x}from"./Help-B-FjmF3C.js";import{R as C}from"./RadioButton-C4jgRuVq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BVN_B9yL.js";import"./Label-DB2khCh1.js";import"./SupportLabel-CMRZ8oPs.js";import"./SuccessIcon-DHzDEgFM.js";import"./Icon-BAhoDBmB.js";import"./WarningIcon-hh2PdGt-.js";import"./BaseRadioButton.stories-tu82kwqy.js";import"./BaseRadioButton-gCpDtbQ7.js";import"./InputPanel-DgGgWKgR.js";import"./Flex-IBBXwRC9.js";import"./SlotComponent-GH3InyFW.js";import"./mergeRefs-CHirAEc0.js";import"./Button-CRWeHiKQ.js";import"./usePreviousValue-xoF_26zy.js";import"./Loader-R0-GRMxQ.js";import"./useDelayedRender-DYOKzVIW.js";import"./Title-J9vvbeaQ.js";import"./Card-BjkAEz1f.js";import"./Text-Wjo9Wygp.js";import"./Tag-DrghVirs.js";import"./ExpandablePanel-fubAoIx8.js";import"./useAnimatedHeightBetween-BLfw2d-v.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D7qrnJel.js";import"./Expander-B8BpmzBa.js";import"./ChevronUpIcon-Za8jAkYu.js";import"./ListItem-DlT0Cua-.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
