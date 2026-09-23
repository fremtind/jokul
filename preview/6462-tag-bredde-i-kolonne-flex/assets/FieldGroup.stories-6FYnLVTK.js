import{r as n,j as i}from"./iframe-GUMvaebt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CuyAy6Xb.js";import{CheckboxStory as c}from"./Checkbox.stories-BfyKLYAQ.js";import d from"./Help.stories-C7VpyDpl.js";import k from"./RadioButton.stories-CS1JcejD.js";import{RadioPanel as u}from"./RadioPanel.stories-BkNX0ynZ.js";import{F as g}from"./FieldGroup-DIs-rijs.js";import{C as h}from"./Checkbox-DmFMRwM_.js";import{R as b}from"./RadioPanel-CEHC-5wp.js";import{H as x}from"./Help-DBH5KHFa.js";import{R as C}from"./RadioButton-CMJv_N5X.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BzmppCGq.js";import"./clsx-B-dksMZM.js";import"./Flex-pGKuY7Hp.js";import"./SlotComponent-CN22KJt8.js";import"./mergeRefs-DaHFbyKg.js";import"./Button-D_ryyEu5.js";import"./usePreviousValue-bNVS_7tz.js";import"./Loader-efXyNDdm.js";import"./useDelayedRender-BZACxSlL.js";import"./useId-BkrXgGj9.js";import"./Label-CtbftyYj.js";import"./SupportLabel-IvX7GCqZ.js";import"./SuccessIcon-B_2_VSLu.js";import"./Icon-ymvwKgcs.js";import"./WarningIcon-CPrB1-M-.js";import"./BaseRadioButton.stories-Is9simnd.js";import"./BaseRadioButton-CzW843uH.js";import"./Title-CSRUlJet.js";import"./Card-BcWGQU-W.js";import"./Text-BATeU72-.js";import"./Tag-B3BNjL6A.js";import"./ExpandablePanel-NOFZgEZD.js";import"./useAnimatedHeightBetween-DEuZX1jd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BuVVcrPN.js";import"./Expander-B4ULMRMF.js";import"./ChevronUpIcon-CvzyyMWh.js";import"./ListItem-BxtQACbl.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
