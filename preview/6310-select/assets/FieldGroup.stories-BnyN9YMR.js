import{r as p,j as i}from"./iframe-CVI0Zc7O.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-tzqawbBG.js";import l from"./Help.stories-BahxGDKX.js";import c from"./RadioButton.stories-B-s8boCI.js";import{F as d}from"./FieldGroup-CqPvqJaZ.js";import{C as k,a as u}from"./CheckboxPanel.stories-BQSsOPVv.js";import{RadioPanel as g}from"./RadioPanel.stories-Da1xvfnI.js";import{C as h}from"./Checkbox-D9_ZF1Zd.js";import{R as b}from"./RadioPanel-WsusBKP_.js";import{H as x}from"./Help-DsHwK50j.js";import{R as C}from"./RadioButton-DZQHQ5bd.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DpxwRZlq.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BNJWKux8.js";import"./mergeRefs-CFgd9E5l.js";import"./BaseRadioButton.stories-D78PNzaA.js";import"./BaseRadioButton-CUIsBJZ5.js";import"./useId-Bl4n_eRC.js";import"./Label-Ce7yUA48.js";import"./SupportLabel-XQ6UMhAO.js";import"./SuccessIcon-CQaqK7mZ.js";import"./Icon-jyN1qjA3.js";import"./WarningIcon-C-7Q1Qvw.js";import"./InputPanel-DH11JOFA.js";import"./Button-bYnWweYC.js";import"./usePreviousValue-FZ6xUwFd.js";import"./Loader-DKqvJ7Ef.js";import"./useDelayedRender-C8ZyG8pX.js";import"./Title-BgvMCybR.js";import"./Card-BE-rDsme.js";import"./Text-CXKvuvyX.js";import"./Tag-Dw8zxpz4.js";import"./ExpandablePanel-C5FZrBYO.js";import"./useAnimatedHeightBetween-C3sJJ4iM.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CUQJEV30.js";import"./Expander-BusDl8vB.js";import"./ChevronDownIcon-DiBOFVDj.js";import"./ChevronUpIcon-B6mNay5_.js";import"./ListItem-DKDI6Oky.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
