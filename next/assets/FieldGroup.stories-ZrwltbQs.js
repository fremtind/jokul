import{r as n,j as i}from"./iframe-BhBvFxCW.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BMK0JVVX.js";import{CheckboxStory as c}from"./Checkbox.stories-BefZrz2i.js";import d from"./Help.stories-Jmx68Rjd.js";import k from"./RadioButton.stories-dcTF-AAJ.js";import{RadioPanel as u}from"./RadioPanel.stories-D_I6qVAU.js";import{F as g}from"./FieldGroup-DQaf864r.js";import{C as h}from"./Checkbox-BWVoVouD.js";import{R as b}from"./RadioPanel-DVCsTRtB.js";import{H as x}from"./Help-DhKnNSY3.js";import{R as C}from"./RadioButton-lxBejqBC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BG_sE05u.js";import"./clsx-B-dksMZM.js";import"./Flex-C9J3-dF_.js";import"./SlotComponent-BRYFG0kO.js";import"./mergeRefs-JIOpQ71z.js";import"./Button-DqbfgIPH.js";import"./usePreviousValue-CGXqNhSb.js";import"./Loader-X4mMSLJZ.js";import"./useDelayedRender-fYW2mROt.js";import"./useId-5PWboc1N.js";import"./Label-CFw27NjM.js";import"./SupportLabel-DYlQuP0k.js";import"./SuccessIcon-DOvvzsrM.js";import"./Icon-D3cTsEhZ.js";import"./WarningIcon-QDs7qaW4.js";import"./BaseRadioButton.stories-Q4-CCNfx.js";import"./BaseRadioButton-CSP37YnY.js";import"./Title-CNqAZbnl.js";import"./Card-Cw66HFWZ.js";import"./Text-D8_8Heia.js";import"./Tag-C6CEU-WA.js";import"./ExpandablePanel-CyvmKXgj.js";import"./useAnimatedHeightBetween-vBKVtJdt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Du689zen.js";import"./Expander-GJ6pbDot.js";import"./ChevronUpIcon-B-6cK6Cq.js";import"./ListItem-BO9N8WKt.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
