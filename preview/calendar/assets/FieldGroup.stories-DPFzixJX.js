import{r as p,j as i}from"./iframe-DlRo0Od7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BoUTsWaM.js";import l from"./Help.stories-DL4HIKU1.js";import c from"./RadioButton.stories-BC1qnU16.js";import{F as d}from"./FieldGroup-DP5kbr4H.js";import{C as k,a as u}from"./CheckboxPanel.stories-BiuejS0x.js";import{RadioPanel as g}from"./RadioPanel.stories-DMz4QRUc.js";import{C as h}from"./Checkbox-DGwQjD0U.js";import{R as b}from"./RadioPanel-Bb4Hkfam.js";import{H as x}from"./Help-B3mW4gDK.js";import{R as C}from"./RadioButton-WIXzTLEZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BPwG8gBN.js";import"./Label-deQsbfoU.js";import"./SupportLabel-D4p0OA7v.js";import"./SuccessIcon-D0yrAfMB.js";import"./Icon-BBrWGALT.js";import"./WarningIcon-BL41_E24.js";/* empty css               *//* empty css               */import"./Flex-DufZ0qUO.js";import"./SlotComponent-BDwOEl1l.js";import"./mergeRefs-CJOSvazQ.js";import"./BaseRadioButton.stories-DIsOjPLN.js";import"./BaseRadioButton-CJNDR6f9.js";import"./InputPanel-_19jpkq4.js";import"./Button-CHg3in3f.js";import"./usePreviousValue-LsRDvOQh.js";import"./Loader-tIky59E3.js";import"./useDelayedRender-DkTKoGur.js";import"./Title-D5F0ggcs.js";import"./Card-7QtvrOd4.js";import"./Text-CAveR0fO.js";import"./Tag-Cicn1nZN.js";import"./ExpandablePanel-DrzIgnwe.js";import"./useAnimatedHeightBetween-_AGRsisQ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cj_E6YIa.js";import"./Expander-B9Gx5OW1.js";import"./ChevronDownIcon-COqjSszD.js";import"./ChevronUpIcon-DJ-COcul.js";import"./ListItem-BGilsRWn.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
