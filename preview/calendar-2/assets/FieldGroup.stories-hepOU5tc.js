import{r as n,j as i}from"./iframe-CC3izaGk.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BVrzc_0w.js";import l from"./Help.stories-B0CbsCwc.js";import c from"./RadioButton.stories-CDSZN5W9.js";import{F as d}from"./FieldGroup-CrKc8Ja8.js";import{C as k,a as u}from"./CheckboxPanel.stories-Dli3jYVT.js";import{RadioPanel as g}from"./RadioPanel.stories-BeJLz2Hd.js";import{C as h}from"./Checkbox-BI32cwAu.js";import{R as b}from"./RadioPanel-Ta7icJgt.js";import{H as x}from"./Help-BWt8HecG.js";import{R as C}from"./RadioButton-DiA3odCT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-v4beBf7V.js";import"./Label-SuODc9vh.js";import"./SupportLabel-BXgDqbw9.js";import"./SuccessIcon-Bhb_kLkn.js";import"./Icon-BRsCuCtu.js";import"./WarningIcon-B9Oytaek.js";import"./BaseRadioButton.stories-c_treIl5.js";import"./BaseRadioButton-CMn1YJS-.js";import"./InputPanel-RQ-oxY--.js";import"./Flex-DM1rmxjn.js";import"./SlotComponent-D_gigiSR.js";import"./mergeRefs-C2tZ3Qfq.js";import"./Button--5-UMYqW.js";import"./usePreviousValue-asAx-_tR.js";import"./Loader-BG7vXCae.js";import"./useDelayedRender-C6NJ_Yg3.js";import"./Title-khXO4pqj.js";import"./Card-DH0iQTYn.js";import"./Text-Ct7JaVdq.js";import"./Tag-CHEqBels.js";import"./ExpandablePanel-BwSdWFBB.js";import"./useAnimatedHeightBetween-ClNxv7GG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Du2mQXWz.js";import"./Expander-CqUnvuT9.js";import"./ChevronUpIcon-D_5fwB3J.js";import"./ListItem-BZYiS5yv.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
