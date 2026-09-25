import{r as n,j as i}from"./iframe-CjBDd3hz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bb2T_x3m.js";import{CheckboxStory as c}from"./Checkbox.stories-BqJYfC9a.js";import d from"./Help.stories-7ed3p8YD.js";import k from"./RadioButton.stories-DqFk3Pd6.js";import{RadioPanel as u}from"./RadioPanel.stories-BmzWjsk5.js";import{F as g}from"./FieldGroup-DBnFEYww.js";import{C as h}from"./Checkbox-qkdNs02v.js";import{R as b}from"./RadioPanel-BCPkInsw.js";import{H as x}from"./Help-FN6ge9n3.js";import{R as C}from"./RadioButton-BRjljF1S.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-jL6bgIUE.js";import"./clsx-B-dksMZM.js";import"./Flex-8yrJW3kT.js";import"./SlotComponent-DcjvQoHh.js";import"./mergeRefs-D4hZ2N0u.js";import"./Button-CXgVhFsK.js";import"./usePreviousValue-Bqu2A0YD.js";import"./Loader-CpbhheQM.js";import"./useDelayedRender-BvbX1EkS.js";import"./useId-COYTrkhi.js";import"./Label-K2z4fWiZ.js";import"./SupportLabel-DBuM-Zol.js";import"./SuccessIcon-BfhzMZtU.js";import"./Icon-Cf5Rbg3x.js";import"./WarningIcon-Bo30Sbwg.js";import"./BaseRadioButton.stories-BOeFRuay.js";import"./BaseRadioButton-CEwbCt5C.js";import"./Title-DSmNNGe0.js";import"./Card-B1b60_kv.js";import"./Text-CfaOHJEn.js";import"./Tag-DunjS_Vn.js";import"./ExpandablePanel-D9G-7WO9.js";import"./useAnimatedHeightBetween-BzRcSQYt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BaFsgW8P.js";import"./Expander-pVHL-E2U.js";import"./ChevronUpIcon-BUfL3UQn.js";import"./ListItem-BNAoeUpJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
